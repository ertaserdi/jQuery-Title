/**
 * Created by Erdi ERTAŞ on 13.04.2015.
 * Versiyon: 1.0
 * Contact for support. / Katkı sağlamak için iletişime geçebilirsiniz.
 * Email: ertaserdi@gmail.com
 * You can contact to contribute.
 * Download: https://github.com/ertaserdi/jQuery-Title
 * 
 * Kullandığınız için teşekkürler... / Thank you for using...
 * 
 * LICENSE: https://github.com/ertaserdi/jQuery-Title/blob/master/LICENSE
 */

var jqueryTitle_firstTitle= '';
jqueryTitle_firstTitle  =   $(document).attr("title");
function jqueryTitle(options){
    if( typeof options !== 'string' ) {
        var connect =   ' ';
        if("connect" in options)
            var connect =   options.connect;
        if("title" in options)
            $(document).attr("title",options.title);
        if("titleLeft" in options)
            $(document).attr("title",options.titleLeft+connect+jqueryTitle_firstTitle);
        if("titleRight" in options)
            $(document).attr("title",jqueryTitle_firstTitle+connect+options.titleRight);
        if("timeout" in options)
            setTimeout(function(){jqueryTitle('destroy')},options.timeout);
    }else{
        if(options=='destroy')
            $(document).attr("title",jqueryTitle_firstTitle);
    }
}
