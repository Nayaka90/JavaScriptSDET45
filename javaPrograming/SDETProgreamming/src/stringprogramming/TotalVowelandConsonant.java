package stringprogramming;

public class TotalVowelandConsonant {

	public static void main(String[] args) {
		String str="testyantra";
		String vowels="AEIOUaeiou";
		int conso=0;
		int vowel=0;
		for (int i = 0; i< str.length(); i++) {
			if(vowels.indexOf(str.charAt(i))==-1)
				conso++;
			else
				vowel++;
		}
		System.out.println("count of vowels --> "+vowel);
		System.out.println("count of consonant -->"+conso);
	}
}
