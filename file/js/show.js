function Show(Total, Title, Path, File_Numbers, Link, Classes, Names){
  for(i = 0; i < Total; i++){
    document.write("<td bordercolor='#000000' width='68%'>");
    document.write("<font size='2'>"+Title[i]+"<br>");
    document.write("<a href='"+Path+""+File_Numbers+Deputy_File_Name+"'>"+Link[i]+"</a></font>");
    document.write("</td>");
    document.write("<td bordercolor='#000000' width='14%' align='left'><font size='2'>"+Classes[i]+"</font></td>");
    document.write("<td bordercolor='#000000' width='9%' align='left'><font size='2'>"+Names[i]+"</font></td>");
    document.write("</tr>");
    File_Numbers++;
  }
  File_Number = File_Numbers-1;
}
