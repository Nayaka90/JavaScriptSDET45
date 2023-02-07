package stringprogramming;

public class RemoveDuplicate {
	
	public static void main(String[] args) {
		String str="Testyantra";
		String str1="";
		boolean	flag[]=new boolean[str.length()];
		for (int i = 0; i< str.length(); i++) {			
			if(flag[i]==false){
				for (int j = i+1; j < str.length(); j++) {
					if(str.charAt(i)==str.charAt(j))
					{ flag[j]=true;
					}  
				}
				str1=str1+str.charAt(i);
			} 
		}
		System.out.println("after removing duplicates "+str1);
	}
}



