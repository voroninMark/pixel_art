class Frame{
	constructor(_lines,_cols,_cell_width,_cell_height,_default_color){
		this.lines=_lines;
		this.cols=_cols;
		this.cell_width=_cell_width;
		this.cell_height=_cell_height;
		this.default_color=_default_color;
		this.pixel_arr=arr2D(this.lines,this.cols);
		this.defaultFrame();
	}
	generateHtml(){
		this.html="";
		this.html+='<table id="frame">';
		for(var i=0;i<this.lines;i++){
			this.html+="<tr>";
			for(var j=0;j<this.cols;j++){
				this.html+='<td class="pixel" color="'+this.pixel_arr[i][j]+'" i="'+i+'" j="'+j+'" style="background-color:'+this.pixel_arr[i][j]+';width:'+this.cell_width+'px;height:'+this.cell_height+'px"></td>';
			}
			this.html+="</tr>";
		}
		this.html+="</table>";
	}
	setDefaultColor(new_color){
		for(var i=0;i<this.lines;i++){
			for(var j=0;j<this.cols;j++){
				if(this.pixel_arr[i][j] == this.default_color){
					this.pixel_arr[i][j] = new_color;
				}
			}
		}
		this.default_color=new_color;
		this.generateHtml();
	}
	defaultFrame(){
		this.pixel_arr=fill2D(this.pixel_arr,this.default_color);
		this.generateHtml();
	}
	alterPixelArr(i,j,color){
		this.pixel_arr[i][j]=color;
		this.generateHtml();
	}
}
