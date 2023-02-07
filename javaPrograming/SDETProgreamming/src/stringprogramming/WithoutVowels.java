package stringprogramming;

public class WithoutVowels {
	public static void main(String[] args) {
		String str="testyantra";
		String str1="";
		String vowels="AEIOUaeiou";
		for (int i = 0; i< str.length(); i++) {
			if(vowels.indexOf(str.charAt(i))==-1)
				str1=str1+str.charAt(i);
		}
		System.out.println("string without vowels --> "+str1);
	}
}
