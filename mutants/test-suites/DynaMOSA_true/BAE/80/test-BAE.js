const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressEtnf87I = accounts[0]
		const BAETjf2LPo = await BAE.new(addressEtnf87I, {from: accounts[3]});
		const uintqkgmMcS = BigInt("620")
		const uintTkKrFpM = BigInt("1873")
		const uintzfwXYZ = BigInt("1593")
		const uint5DntFo = BigInt("1729")
		const uintt8CmUsR = BigInt("1488")
		const uintgwVY0G = BigInt("474")
//		const uint256gksfgHD = await BAETjf2LPo.createAuction.call(uint5DntFo, uintzfwXYZ, uintTkKrFpM, uintqkgmMcS, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256adAIne3 = await BAETjf2LPo.buy.call(uintt8CmUsR, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ZYBwBSg = await BAETjf2LPo.bid.call(uintgwVY0G, {from: accounts[1]});

		await expect(BAETjf2LPo.createAuction.call(uint5DntFo, uintzfwXYZ, uintTkKrFpM, uintqkgmMcS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressAanufWw = accounts[0]
		const BAE9L1gwy = await BAE.new(addressAanufWw, {from: accounts[2]});
		const uintgLR5mrC = BigInt("1323")
		const uintvdXFSsd = BigInt("527")
		const uintV7gDAUj = BigInt("1462")
		const uintoOXWrzs = BigInt("1872")
		const uintVh1Eope = BigInt("574")
		const uinttd0g2VL = BigInt("1858")
//		const uint256DY56mTe = await BAE9L1gwy.setAuctionFee.call(uintgLR5mrC, {from: accounts[0]});
//		const uint256MVp4nGl = await BAE9L1gwy.setAuctionFee.call(uintvdXFSsd, {from: "0x0000000000000000000000000000000000000001"});
//		const uint2569ivOYD = await BAE9L1gwy.resetAuction.call(uintVh1Eope, uintoOXWrzs, uintV7gDAUj, {from: accounts[2]});
//		const uint256XNiHjh = await BAE9L1gwy.changePrintFee.call(uinttd0g2VL, {from: accounts[4]});

		await expect(BAE9L1gwy.setAuctionFee.call(uintgLR5mrC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresszrvSBPm = accounts[4]
		const BAEhk8bkxy = await BAE.new(addresszrvSBPm, {from: accounts[3]});
		const uintX0BLkIv = BigInt("489")
		const uintvFiLraE = BigInt("570")
//		const uint256FQXKRkt = await BAEhk8bkxy.concludeAuction.call(uintX0BLkIv, {from: accounts[4]});
//		const uint256lzzHfyQ = await BAEhk8bkxy.buy.call(uintvFiLraE, {from: accounts[5]});

		await expect(BAEhk8bkxy.concludeAuction.call(uintX0BLkIv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressmczO5Q = accounts[4]
		const BAEGKxNzz9 = await BAE.new(addressmczO5Q, {from: accounts[1]});
		const uintBFyyHB9 = BigInt("1398")
		const uintggCbLaU = BigInt("642")
		const uinthrAFlK = BigInt("821")
		const uintWwfJCqa = BigInt("828")
//		const uint256tb7MVWh = await BAEGKxNzz9.buy.call(uintBFyyHB9, {from: accounts[4]});
//		const uint256We9Bv3j = await BAEGKxNzz9.resetAuction.call(uintWwfJCqa, uinthrAFlK, uintggCbLaU, {from: accounts[1]});

		await expect(BAEGKxNzz9.buy.call(uintBFyyHB9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressCzpgRMj = accounts[5]
		const BAEynwQcDa = await BAE.new(addressCzpgRMj, {from: "0x0000000000000000000000000000000000000001"});
		const uintJSH4QI3 = BigInt("419")
		const uintdjnMZ25 = BigInt("57")
		const uintV0FmhDr = BigInt("497")
		const uintk5zg4M = BigInt("1485")
		const uint256CIg7Lk = await BAEynwQcDa.bid.call(uintJSH4QI3, {from: accounts[0]});
		const uint256xppTnWm = await BAEynwQcDa.changePrintFee.call(uintdjnMZ25, {from: accounts[2]});
		const uint256USs40ub = await BAEynwQcDa.bid.call(uintV0FmhDr, {from: accounts[0]});
		const uint256mZAjOgD = await BAEynwQcDa.buy.call(uintk5zg4M, {from: accounts[1]});
	});

	it('test for BAE', async () => {
		const addresscyC1mMq = accounts[4]
		const BAEcSdfsZV = await BAE.new(addresscyC1mMq, {from: accounts[0]});
		const uintfiSSFtF = BigInt("1056")
		const uintypd3tC = BigInt("1875")
		const uintuGTytE = BigInt("1071")
		const uintWIvuD1X = BigInt("1865")
		const uintdg1MIQ = BigInt("1443")
		const uintR7ULuRu = BigInt("351")
		const uint2QVsjo = BigInt("1726")
		const uintLaK0zGK = BigInt("1834")
		const uintspRm0C0 = BigInt("185")
		const uintjG8uxSJ = BigInt("1879")
		const uintrJm4ppW = BigInt("602")
		const uinthMHMJE = BigInt("1257")
		const uintLTPXpB7 = BigInt("1018")
//		const uint256E2SwEWI = await BAEcSdfsZV.bid.call(uintfiSSFtF, {from: accounts[3]});
//		const uint256tR6sJxS = await BAEcSdfsZV.createAuction.call(uintdg1MIQ, uintWIvuD1X, uintuGTytE, uintypd3tC, {from: accounts[3]});
//		const uint256NhCNKZm = await BAEcSdfsZV.createAuction.call(uintspRm0C0, uintLaK0zGK, uint2QVsjo, uintR7ULuRu, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256PtO1G3X = await BAEcSdfsZV.createAuction.call(uintLTPXpB7, uinthMHMJE, uintrJm4ppW, uintjG8uxSJ, {from: accounts[4]});

		await expect(BAEcSdfsZV.bid.call(uintfiSSFtF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressF4exNQ5 = accounts[4]
		const BAEcSdfsZV = await BAE.new(addressF4exNQ5, {from: accounts[0]});
		const uintGn9uOzv = BigInt("1613")
		const uintapgBaN2 = BigInt("22")
		const uintNn9Pm2Y = BigInt("1936")
		const uintBvrJmR = BigInt("1075")
		const uintHJzb6Zn = BigInt("1875")
		const uintGF5EZSn = BigInt("1071")
		const uintS0DYfkx = BigInt("1865")
		const uintwWABk18 = BigInt("1443")
		const uintPEbZCJh = BigInt("798")
		const uintjjdi32E = BigInt("351")
		const uintMrJsXAw = BigInt("1726")
		const uinthLEffKI = BigInt("1834")
		const uintILu7Yvr = BigInt("185")
		const uintSsJoBu5 = BigInt("1879")
		const uintjvhIs3A = BigInt("602")
		const uintd19N0fy = BigInt("1257")
		const uint9erDAf = BigInt("1018")
//		const uint256j8bAWnU = await BAEcSdfsZV.resetAuction.call(uintNn9Pm2Y, uintapgBaN2, uintGn9uOzv, {from: accounts[2]});
//		const uint256E2SwEWI = await BAEcSdfsZV.bid.call(uintBvrJmR, {from: accounts[3]});
//		const uint256tR6sJxS = await BAEcSdfsZV.createAuction.call(uintwWABk18, uintS0DYfkx, uintGF5EZSn, uintHJzb6Zn, {from: accounts[3]});
//		const uint256JwIgOuF = await BAEcSdfsZV.setAuctionFee.call(uintPEbZCJh, {from: accounts[1]});
//		const uint256NhCNKZm = await BAEcSdfsZV.createAuction.call(uintILu7Yvr, uinthLEffKI, uintMrJsXAw, uintjjdi32E, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256PtO1G3X = await BAEcSdfsZV.createAuction.call(uint9erDAf, uintd19N0fy, uintjvhIs3A, uintSsJoBu5, {from: accounts[4]});

		await expect(BAEcSdfsZV.resetAuction.call(uintNn9Pm2Y, uintapgBaN2, uintGn9uOzv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})