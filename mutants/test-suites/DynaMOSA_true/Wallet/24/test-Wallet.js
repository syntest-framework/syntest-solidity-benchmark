const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletGa2Phgu = await Wallet.new({from: accounts[0]});
		const uinttPYE6uX = BigInt("482")
		const uintFEuWOi = BigInt("865")
		const uinteP12FND = BigInt("1017")
		const uintg2r86ov = BigInt("740")
		const uintZWtzPY = BigInt("320")
		const uinticX8lu3 = BigInt("1795")
//		const uinta5Job3w = await WalletGa2Phgu.withdraw.call(uinttPYE6uX, {from: accounts[4]});
//		const uintLfBdyi7 = await WalletGa2Phgu.deposit.call(uintFEuWOi, {from: accounts[5]});
//		const uintJgtk7V2 = await WalletGa2Phgu.withdraw.call(uinteP12FND, {from: accounts[1]});
//		const uintEEj8sIQ = await WalletGa2Phgu.withdraw.call(uintg2r86ov, {from: accounts[0]});
//		const uintsnYsNGe = await WalletGa2Phgu.withdraw.call(uintZWtzPY, {from: accounts[4]});
//		const uintnFDV3YE = await WalletGa2Phgu.withdraw.call(uinticX8lu3, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WalletGa2Phgu.withdraw.call(uinttPYE6uX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletH0Ibghl = await Wallet.new({from: accounts[2]});
		const uintC18jIYg = BigInt("1650")
		const uint49ry6d = BigInt("1182")
		const uintxz5K8yP = BigInt("138")
//		const uintHq3kzCn = await WalletH0Ibghl.deposit.call(uintC18jIYg, {from: accounts[2]});
//		const uintHsXijON = await WalletH0Ibghl.deposit.call(uint49ry6d, {from: accounts[2]});
//		const uintY64o1Bd = await WalletH0Ibghl.deposit.call(uintxz5K8yP, {from: accounts[4]});

		await expect(WalletH0Ibghl.deposit.call(uintC18jIYg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletlXU3eeu = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGKafsVq = BigInt("490")
		const uintL6kwLdD = BigInt("1955")
		const uintmN0okS9 = await WalletlXU3eeu.withdraw.call(uintGKafsVq, {from: accounts[3]});
		const uintQ10skfR = await WalletlXU3eeu.deposit.call(uintL6kwLdD, {from: accounts[1]});
	});

	it('test for Wallet', async () => {
		const WalletC43rUeT = await Wallet.new({from: accounts[1]});
		const uinteCJ94QA = BigInt("0")
		const uintutUJgAw = BigInt("1931")
		const uintaWzeYIP = BigInt("1805")
		const uintEqCbjZ9 = BigInt("384")
		const uintZtWjlso = BigInt("613")
		const uintj2eibEI = await WalletC43rUeT.deposit.call(uinteCJ94QA, {from: accounts[0]});
//		const uintquORLTj = await WalletC43rUeT.deposit.call(uintutUJgAw, {from: accounts[1]});
//		const uint2pmUCY = await WalletC43rUeT.deposit.call(uintaWzeYIP, {from: accounts[3]});
//		const uintS4Evoc = await WalletC43rUeT.withdraw.call(uintEqCbjZ9, {from: accounts[4]});
//		const uintMfTQeS = await WalletC43rUeT.withdraw.call(uintZtWjlso, {from: accounts[4]});

		await expect(WalletC43rUeT.deposit.call(uintutUJgAw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const Walletxy0dlrs = await Wallet.new({from: accounts[1]});
		const uintKyiw3Oh = BigInt("0")
		const uintt093WC1 = BigInt("30")
		const uinti2f75ww = await Walletxy0dlrs.withdraw.call(uintKyiw3Oh, {from: accounts[1]});
//		const uintAcMYwHE = await Walletxy0dlrs.withdraw.call(uintt093WC1, {from: accounts[0]});

		await expect(Walletxy0dlrs.withdraw.call(uintt093WC1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})