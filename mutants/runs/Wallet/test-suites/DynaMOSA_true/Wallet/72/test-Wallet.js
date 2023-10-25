const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletTJKeymU = await Wallet.new({from: accounts[0]});
		const uintHU8XNlA = BigInt("1389")
		const uintXm91oBC = BigInt("1428")
		const uintTKMF6rR = BigInt("404")
		const uintwSKeRae = await WalletTJKeymU.deposit.call(uintHU8XNlA, {from: accounts[5]});
		const uintrxK2MeJ = await WalletTJKeymU.deposit.call(uintXm91oBC, {from: accounts[3]});
		const uintWbcbctX = await WalletTJKeymU.deposit.call(uintTKMF6rR, {from: accounts[4]});

		await expect(WalletTJKeymU.deposit.call(uintHU8XNlA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const Walletrw9yKeL = await Wallet.new({from: accounts[1]});
		const uintz7yNeRV = BigInt("1763")
		const uintalEPqOZ = BigInt("1238")
		const uintmv9hB5s = BigInt("1557")
		const uintDpyhE6 = BigInt("691")
		const uintrAs4KKl = BigInt("1189")
		const uintCMDzbkS = await Walletrw9yKeL.withdraw.call(uintz7yNeRV, {from: accounts[1]});
		const uintFp45BLD = await Walletrw9yKeL.withdraw.call(uintalEPqOZ, {from: accounts[0]});
		const uintfNCDbrp = await Walletrw9yKeL.withdraw.call(uintmv9hB5s, {from: accounts[5]});
		const uintOjsy3WH = await Walletrw9yKeL.withdraw.call(uintDpyhE6, {from: accounts[0]});
		const uintScfiEJh = await Walletrw9yKeL.deposit.call(uintrAs4KKl, {from: accounts[4]});

		await expect(Walletrw9yKeL.withdraw.call(uintz7yNeRV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletInlFUau = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintExSBSHt = BigInt("766")
		const uintvLU8wP5 = BigInt("1239")
		const uintIB34Ym9 = await WalletInlFUau.withdraw.call(uintExSBSHt, {from: accounts[1]});
		const uintwDgeNnK = await WalletInlFUau.deposit.call(uintvLU8wP5, {from: accounts[2]});
	});

	it('test for Wallet', async () => {
		const WalletCxzmo6 = await Wallet.new({from: accounts[3]});
		const uintaMVlHRN = BigInt("0")
		const uintDtm6yBN = BigInt("777")
		const uintvSmpkaj = BigInt("1096")
		const uintHCd2Qa9 = BigInt("71")
		const uintdSMIISQ = BigInt("953")
		const uint9COXE0 = BigInt("800")
		const uintDD4VXAZ = BigInt("1546")
		const uintdigc2Cr = BigInt("1293")
		const uintqJTKmOy = BigInt("1360")
		const uintbus7GLD = BigInt("651")
		const uintzeY0yF = await WalletCxzmo6.withdraw.call(uintaMVlHRN, {from: accounts[1]});
		const uintX2xzcAB = await WalletCxzmo6.deposit.call(uintDtm6yBN, {from: accounts[4]});
		const uintTxCJ91n = await WalletCxzmo6.deposit.call(uintvSmpkaj, {from: accounts[2]});
		const uintzW6Y504 = await WalletCxzmo6.withdraw.call(uintHCd2Qa9, {from: accounts[1]});
		const uintJg9lNUo = await WalletCxzmo6.withdraw.call(uintdSMIISQ, {from: accounts[1]});
		const uintgZ34Mgq = await WalletCxzmo6.withdraw.call(uint9COXE0, {from: accounts[3]});
		const uintsrqld69 = await WalletCxzmo6.withdraw.call(uintDD4VXAZ, {from: accounts[0]});
		const uintibGLQof = await WalletCxzmo6.withdraw.call(uintdigc2Cr, {from: accounts[1]});
		const uintpoRLoQ8 = await WalletCxzmo6.withdraw.call(uintqJTKmOy, {from: accounts[2]});
		const uintsml25xr = await WalletCxzmo6.deposit.call(uintbus7GLD, {from: accounts[4]});

		await expect(WalletCxzmo6.deposit.call(uintDtm6yBN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletckwQbBD = await Wallet.new({from: accounts[3]});
		const uintHgPOT5y = BigInt("0")
		const uintEPo7jzg = BigInt("1883")
		const uintrbKxCbQ = BigInt("507")
		const uintaV0tLk0 = await WalletckwQbBD.deposit.call(uintHgPOT5y, {from: accounts[4]});
		const uintuhJ7qiw = await WalletckwQbBD.deposit.call(uintEPo7jzg, {from: accounts[0]});
		const uintJT5TKnL = await WalletckwQbBD.deposit.call(uintrbKxCbQ, {from: accounts[2]});

		await expect(WalletckwQbBD.deposit.call(uintEPo7jzg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})