
  <?php 
    //generate external css
    if(isset($pageCSS) && count($pageCSS) > 0){
      for($i=0;$i<count($pageCSS);$i++){
        $url = strtolower(substr($pageCSS,0,4)) == 'http' ? $pageCSS[$i] : base_url().''.$pageCSS[$i];
        echo "<link rel=\"stylesheet\" href=\"".$url."\" />"."\r\n\x20\x20";
      }
    }
  ?>
 

  <?php 
  //generate external js
    if(isset($pageJS) && count($pageJS) > 0){
      for($i=0;$i<count($pageJS);$i++){
        $url = strtolower(substr($pageJS,0,4)) == 'http' ? $pageJS[$i] : base_url().''.$pageJS[$i];
        echo "<script src=\"".$url."\" ></script>"."\r\n\x20\x20";
      }
    }
  ?>
  <script src="<?=base_url().'assets/js/general.js'?>"></script>
  <!-- generate js per page -->
  <?php echo (isset($js) ? '<script src="'.$js.'"></script>' : '')."\r\n\x20\x20"?>