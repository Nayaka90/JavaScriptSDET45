package arraysprogramming;

public class OccurenceOF0and1 {

	public static void main(String[] args) {
		int arr[]= {0,1,1,0,0,1,00};
		for (int i = 0; i < arr.length; i++) {
			int count=0;
			if(arr[i]==0||arr[i]==1) {
				for (int j = 0; j < arr.length; j++) {
					if(arr[i]==arr[j]) {
						if(j<i)
							break;
						count++;
					}
				}
				if(count>0)
					System.out.println(arr[i]+"--->"+count);
			}
		}
	}
}
