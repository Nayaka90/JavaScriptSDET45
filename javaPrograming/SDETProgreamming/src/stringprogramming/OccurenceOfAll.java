package stringprogramming;

public class OccurenceOfAll {

	public static void main(String[] args) {
		String str="testyanra";
		boolean	flag[]=new boolean[str.length()];
		for (int i = 0; i< str.length(); i++) {
			int count=1;
			if(flag[i]==false){
				for (int j = i+1; j < str.length(); j++) {
					if(str.charAt(i)==str.charAt(j))
					{ flag[j]=true;
					count++ ; 
					}  
				}
				if(count==1)
				System.out.println(str.charAt(i)+"-->"+count); 
			} 
		}
	}
}

