package stringprogramming;

public class ChangingT {
	public static void main(String[] args) {
		String str="tEstyantra";
		char ch[]=str.toCharArray();
		for (int i = 0; i < ch.length; i++) {
			if(ch[i]=='t') 
				ch[i]=(char)(ch[i]-32);
			else if(ch[i]!='T'&&ch[i]>=65 && ch[i]<=91)
				ch[i]=(char)(ch[i]+32);

		}
		for (int i = 0; i < ch.length; i++) {
			System.out.println(ch[i]);
		}
	}
}
