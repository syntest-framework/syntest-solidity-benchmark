const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20ZdvtE4 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintqZZBkD0 = BigInt("1005")
		const uintNTPK2w3 = BigInt("1293")
		const uintQnM2jz = BigInt("1303")
		const uintpnN0ZsS = BigInt("864")
		const uintRbgB4xy = BigInt("872")
		const uintD9S36Oj = BigInt("841")
		const uint6CXpk9 = BigInt("1409")
		const uint4kecLj = BigInt("1822")
		const uintyoKb6w7 = BigInt("1177")
		const uinttDBIWuC = BigInt("1511")
		const uintXc6tuAm = BigInt("276")
		const uintaXFhA1t = BigInt("262")
		const uintEYJh6W2 = BigInt("1955")
		const uintP7Z8RxQ = BigInt("1395")
		const uintSkXreLU = BigInt("927")
		const uint09I9lA = BigInt("1188")
		const uintXf6u6mC = BigInt("748")
//		const uint256GJFaLvP = await UNIWHALE_ERC20ZdvtE4.startAirdrop.call(uintpnN0ZsS, uintQnM2jz, uintNTPK2w3, uintqZZBkD0, {from: accounts[0]});
//		const uint256zAG507 = await UNIWHALE_ERC20ZdvtE4.startAirdrop.call(uint4kecLj, uint6CXpk9, uintD9S36Oj, uintRbgB4xy, {from: accounts[2]});
//		const uint2568vfDK6 = await UNIWHALE_ERC20ZdvtE4.viewAirdrop.call({from: accounts[4]});
//		const uint256V1sLakt = await UNIWHALE_ERC20ZdvtE4.viewAirdrop.call({from: accounts[2]});
//		const uint256Vy2O905 = await UNIWHALE_ERC20ZdvtE4.startSale.call(uintEYJh6W2, uintaXFhA1t, uintXc6tuAm, uinttDBIWuC, uintyoKb6w7, {from: accounts[2]});
//		const uint256lWUbhUT = await UNIWHALE_ERC20ZdvtE4.startAirdrop.call(uintXf6u6mC, uint09I9lA, uintSkXreLU, uintP7Z8RxQ, {from: accounts[2]});

		await expect(UNIWHALE_ERC20ZdvtE4.startAirdrop.call(uintpnN0ZsS, uintQnM2jz, uintNTPK2w3, uintqZZBkD0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20HBlgPfR = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintwutAhDX = BigInt("31")
		const uintQjI3qsQ = BigInt("275")
		const uintZvqzqO2 = BigInt("241")
		const uintuo8LyJB = BigInt("1212")
		const uintBOLhHJ = BigInt("609")
		const uint256DRaK82n = await UNIWHALE_ERC20HBlgPfR.viewAirdrop.call({from: accounts[2]});
		const uint256NRavF2 = await UNIWHALE_ERC20HBlgPfR.viewSale.call({from: accounts[1]});
		const uint256uywlXIX = await UNIWHALE_ERC20HBlgPfR.viewAirdrop.call({from: accounts[2]});
		const uint256BjcSMW3 = await UNIWHALE_ERC20HBlgPfR.viewSale.call({from: accounts[4]});
//		const uint256g6JiWG0 = await UNIWHALE_ERC20HBlgPfR.startSale.call(uintBOLhHJ, uintuo8LyJB, uintZvqzqO2, uintQjI3qsQ, uintwutAhDX, {from: accounts[2]});

		await expect(UNIWHALE_ERC20HBlgPfR.startSale.call(uintBOLhHJ, uintuo8LyJB, uintZvqzqO2, uintQjI3qsQ, uintwutAhDX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20xv4BrHK = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uinteYtM4pt = BigInt("1204")
		const uintZBR0VnE = BigInt("1713")
		const uintSt4Y0N6 = BigInt("1681")
		const uintWiBOgx3 = BigInt("410")
		const uintJ6RdKcr = BigInt("170")
		const addresscCpNyk = accounts[5]
		const uint256NfMYcSu = await UNIWHALE_ERC20xv4BrHK.viewAirdrop.call({from: accounts[5]});
		const uint256YIqYE2 = await UNIWHALE_ERC20xv4BrHK.startSale.call(uintJ6RdKcr, uintWiBOgx3, uintSt4Y0N6, uintZBR0VnE, uinteYtM4pt, {from: accounts[0]});
//		const boollnARh7g = await UNIWHALE_ERC20xv4BrHK.tokenSale.call(addresscCpNyk, {from: accounts[3]});
//		const uint256pL2Z6Pr = await UNIWHALE_ERC20xv4BrHK.viewAirdrop.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20xv4BrHK.tokenSale.call(addresscCpNyk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20MIXvT76 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uint256Ie2fy8s = await UNIWHALE_ERC20MIXvT76.viewAirdrop.call({from: accounts[3]});
		const uint256RZ6rFgQ = await UNIWHALE_ERC20MIXvT76.viewSale.call({from: accounts[5]});
		const uint256ZCYlcEz = await UNIWHALE_ERC20MIXvT76.viewAirdrop.call({from: accounts[0]});
//		await UNIWHALE_ERC20MIXvT76.clearETH.call({from: accounts[4]});

		await expect(UNIWHALE_ERC20MIXvT76.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20nNa7Sb = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintsMi8tTJ = BigInt("1231")
		const uintV2rdtv1 = BigInt("348")
		const uintYC7tAQn = BigInt("1645")
		const uintbe54Pi = BigInt("200")
		const uintvDfou4 = BigInt("338")
		const uintfUP90Mk = BigInt("1643")
		const uintKcxfHZ = BigInt("716")
		const uintPazs0l = BigInt("867")
		const uintBq7ndbY = BigInt("1930")
		const addressfJP6FaM = "0x0000000000000000000000000000000000000001"
		const addresshptD6vv = accounts[1]
		const uint256rCKRfhv = await UNIWHALE_ERC20nNa7Sb.startSale.call(uintvDfou4, uintbe54Pi, uintYC7tAQn, uintV2rdtv1, uintsMi8tTJ, {from: accounts[0]});
		const uint256Wr99E5c = await UNIWHALE_ERC20nNa7Sb.startAirdrop.call(uintBq7ndbY, uintPazs0l, uintKcxfHZ, uintfUP90Mk, {from: accounts[0]});
//		const boolfG3Tr48 = await UNIWHALE_ERC20nNa7Sb.getAirdrop.call(addressfJP6FaM, {from: accounts[0]});
//		const boolKRIUrc6 = await UNIWHALE_ERC20nNa7Sb.getAirdrop.call(addresshptD6vv, {from: accounts[2]});
//		const uint256mvuKTJn = await UNIWHALE_ERC20nNa7Sb.viewSale.call({from: accounts[3]});
//		await UNIWHALE_ERC20nNa7Sb.clearETH.call({from: accounts[1]});

		await expect(UNIWHALE_ERC20nNa7Sb.getAirdrop.call(addressfJP6FaM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20h25pVRZ = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressaee5g3j = accounts[0]
		const addressy6pcQWG = accounts[4]
		const boolypkil58 = await UNIWHALE_ERC20h25pVRZ.tokenSale.call(addressaee5g3j, {from: accounts[5]});
		const boolJlLFW50 = await UNIWHALE_ERC20h25pVRZ.tokenSale.call(addressy6pcQWG, {from: accounts[3]});
		const uint256jLPyQth = await UNIWHALE_ERC20h25pVRZ.viewSale.call({from: accounts[5]});
	});
})