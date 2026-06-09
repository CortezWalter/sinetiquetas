# -*- coding: utf-8 -*-
"""Retoque profesional + versiones web del equipo Sin Etiquetas (repo Krew)."""
import numpy as np
from PIL import Image, ImageOps
from scipy.ndimage import gaussian_filter
import os

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = r"C:\Users\corte\Downloads"          # Hai.JPG / Wal.JPG / Dai.JPG
FULL = os.path.join(REPO, "fotos-editadas")
ASSETS = os.path.join(REPO, "assets")
os.makedirs(FULL, exist_ok=True)

def load(name):
    im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, name)))
    return np.asarray(im.convert("RGB"), dtype=np.float32) / 255.0

def lum(x): return 0.2126*x[...,0] + 0.7152*x[...,1] + 0.0722*x[...,2]
def temp_tint(x, t=0.0, ti=0.0): return np.clip(x*np.array([1+t,1+ti*0.5,1-t],np.float32),0,1)
def wb(x, s=1.0):
    m=x.reshape(-1,3).mean(0); g=m.mean()
    return np.clip(x*(1.0+(np.where(m>1e-4,g/m,1.0).astype(np.float32)-1.0)*s),0,1)
def shhl(x, sh=0.0, hl=0.0):
    L=lum(x)[...,None]
    return np.clip(x*(1+sh*np.clip(1-L/0.5,0,1)-hl*np.clip((L-0.5)/0.5,0,1)),0,1)
def fill(x,a=0.0):
    L=lum(x)[...,None]; return np.clip(x+a*(1-x)*np.clip(1-L*2,0,1),0,1)
def bp(x,b=0.02): return np.clip((x-b)/(1-b),0,1)
def con(x,c=1.0): return np.clip((x-0.5)*c+0.5,0,1)
def vib(x,v=0.0,s=0.0):
    g=lum(x)[...,None]; mx=x.max(-1,keepdims=True); mn=x.min(-1,keepdims=True)
    return np.clip(g+(1+s+v*(1-(mx-mn)/(mx+1e-4)))*(x-g),0,1)
def clar(x,a=0.0,sg=12):
    L=lum(x); d=L-gaussian_filter(L,sg); L2=np.clip(L+a*d,1e-4,1)
    return np.clip(x*(L2/np.clip(L,1e-4,1))[...,None],0,1)
def sharp(x,a=0.6,sg=1.2):
    b=np.stack([gaussian_filter(x[...,c],sg) for c in range(3)],-1)
    return np.clip(x+a*(x-b),0,1)
def vig(x,a=0.25,f=0.7):
    h,w=x.shape[:2]; yy,xx=np.mgrid[0:h,0:w]
    r=np.sqrt(((xx-w/2)/(w/2))**2+((yy-h/2)/(h/2))**2)
    return np.clip(x*(1-a*np.clip((r-f)/(1.45-f),0,1)**2)[...,None],0,1)
def img(x): return Image.fromarray((np.clip(x,0,1)*255+0.5).astype(np.uint8))
def save_full(x,n): img(x).save(os.path.join(FULL,n),quality=92,subsampling=0); print("full",n,img(x).size)
def save_web(x,n,L=1100,q=84):
    im=ImageOps.contain(img(x),(L,L)); p=os.path.join(ASSETS,n)
    im.save(p,"JPEG",quality=q,optimize=True,progressive=True)
    print("web",n,im.size,round(os.path.getsize(p)/1024),"KB")

# HAISE — bodega calida, dos copas
a=load("Hai.JPG"); a=wb(a,0.35); a=temp_tint(a,0.015,-0.01); a=shhl(a,0.18,0.22)
a=con(a,1.12); a=clar(a,0.55,16); a=vib(a,0.18,0.04); a=sharp(a,0.55,1.1); a=vig(a,0.22)
save_full(a,"01_haise_bodega.jpg"); save_web(a,"equipo-haise.jpg")

# WALTER — contraluz en la puerta
b=load("Wal.JPG"); h,w=b.shape[:2]; b=b[int(h*0.04):int(h*0.99),int(w*0.05):int(w*0.99)]
b=fill(b,0.20); b=shhl(b,0.16,0.34); b=bp(b,0.035); b=temp_tint(b,0.0,-0.01)
b=con(b,1.16); b=clar(b,0.42,14); b=vib(b,0.16,0.02); b=sharp(b,0.6,1.1); b=vig(b,0.12)
save_full(b,"02_walter_puerta.jpg"); save_web(b,"equipo-walter.jpg")

# DAIANA — jardin otonal, traje bordo
c=load("Dai.JPG"); c=shhl(c,0.12,0.20); c=temp_tint(c,0.02,0.0); c=con(c,1.14)
c=clar(c,0.40,16); c=vib(c,0.28,0.05); c=sharp(c,0.55,1.1); c=vig(c,0.20)
save_full(c,"03_daiana_jardin.jpg"); save_web(c,"equipo-daiana.jpg")
print("DONE")
