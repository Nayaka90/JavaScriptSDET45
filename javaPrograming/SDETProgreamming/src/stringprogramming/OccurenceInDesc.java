package stringprogramming;

public class OccurenceInDesc {

	public static void main(String[] args) {
		String str="Testyanra";
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
				System.out.println(str.charAt(i)+"-->"+count); 
			} 
		}
	}
}


