package arraysprogramming;

public class SortingOfArray {

	public static void main(String[] args) {
		int arr[]= {1,2,5,4,1,4,4};
		for (int i = 0; i < arr.length; i++) {
			for (int j = 1; j < arr.length-i; j++) {
				if(arr[j-1]>arr[j]) {
					int temp=arr[j-1];
					arr[j-1]=arr[j];
					arr[j]=temp;	
				}	
			}
		}
		for(int a:arr) {
			System.out.println(a);
		}
	}
}
