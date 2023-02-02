package arraysprogramming;

public class MinAndMax {

	public static void main(String[] args) {
		int arr[]= {1,2,5,4,1,4,4};
		int small=arr[0];
		int big=arr[0];
		for (int i = 0; i < arr.length; i++) {
			if(arr[i]<small)
				small=arr[i];
			if(arr[i]>big)
				big=arr[i];		
		}
	System.out.println(small+ " is smallest ");	
	System.out.println(big+ " is biggest");
		
	}
}
