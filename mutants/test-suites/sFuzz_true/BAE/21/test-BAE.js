const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addresszy63HzV = accounts[2]
		const BAEveZ8dG = await BAE.new(addresszy63HzV, {from: accounts[0]});
		const uintk5ZW93 = BigInt("321")
		const uintmVT3x90 = BigInt("104")
		const uintGHNXA55 = BigInt("847")
		const uintc23HKZ = BigInt("166")
		const uint73jKXE = BigInt("1899")
		const uintgbTaoLK = BigInt("692")
//		const uint256WFIO1R2 = await BAEveZ8dG.bid.call(uintk5ZW93, {from: accounts[0]});
//		const uint256Py2OffB = await BAEveZ8dG.resetAuction.call(uintc23HKZ, uintGHNXA55, uintmVT3x90, {from: accounts[5]});
//		const uint256GGZRmQL = await BAEveZ8dG.changePrintFee.call(uint73jKXE, {from: accounts[4]});
//		const uint256IujX7sY = await BAEveZ8dG.setAuctionFee.call(uintgbTaoLK, {from: accounts[0]});

		await expect(BAEveZ8dG.bid.call(uintk5ZW93, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressdCCDfIk = accounts[4]
		const BAEQUP5gFv = await BAE.new(addressdCCDfIk, {from: accounts[3]});
		const uintAajD91g = BigInt("1288")
		const uintG2uea5t = BigInt("76")
		const uintqBztrJg = BigInt("1917")
		const uintGGh4gE = BigInt("2033")
		const uintHsBs5Sj = BigInt("1389")
		const uintvqB3LfU = BigInt("1454")
		const uintwf88BGk = BigInt("901")
		const uintSIrFhyH = BigInt("1797")
		const uintd0UHRzk = BigInt("246")
		const uintyzJAwCm = BigInt("815")
		const uintUPKIFeV = BigInt("195")
		const uintHZX3CB7 = BigInt("379")
//		const uint256W5JQvmd = await BAEQUP5gFv.setAuctionFee.call(uintAajD91g, {from: accounts[4]});
//		const uint256UfKZRD8 = await BAEQUP5gFv.bid.call(uintG2uea5t, {from: accounts[3]});
//		const uint256q7LHxU = await BAEQUP5gFv.createAuction.call(uintvqB3LfU, uintHsBs5Sj, uintGGh4gE, uintqBztrJg, {from: accounts[4]});
//		const uint256HWfEYl = await BAEQUP5gFv.createAuction.call(uintyzJAwCm, uintd0UHRzk, uintSIrFhyH, uintwf88BGk, {from: accounts[3]});
//		const uint256VXd5PXz = await BAEQUP5gFv.buy.call(uintUPKIFeV, {from: accounts[5]});
//		const uint256RbhokL2 = await BAEQUP5gFv.setAuctionFee.call(uintHZX3CB7, {from: accounts[2]});

		await expect(BAEQUP5gFv.setAuctionFee.call(uintAajD91g, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressD7jgeQO = accounts[4]
		const BAElILDU33 = await BAE.new(addressD7jgeQO, {from: accounts[0]});
		const uintrhWU6gr = BigInt("2014")
		const uintR5PGLj0 = BigInt("463")
		const uintvWISAPh = BigInt("1645")
		const uintECrFQdc = BigInt("1480")
		const uintgqfTgX = BigInt("1657")
		const uintGKtoXu = BigInt("219")
//		const uint256YHAAbcK = await BAElILDU33.resetAuction.call(uintvWISAPh, uintR5PGLj0, uintrhWU6gr, {from: accounts[3]});
//		const uint256e6lcu3 = await BAElILDU33.resetAuction.call(uintGKtoXu, uintgqfTgX, uintECrFQdc, {from: accounts[3]});

		await expect(BAElILDU33.resetAuction.call(uintvWISAPh, uintR5PGLj0, uintrhWU6gr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressui46P23 = accounts[1]
		const BAEloAQO8u = await BAE.new(addressui46P23, {from: accounts[0]});
		const uintwvyaVfM = BigInt("1331")
		const uintMIZi4n = BigInt("621")
		const uintz5v4akl = BigInt("971")
		const uinty7AKu2J = BigInt("432")
		const uintn7yWb6v = BigInt("1110")
//		const uint256E58uue = await BAEloAQO8u.buy.call(uintwvyaVfM, {from: accounts[4]});
//		const uint256BFG8UFi = await BAEloAQO8u.resetAuction.call(uinty7AKu2J, uintz5v4akl, uintMIZi4n, {from: accounts[0]});
//		const uint256z1m9eMW = await BAEloAQO8u.bid.call(uintn7yWb6v, {from: accounts[4]});

		await expect(BAEloAQO8u.buy.call(uintwvyaVfM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressZljEGjq = accounts[4]
		const BAElILDU33 = await BAE.new(addressZljEGjq, {from: accounts[0]});
		const uintUSmqcf = BigInt("488")
		const uintYEZg12b = BigInt("1246")
		const uintE1bFlJl = BigInt("1833")
		const uintI7LUiQ = BigInt("1832")
		const uintVak5gaj = BigInt("1554")
		const uintqNIeeW = BigInt("2014")
		const uintlUIPK5q = BigInt("455")
		const uintH5iljO = BigInt("1645")
//		const uint256ySDkv1D = await BAElILDU33.createAuction.call(uintI7LUiQ, uintE1bFlJl, uintYEZg12b, uintUSmqcf, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256L01Ki3j = await BAElILDU33.buy.call(uintVak5gaj, {from: accounts[5]});
//		const uint256YHAAbcK = await BAElILDU33.resetAuction.call(uintH5iljO, uintlUIPK5q, uintqNIeeW, {from: accounts[3]});

		await expect(BAElILDU33.createAuction.call(uintI7LUiQ, uintE1bFlJl, uintYEZg12b, uintUSmqcf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresslgchkMP = accounts[4]
		const BAElILDU33 = await BAE.new(addresslgchkMP, {from: accounts[0]});
		const uintON18h3a = BigInt("128")
		const uintfxGDMDR = BigInt("2014")
		const uintd26i4nx = BigInt("465")
		const uintAAgqjD = BigInt("1645")
//		const uint256Ndzy272 = await BAElILDU33.concludeAuction.call(uintON18h3a, {from: accounts[4]});
//		const uint256YHAAbcK = await BAElILDU33.resetAuction.call(uintAAgqjD, uintd26i4nx, uintfxGDMDR, {from: accounts[3]});

		await expect(BAElILDU33.concludeAuction.call(uintON18h3a, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresspB5JyrI = accounts[2]
		const BAEDuYYdq3 = await BAE.new(addresspB5JyrI, {from: "0x0000000000000000000000000000000000000001"});
		const uintk3qymLt = BigInt("1369")
		const uintK6iSWoB = BigInt("109")
		const uintmscAsuf = BigInt("190")
		const uintcOJjPBd = BigInt("3")
		const uint0ESxqt = BigInt("1425")
		const uintt3HMmV = BigInt("678")
		const uint256vBBEtaQ = await BAEDuYYdq3.createAuction.call(uintcOJjPBd, uintmscAsuf, uintK6iSWoB, uintk3qymLt, {from: accounts[1]});
		const uint256rexfzIc = await BAEDuYYdq3.changePrintFee.call(uint0ESxqt, {from: accounts[3]});
		const uint256qKwLbtW = await BAEDuYYdq3.changePrintFee.call(uintt3HMmV, {from: accounts[4]});
	});
})