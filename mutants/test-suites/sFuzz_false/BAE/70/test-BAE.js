const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addresswCNMQYH = accounts[4]
		const BAEnAGW4Wu = await BAE.new(addresswCNMQYH, {from: accounts[2]});
		const uintgn7MuLS = BigInt("1616")
		const uintEih1EWK = BigInt("1703")
		const uinthi4Pue = BigInt("648")
		const uintkWPN5QL = BigInt("1535")
		const uintzYLu8cX = BigInt("1822")
		const uintSmfLEBQ = BigInt("1611")
		const uintbFHEc5T = BigInt("1149")
//		const uint256Kzd1uqe = await BAEnAGW4Wu.setAuctionFee.call(uintgn7MuLS, {from: accounts[0]});
//		const uint256Wk4covj = await BAEnAGW4Wu.createAuction.call(uintzYLu8cX, uintkWPN5QL, uinthi4Pue, uintEih1EWK, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Q08o1aI = await BAEnAGW4Wu.setAuctionFee.call(uintSmfLEBQ, {from: accounts[0]});
//		const uint256HYV4ZMi = await BAEnAGW4Wu.bid.call(uintbFHEc5T, {from: accounts[2]});

		await expect(BAEnAGW4Wu.setAuctionFee.call(uintgn7MuLS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressY5Zsy2c = accounts[1]
		const BAEPhjcyTM = await BAE.new(addressY5Zsy2c, {from: accounts[2]});
		const uintIPp7kf = BigInt("711")
		const uintqwIYJes = BigInt("2009")
		const uintOtnhuNi = BigInt("51")
		const uintVigUu3 = BigInt("500")
		const uintN9AH95D = BigInt("1715")
		const uintv5Ar5Xt = BigInt("88")
		const uintBGkivFS = BigInt("1941")
		const uintJC06CxF = BigInt("1803")
//		const uint256ml7PJH = await BAEPhjcyTM.buy.call(uintIPp7kf, {from: accounts[1]});
//		const uint256w5fK0BV = await BAEPhjcyTM.concludeAuction.call(uintqwIYJes, {from: accounts[0]});
//		const uint256I7fPHUa = await BAEPhjcyTM.changePrintFee.call(uintOtnhuNi, {from: accounts[4]});
//		const uint256tYHyKTM = await BAEPhjcyTM.createAuction.call(uintBGkivFS, uintv5Ar5Xt, uintN9AH95D, uintVigUu3, {from: accounts[2]});
//		const uint256DUNPU8X = await BAEPhjcyTM.concludeAuction.call(uintJC06CxF, {from: accounts[4]});

		await expect(BAEPhjcyTM.buy.call(uintIPp7kf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresslPyN6Z = accounts[4]
		const BAEwRzRSO4 = await BAE.new(addresslPyN6Z, {from: accounts[0]});
		const uintkqBDRz4 = BigInt("1795")
		const uintiuNi7Uf = BigInt("1238")
		const uintcQARGdt = BigInt("883")
		const uintEXdMCa = BigInt("273")
		const uintffNfoRW = BigInt("972")
		const uintgiB4Bcu = BigInt("1582")
//		const uint256ShPDdq = await BAEwRzRSO4.createAuction.call(uintEXdMCa, uintcQARGdt, uintiuNi7Uf, uintkqBDRz4, {from: accounts[5]});
//		const uint256WpL0nJk = await BAEwRzRSO4.setAuctionFee.call(uintffNfoRW, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256JwdzoeX = await BAEwRzRSO4.changePrintFee.call(uintgiB4Bcu, {from: accounts[4]});

		await expect(BAEwRzRSO4.createAuction.call(uintEXdMCa, uintcQARGdt, uintiuNi7Uf, uintkqBDRz4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressKViJwT = accounts[1]
		const BAElo0McIg = await BAE.new(addressKViJwT, {from: accounts[3]});
		const uintrgubd6d = BigInt("622")
		const uintE6Zt7EX = BigInt("22")
		const uintNS3WSEA = BigInt("669")
		const uintwW5h3uD = BigInt("1061")
		const uintyFpnFl = BigInt("27")
		const uintlG5bLO7 = BigInt("242")
		const uintYo0ZG9p = BigInt("28")
		const uintmJ6XLI7 = BigInt("577")
		const uintFZ5gJcS = BigInt("689")
//		const uint256Lpo8jfp = await BAElo0McIg.resetAuction.call(uintNS3WSEA, uintE6Zt7EX, uintrgubd6d, {from: accounts[2]});
//		const uint256TtRX8wg = await BAElo0McIg.changePrintFee.call(uintwW5h3uD, {from: accounts[1]});
//		const uint256RFbjXZI = await BAElo0McIg.resetAuction.call(uintYo0ZG9p, uintlG5bLO7, uintyFpnFl, {from: accounts[0]});
//		const uint256XsOeFL = await BAElo0McIg.buy.call(uintmJ6XLI7, {from: accounts[1]});
//		const uint256BQBQJzW = await BAElo0McIg.setAuctionFee.call(uintFZ5gJcS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAElo0McIg.resetAuction.call(uintNS3WSEA, uintE6Zt7EX, uintrgubd6d, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresseEzimvh = accounts[4]
		const BAE7dEQmG = await BAE.new(addresseEzimvh, {from: "0x0000000000000000000000000000000000000001"});
		const uintuVsxRZy = BigInt("1690")
		const uintBN4aVqg = BigInt("1933")
		const uintUKgOVJq = BigInt("13")
		const uintclpDjh = BigInt("7")
		const uint256Ta0Vped = await BAE7dEQmG.bid.call(uintuVsxRZy, {from: accounts[0]});
		const uint256T1p7FhG = await BAE7dEQmG.setAuctionFee.call(uintBN4aVqg, {from: accounts[0]});
		const uint256RySZpn9 = await BAE7dEQmG.buy.call(uintUKgOVJq, {from: accounts[3]});
		const uint256C4sSQ5e = await BAE7dEQmG.buy.call(uintclpDjh, {from: accounts[2]});
	});

	it('test for BAE', async () => {
		const addressBL8Q7oz = accounts[4]
		const BAEiKQlNSm = await BAE.new(addressBL8Q7oz, {from: accounts[3]});
		const uintCyOqYhE = BigInt("1721")
		const uintBeNFIvs = BigInt("1247")
		const uintfjeqwwc = BigInt("154")
		const uintF4kC01a = BigInt("1951")
		const uintUmCh26b = BigInt("1174")
		const uintVuUSb6V = BigInt("585")
//		const uint256rjyFYkL = await BAEiKQlNSm.bid.call(uintCyOqYhE, {from: accounts[0]});
//		const uint256EfWK28l = await BAEiKQlNSm.createAuction.call(uintUmCh26b, uintF4kC01a, uintfjeqwwc, uintBeNFIvs, {from: accounts[4]});
//		const uint256aW6nO2i = await BAEiKQlNSm.setAuctionFee.call(uintVuUSb6V, {from: accounts[4]});

		await expect(BAEiKQlNSm.bid.call(uintCyOqYhE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressKkVEsmM = accounts[0]
		const BAEg65T6Xx = await BAE.new(addressKkVEsmM, {from: accounts[0]});
		const uintKXA0CL = BigInt("1841")
		const uintFV0IiPH = BigInt("1608")
//		const uint256v9f2UYi = await BAEg65T6Xx.concludeAuction.call(uintKXA0CL, {from: accounts[0]});
//		const uint256Z4TZYdi = await BAEg65T6Xx.buy.call(uintFV0IiPH, {from: accounts[2]});

		await expect(BAEg65T6Xx.concludeAuction.call(uintKXA0CL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})