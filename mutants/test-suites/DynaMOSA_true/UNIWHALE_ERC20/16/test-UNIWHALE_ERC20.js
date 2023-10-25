const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20NNN9m0D = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintXEwWkim = BigInt("565")
		const uintomObIBM = BigInt("1318")
		const uintCbHRWNr = BigInt("419")
		const uintygxqgZm = BigInt("1401")
		const uint256kIXDOQz = await UNIWHALE_ERC20NNN9m0D.viewSale.call({from: accounts[1]});
//		const uint256nab2tL3 = await UNIWHALE_ERC20NNN9m0D.startAirdrop.call(uintygxqgZm, uintCbHRWNr, uintomObIBM, uintXEwWkim, {from: accounts[3]});

		await expect(UNIWHALE_ERC20NNN9m0D.startAirdrop.call(uintygxqgZm, uintCbHRWNr, uintomObIBM, uintXEwWkim, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20wzUsbx0 = await UNIWHALE_ERC20.new({from: accounts[3]});
		const addressaewYTsn = accounts[0]
		const uintIm0lvKW = BigInt("352")
		const uintXMLp6Gg = BigInt("673")
		const uintLXjpOzc = BigInt("115")
		const uintKMNuXKa = BigInt("766")
//		const boolQ5sLF5V = await UNIWHALE_ERC20wzUsbx0.tokenSale.call(addressaewYTsn, {from: accounts[2]});
//		const uint256Zv2npG9 = await UNIWHALE_ERC20wzUsbx0.startAirdrop.call(uintKMNuXKa, uintLXjpOzc, uintXMLp6Gg, uintIm0lvKW, {from: accounts[2]});
//		const uint256OuQgU7 = await UNIWHALE_ERC20wzUsbx0.viewSale.call({from: accounts[2]});
//		const uint256dbEuUE9 = await UNIWHALE_ERC20wzUsbx0.viewSale.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20wzUsbx0.tokenSale.call(addressaewYTsn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20Hm4rLj1 = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintNe3O97a = BigInt("1063")
		const uintjtUZO0A = BigInt("88")
		const uintzO4VgP = BigInt("323")
		const uintiWuqezs = BigInt("1487")
		const uinttllbEeG = BigInt("1369")
		const uintDpqBceC = BigInt("1255")
		const uintQZRcaBr = BigInt("1369")
		const uintlwmXrEO = BigInt("1167")
		const uintgQBCN3e = BigInt("920")
		const addressrYrHnpZ = "0x0000000000000000000000000000000000000001"
		const uintinpZtpg = BigInt("1787")
		const uintaF4Mpi = BigInt("1619")
		const uintsF9s632 = BigInt("428")
		const uintlNuGmzw = BigInt("1630")
		const uintcB8ubYt = BigInt("2018")
		const uint256GAeCbjT = await UNIWHALE_ERC20Hm4rLj1.viewSale.call({from: accounts[0]});
		const uint256SGkydlE = await UNIWHALE_ERC20Hm4rLj1.startSale.call(uinttllbEeG, uintiWuqezs, uintzO4VgP, uintjtUZO0A, uintNe3O97a, {from: accounts[1]});
//		const uint256BGrxcHQ = await UNIWHALE_ERC20Hm4rLj1.startAirdrop.call(uintgQBCN3e, uintlwmXrEO, uintQZRcaBr, uintDpqBceC, {from: accounts[0]});
//		const boolxMHbycX = await UNIWHALE_ERC20Hm4rLj1.tokenSale.call(addressrYrHnpZ, {from: accounts[2]});
//		const uint256XFqADud = await UNIWHALE_ERC20Hm4rLj1.viewSale.call({from: accounts[1]});
//		const uint256lM6t5ue = await UNIWHALE_ERC20Hm4rLj1.startSale.call(uintcB8ubYt, uintlNuGmzw, uintsF9s632, uintaF4Mpi, uintinpZtpg, {from: accounts[1]});

		await expect(UNIWHALE_ERC20Hm4rLj1.startAirdrop.call(uintgQBCN3e, uintlwmXrEO, uintQZRcaBr, uintDpqBceC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20km6nJrD = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintEj5geJu = BigInt("402")
		const uintcq9WxGx = BigInt("1590")
		const uintJ44do3b = BigInt("1608")
		const uintNaCsFC = BigInt("1333")
		const addressAhCSjnA = accounts[0]
		const addressW2gmo3s = accounts[0]
		const addressqDdwyZD = accounts[3]
		const uint256QMZkG24 = await UNIWHALE_ERC20km6nJrD.viewAirdrop.call({from: accounts[4]});
//		const uint256Q1iQq4 = await UNIWHALE_ERC20km6nJrD.startAirdrop.call(uintNaCsFC, uintJ44do3b, uintcq9WxGx, uintEj5geJu, {from: accounts[4]});
//		const boolT3OtA76 = await UNIWHALE_ERC20km6nJrD.tokenSale.call(addressAhCSjnA, {from: accounts[2]});
//		const boolXc4LY6h = await UNIWHALE_ERC20km6nJrD.tokenSale.call(addressW2gmo3s, {from: accounts[3]});
//		const boolyFumQVJ = await UNIWHALE_ERC20km6nJrD.tokenSale.call(addressqDdwyZD, {from: accounts[4]});

		await expect(UNIWHALE_ERC20km6nJrD.startAirdrop.call(uintNaCsFC, uintJ44do3b, uintcq9WxGx, uintEj5geJu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20hbdo4QM = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintU3K3B3C = BigInt("1016")
		const uint0xlp3l = BigInt("1792")
		const uintK38v9I2 = BigInt("1858")
		const uintDd4MFWE = BigInt("741")
		const uintoqAMdji = BigInt("422")
		const uintxYoBg25 = BigInt("305")
		const uintw4fT58w = BigInt("257")
		const uinthrzuwuc = BigInt("359")
		const uintlrvw9M = BigInt("2027")
		const addressCZtvCBj = accounts[0]
		const uint256XXmNLmD = await UNIWHALE_ERC20hbdo4QM.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256J4DBlk = await UNIWHALE_ERC20hbdo4QM.startAirdrop.call(uintDd4MFWE, uintK38v9I2, uint0xlp3l, uintU3K3B3C, {from: accounts[4]});
//		const uint256GVZDGsX = await UNIWHALE_ERC20hbdo4QM.startSale.call(uintlrvw9M, uinthrzuwuc, uintw4fT58w, uintxYoBg25, uintoqAMdji, {from: accounts[2]});
//		const boolPNovYX = await UNIWHALE_ERC20hbdo4QM.tokenSale.call(addressCZtvCBj, {from: accounts[3]});

		await expect(UNIWHALE_ERC20hbdo4QM.startSale.call(uintlrvw9M, uinthrzuwuc, uintw4fT58w, uintxYoBg25, uintoqAMdji, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20l1LnkC1 = await UNIWHALE_ERC20.new({from: accounts[2]});
		const addresssExQdJ3 = "0x0000000000000000000000000000000000000001"
		const addresszeJuFCr = accounts[4]
		const uint256uP654Pe = await UNIWHALE_ERC20l1LnkC1.viewAirdrop.call({from: accounts[0]});
//		const boolcwtQJXw = await UNIWHALE_ERC20l1LnkC1.getAirdrop.call(addresssExQdJ3, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256eWyW1N1 = await UNIWHALE_ERC20l1LnkC1.viewSale.call({from: accounts[0]});
//		const boolqxqXcuf = await UNIWHALE_ERC20l1LnkC1.tokenSale.call(addresszeJuFCr, {from: accounts[2]});

		await expect(UNIWHALE_ERC20l1LnkC1.getAirdrop.call(addresssExQdJ3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20Afz0MnB = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addresszcxYRu7 = accounts[5]
		const uinttL32U0 = BigInt("288")
		const uintiPHOqmq = BigInt("1614")
		const uintSvnKi7 = BigInt("1161")
		const uintwQOO0kq = BigInt("248")
		const uintaJfpIJ2 = BigInt("663")
		const uintnkqz2WE = BigInt("161")
		const uintHtfg6Ru = BigInt("1549")
		const uintPXnyLOE = BigInt("1886")
		const uintyEn421W = BigInt("1994")
		const booldfyASxs = await UNIWHALE_ERC20Afz0MnB.tokenSale.call(addresszcxYRu7, {from: accounts[5]});
		const uint256fuNSahV = await UNIWHALE_ERC20Afz0MnB.startSale.call(uintaJfpIJ2, uintwQOO0kq, uintSvnKi7, uintiPHOqmq, uinttL32U0, {from: accounts[2]});
		await UNIWHALE_ERC20Afz0MnB.clearETH.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256rWtPOi = await UNIWHALE_ERC20Afz0MnB.startAirdrop.call(uintyEn421W, uintPXnyLOE, uintHtfg6Ru, uintnkqz2WE, {from: accounts[2]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20l1LnkC1 = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintBSGNcCJ = BigInt("5")
		const uintY95LKoy = BigInt("1684")
		const uintzTjtwOw = BigInt("1616")
		const uintLc3BXaw = BigInt("429")
		const uinthza6DIF = BigInt("2041")
		const uint256uP654Pe = await UNIWHALE_ERC20l1LnkC1.viewAirdrop.call({from: accounts[0]});
//		await UNIWHALE_ERC20l1LnkC1.clearETH.call({from: accounts[2]});
//		const uint256YJ5HTKr = await UNIWHALE_ERC20l1LnkC1.startSale.call(uinthza6DIF, uintLc3BXaw, uintzTjtwOw, uintY95LKoy, uintBSGNcCJ, {from: accounts[0]});
//		const uint256eWyW1N1 = await UNIWHALE_ERC20l1LnkC1.viewSale.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20l1LnkC1.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})