package arraysprogramming;

public class SecondMin {

	public static void main(String[] args) {
		int arr[]= {-1,0,0,2,5,4,1,4,4};
		int fsmall=arr[0];
		int ssmall=arr[0];
		for (int i = 0; i < arr.length; i++) {
			if(arr[i]<fsmall) {
				ssmall=fsmall;
				fsmall=arr[i];	
			}
				
			else if(arr[i]<ssmall || ssmall==fsmall)
				ssmall=arr[i];		
		}
	System.out.println(ssmall+ " is secondsmallest ");	
	System.out.println(fsmall+ " is firstsmallest");
	}

}
