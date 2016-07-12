/**
* Popup javascrip Clase javascript que permite crear el efecto popup.
* @mail: nitsugario@gmail.com
* nitsugario.com
**/

function PopupDialogo( pstIdDiv, pboEnElemento )
{
	this.lstIdDiv     = pstIdDiv;
	this.lnuConteTop  = 0;
	this.lnuConteLeft = 0;
	this.opciones     = {
							lstColorFondo: '#fff',
							lnuLeft: 0,
							lnuTop:0,
							lnuOpacity:75,
							lnuZIndex: 100
						}

	var dialog = document.getElementById( this.lstIdDiv );

	this.AnchoPagina = function()
	{
		return window.innerWidth != null ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null;
	}

	this.AltoPagina = function()
	{
		return window.innerHeight != null? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body != null? document.body.clientHeight : null;
	}

	this.PosicionTop = function()
	{
		return typeof window.pageYOffset != 'undefined' ? window.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0;
	}

	this.posicionLeft = function()
	{
		return typeof window.pageXOffset != 'undefined' ? window.pageXOffset : document.documentElement && document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft ? document.body.scrollLeft : 0;
	}

	this.AnchoElemenPagina = function()
	{
		return dialog.parentNode.innerWidth;
	}

	this.AltoElemenPagina = function()
	{
		return dialog.parentNode.innerHeight;
	}

	this.PosicionElemenTop = function()
	{
		return typeof dialog.parentNode.pageYOffset != 'undefined' ? dialog.parentNode.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : dialog.parentNode.scrollTop ? dialog.parentNode.scrollTop : 0;
	}

	this.posicionElemenLeft = function()
	{
		return typeof dialog.parentNode.pageXOffset != 'undefined' ? dialog.parentNode.pageXOffset : document.documentElement && document.documentElement.scrollLeft ? document.documentElement.scrollLeft : dialog.parentNode.scrollLeft ? dialog.parentNode.scrollLeft : 0;
	}

	this.MostrarDialogo = function()
	{
		if ( pboEnElemento )
		{
			var width       = this.AnchoElemenPagina();
			var height      = this.AltoElemenPagina();
			var left        = this.posicionElemenLeft();
			var top         = this.PosicionElemenTop();
		}
		else
		{
			var width       = this.AnchoPagina();
			var height      = this.AltoPagina();
			var left        = this.posicionLeft();
			var top         = this.PosicionTop();
		}

		var dialogmask  = document.getElementById('dialog-mask');
		if( dialogmask == null )
		{
			var dialogmask  = document.createElement('div');
			dialogmask.id   = 'dialog-mask';
			
			if ( pboEnElemento )
			{
				dialog.parentNode.style.position = 'relative';
				dialog.parentNode.style.display  = 'block';
				dialog.parentNode.appendChild(dialogmask);
			}
			else
				document.body.appendChild(dialogmask);	

			dialogmask.style.position        = 'absolute';
			dialogmask.style.top             = this.opciones.lnuTop;
			dialogmask.style.left            = this.opciones.lnuLeft;
			dialogmask.style.width           = "100%";
			dialogmask.style.height          = "100%";
			dialogmask.style.backgroundColor = this.opciones.lstColorFondo;    
			dialogmask.style.opacity         = '.'+this.opciones.lnuOpacity;
			dialogmask.style.filter          = 'alpha(opacity='+this.opciones.lnuOpacity+')';
			dialogmask.alpha                 = this.opciones.lnuOpacity;
			dialogmask.style.zIndex          = this.opciones.lnuZIndex;    
		}

		dialogmask.style.display = ""; 
		dialog.style.display     = "";        

		var dialogwidth     = dialog.offsetWidth;
		var dialogheight    = dialog.offsetHeight;

		var topposition     = top + (height / 2) - (dialogheight / 2);
		if( topposition < 0 )
			topposition = 0;

		var leftposition    = left + (width / 2) - (dialogwidth / 2);

		dialog.style.top        = topposition + "px";
		dialog.style.left       = leftposition + "px";
		dialog.style.position   = 'absolute';
		dialog.style.zIndex     = this.opciones.lnuZIndex+5;
		dialog.style.display    = "block";
	}

	this.OcultarDialogo = function()
	{
		var dialogmask  = document.getElementById('dialog-mask');

		if( dialogmask != null )
			dialogmask.style.display    = "none"; 

		dialog.style.display    = "none"; 
	}
	this.setBackgroundColor = function( pstColor )
	{
		var dialogmask  = document.getElementById('dialog-mask');

		if( dialogmask != null )
			dialogmask.style.backgroundColor = pstColor;
	}
	
	this.setConteTop = function( pnuTop )
	{
		dialog.style.top = pnuTop;
	}

	this.setConteLeft = function( pnuLeft )
	{
		dialog.style.left = pnuLeft;
	}
	this.setOpacity = function( pnuOpcity )
	{
		var dialogmask  = document.getElementById('dialog-mask');

		if( dialogmask != null )
		{
			dialogmask.style.opacity    = '.'+pnuOpcity;
			dialogmask.style.filter     = 'alpha(opacity='+pnuOpcity+')';
			dialogmask.alpha            = pnuOpcity;
		}
	}
}