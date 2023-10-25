const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressorAfuq = accounts[4]
		const BAEgE2ihpX = await BAE.new(addressorAfuq, {from: accounts[2]});
		const uintKWBT8G4 = BigInt("603")
		const uintk2etWtH = BigInt("837")
		const uintjOORKgq = BigInt("842")
		const uintAgvfEBk = BigInt("1942")
		const uint256IWHVp3U = await BAEgE2ihpX.setAuctionFee.call(uintKWBT8G4, {from: accounts[2]});
		const uint256HF9OGE = await BAEgE2ihpX.setAuctionFee.call(uintk2etWtH, {from: accounts[2]});
		const uint256BuJB5cM = await BAEgE2ihpX.concludeAuction.call(uintjOORKgq, {from: accounts[2]});
		const uint256usNT63p = await BAEgE2ihpX.buy.call(uintAgvfEBk, {from: accounts[0]});

		await expect(BAEgE2ihpX.setAuctionFee.call(uintKWBT8G4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressnC9dMqN = accounts[1]
		const BAEs8cQhP3 = await BAE.new(addressnC9dMqN, {from: accounts[5]});
		const uintnY96SSd = BigInt("834")
		const uintxHDiKwV = BigInt("1568")
		const uintSDKCEJd = BigInt("876")
		const uintNDDm0SS = BigInt("337")
		const uintYXXV93f = BigInt("319")
		const uintiLktqQx = BigInt("139")
		const uintrqve2j = BigInt("1141")
		const uintHQKBAbr = BigInt("1227")
		const uint256VCUPx6m = await BAEs8cQhP3.createAuction.call(uintNDDm0SS, uintSDKCEJd, uintxHDiKwV, uintnY96SSd, {from: accounts[4]});
		const uint256zFMy8R5 = await BAEs8cQhP3.resetAuction.call(uintrqve2j, uintiLktqQx, uintYXXV93f, {from: accounts[3]});
		const uint256dXEPTV5 = await BAEs8cQhP3.changePrintFee.call(uintHQKBAbr, {from: accounts[0]});

		await expect(BAEs8cQhP3.createAuction.call(uintNDDm0SS, uintSDKCEJd, uintxHDiKwV, uintnY96SSd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressqiunaG4 = accounts[3]
		const BAEG3COeqo = await BAE.new(addressqiunaG4, {from: accounts[4]});
		const uintTmMq7CL = BigInt("332")
		const uintLvExRd1 = BigInt("1798")
		const uintobNqOuP = BigInt("1241")
		const uintPqFjGCn = BigInt("360")
		const uintxfKpo5O = BigInt("1655")
		const uintccBrixU = BigInt("1595")
		const uintjMoRmZI = BigInt("697")
		const uint256t2FuIM = await BAEG3COeqo.concludeAuction.call(uintTmMq7CL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rb9U6q = await BAEG3COeqo.resetAuction.call(uintPqFjGCn, uintobNqOuP, uintLvExRd1, {from: accounts[3]});
		const uint256ejZ8BFu = await BAEG3COeqo.setAuctionFee.call(uintxfKpo5O, {from: accounts[2]});
		const uint256V7tfxH5 = await BAEG3COeqo.setAuctionFee.call(uintccBrixU, {from: accounts[4]});
		const uint256VDqBPPV = await BAEG3COeqo.bid.call(uintjMoRmZI, {from: accounts[5]});

		await expect(BAEG3COeqo.concludeAuction.call(uintTmMq7CL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresspfYYUXB = accounts[0]
		const BAEcDJCQqe = await BAE.new(addresspfYYUXB, {from: accounts[3]});
		const uintmoBl9OB = BigInt("673")
		const uintmxAqzRI = BigInt("662")
		const uintglw9t2L = BigInt("996")
		const uintP1hGKF = BigInt("448")
		const uintVt4HgL = BigInt("1629")
		const uintAp29bFn = BigInt("844")
		const uintUuArcxF = BigInt("529")
		const uintr33zs3e = BigInt("1229")
		const uint256d72H8VW = await BAEcDJCQqe.resetAuction.call(uintglw9t2L, uintmxAqzRI, uintmoBl9OB, {from: accounts[1]});
		const uint256L7b8Oai = await BAEcDJCQqe.concludeAuction.call(uintP1hGKF, {from: accounts[3]});
		const uint256e9zZ5Vk = await BAEcDJCQqe.createAuction.call(uintr33zs3e, uintUuArcxF, uintAp29bFn, uintVt4HgL, {from: accounts[1]});

		await expect(BAEcDJCQqe.resetAuction.call(uintglw9t2L, uintmxAqzRI, uintmoBl9OB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressVxsa1UH = accounts[2]
		const BAEizldK7n = await BAE.new(addressVxsa1UH, {from: accounts[3]});
		const uintXkpll0P = BigInt("1654")
		const uintamzyRpt = BigInt("1667")
		const uintooaeBYQ = BigInt("1125")
		const uintOAphj7P = BigInt("1659")
		const uintlkZRuTD = BigInt("1312")
		const uint256y83aKAM = await BAEizldK7n.buy.call(uintXkpll0P, {from: accounts[2]});
		const uint256QcKKHqV = await BAEizldK7n.concludeAuction.call(uintamzyRpt, {from: accounts[1]});
		const uint256opj1P5t = await BAEizldK7n.resetAuction.call(uintlkZRuTD, uintOAphj7P, uintooaeBYQ, {from: accounts[1]});

		await expect(BAEizldK7n.buy.call(uintXkpll0P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressCrGUe5k = accounts[2]
		const BAEdU4CMTZ = await BAE.new(addressCrGUe5k, {from: accounts[4]});
		const uintOEmgYnf = BigInt("1302")
		const uintahTZgBg = BigInt("1009")
		const uintvQVXl4k = BigInt("1567")
		const uintbxQ5rg9 = BigInt("1341")
		const uint3uzrda = BigInt("475")
		const uint256vcShPUQ = await BAEdU4CMTZ.bid.call(uintOEmgYnf, {from: accounts[0]});
		const uint256G6AzRIT = await BAEdU4CMTZ.buy.call(uintahTZgBg, {from: accounts[3]});
		const uint256FwWIYwC = await BAEdU4CMTZ.buy.call(uintvQVXl4k, {from: accounts[3]});
		const uint256QSLjps = await BAEdU4CMTZ.bid.call(uintbxQ5rg9, {from: accounts[4]});
		const uint256nIyAOwG = await BAEdU4CMTZ.buy.call(uint3uzrda, {from: accounts[1]});

		await expect(BAEdU4CMTZ.bid.call(uintOEmgYnf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressSVtBCmk = "0x0000000000000000000000000000000000000001"
		const BAEkFmgmp = await BAE.new(addressSVtBCmk, {from: "0x0000000000000000000000000000000000000001"});
		const uintb1LrESw = BigInt("1943")
		const uintrg42B7 = BigInt("627")
		const uintUmK4Q6n = BigInt("1914")
		const uintFsd0Av6 = BigInt("767")
		const uintu9cAbf = BigInt("1089")
		const uintLd0YNjT = BigInt("1045")
		const uint09HuMM = BigInt("1479")
		const uintY0M8UHw = BigInt("690")
		const uintKIwwi5 = BigInt("1225")
		const uint256I4Yir5 = await BAEkFmgmp.createAuction.call(uintFsd0Av6, uintUmK4Q6n, uintrg42B7, uintb1LrESw, {from: accounts[1]});
		const uint256N7etIyl = await BAEkFmgmp.setAuctionFee.call(uintu9cAbf, {from: accounts[2]});
		const uint256uUfNIEu = await BAEkFmgmp.createAuction.call(uintKIwwi5, uintY0M8UHw, uint09HuMM, uintLd0YNjT, {from: accounts[1]});
	});
})