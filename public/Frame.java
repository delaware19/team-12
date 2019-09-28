// Frame class, containing picture and caption

import java.lang.Object.Image;

public class Frame {

   private Image picture;
   private String caption;
   
   public Frame(Image picture, String caption) {

      this.picture = picture;
      this.caption = caption;
   }

   public static Image getPicture(Frame a) {
      return a.picture;
   }

   public static String getCaption(Frame a) {
      return a.caption;
   }

   public static void setPic(Frame a, Image pic) {
      a.picture = pic;
      return;
   }

   public static void setCaption(Frame a, String cap) {
      a.caption = cap;
      return;
   }

}
