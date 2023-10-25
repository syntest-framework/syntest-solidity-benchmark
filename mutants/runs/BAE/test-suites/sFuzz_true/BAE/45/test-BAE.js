const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressnMsfV1l = accounts[1]
		const BAExZvNqaT = await BAE.new(addressnMsfV1l, {from: accounts[4]});
		const uintKEdglBB = BigInt("1408")
		const uintbDjTnts = BigInt("697")
		const uintacJ1nY9 = BigInt("1629")
		const uintRvq48LM = BigInt("545")
		const uintcYSatnD = BigInt("1825")
		const uintZEwIBx2 = BigInt("47")
		const uint256WRc4v01 = await BAExZvNqaT.setAuctionFee.call(uintKEdglBB, {from: accounts[2]});
		const uint256J08zKnU = await BAExZvNqaT.createAuction.call(uintcYSatnD, uintRvq48LM, uintacJ1nY9, uintbDjTnts, {from: accounts[2]});
		const uint256ws5iKGN = await BAExZvNqaT.buy.call(uintZEwIBx2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAExZvNqaT.setAuctionFee.call(uintKEdglBB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresshmHSOIg = accounts[2]
		const BAEBlaSyA7 = await BAE.new(addresshmHSOIg, {from: accounts[1]});
		const uintqxQeK9O = BigInt("335")
		const uint06d8Pc = BigInt("1901")
		const uint256yf0fCZa = await BAEBlaSyA7.buy.call(uintqxQeK9O, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QYCw5gB = await BAEBlaSyA7.bid.call(uint06d8Pc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEBlaSyA7.buy.call(uintqxQeK9O, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressSNyXu9a = accounts[0]
		const BAEdNnE9Kc = await BAE.new(addressSNyXu9a, {from: accounts[2]});
		const uintaizEVWR = BigInt("134")
		const uintaCvPmy2 = BigInt("740")
		const uintqwudJ7 = BigInt("1363")
		const uintobXWJyp = BigInt("1940")
		const uintCpdqEVK = BigInt("2043")
		const uintWMb4q5 = BigInt("819")
		const uintNmkswt = BigInt("475")
		const uintimEMzJU = BigInt("1504")
		const uint2566l9aSd = await BAEdNnE9Kc.resetAuction.call(uintqwudJ7, uintaCvPmy2, uintaizEVWR, {from: accounts[1]});
		const uint256RS6FlnR = await BAEdNnE9Kc.createAuction.call(uintNmkswt, uintWMb4q5, uintCpdqEVK, uintobXWJyp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sJEv0Ww = await BAEdNnE9Kc.buy.call(uintimEMzJU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEdNnE9Kc.resetAuction.call(uintqwudJ7, uintaCvPmy2, uintaizEVWR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressIrVgQRJ = accounts[4]
		const BAEAWtoDT = await BAE.new(addressIrVgQRJ, {from: accounts[4]});
		const uintWwPx0AZ = BigInt("1976")
		const uintBnxQ8nM = BigInt("582")
		const uintI6wKVIj = BigInt("578")
		const uintCj7U0M7 = BigInt("319")
		const uintDlXzL4c = BigInt("892")
		const uintyxxerB = BigInt("303")
		const uintHtvoeQW = BigInt("574")
		const uintfSAgchY = BigInt("1314")
		const uint8GsWGZ = BigInt("1443")
		const uintBSITOr6 = BigInt("1225")
		const uinteMFguey = BigInt("1786")
		const uintQX9nHY7 = BigInt("393")
		const uint256Psnm6sM = await BAEAWtoDT.createAuction.call(uintCj7U0M7, uintI6wKVIj, uintBnxQ8nM, uintWwPx0AZ, {from: accounts[4]});
		const uint256O63eAeZ = await BAEAWtoDT.createAuction.call(uintfSAgchY, uintHtvoeQW, uintyxxerB, uintDlXzL4c, {from: accounts[3]});
		const uint256GsQNrp6 = await BAEAWtoDT.resetAuction.call(uinteMFguey, uintBSITOr6, uint8GsWGZ, {from: accounts[4]});
		const uint256MpOTZTJ = await BAEAWtoDT.bid.call(uintQX9nHY7, {from: accounts[1]});

		await expect(BAEAWtoDT.createAuction.call(uintCj7U0M7, uintI6wKVIj, uintBnxQ8nM, uintWwPx0AZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressK81jPc = accounts[0]
		const BAEu6UkOHP = await BAE.new(addressK81jPc, {from: accounts[2]});
		const uintOa6subG = BigInt("71")
		const uintLagabAj = BigInt("1833")
		const uintVHz3RYZ = BigInt("546")
		const uintls6xK6H = BigInt("2007")
		const uintpnqirv9 = BigInt("938")
		const uintgpucBhy = BigInt("1343")
		const uint256OLdtx4n = await BAEu6UkOHP.bid.call(uintOa6subG, {from: accounts[1]});
		const uint256Xl9iHoK = await BAEu6UkOHP.buy.call(uintLagabAj, {from: accounts[2]});
		const uint256WiqaNRc = await BAEu6UkOHP.createAuction.call(uintgpucBhy, uintpnqirv9, uintls6xK6H, uintVHz3RYZ, {from: accounts[5]});

		await expect(BAEu6UkOHP.bid.call(uintOa6subG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressaJFsS6r = accounts[2]
		const BAEHLqtZve = await BAE.new(addressaJFsS6r, {from: accounts[1]});
		const uintN01QLfE = BigInt("1181")
		const uinthvYOvZs = BigInt("464")
		const uintah1y6DH = BigInt("1289")
		const uintQlmLJvi = BigInt("1782")
		const uintw1BnaJ5 = BigInt("1918")
		const uint256fZL9jF = await BAEHLqtZve.concludeAuction.call(uintN01QLfE, {from: accounts[2]});
		const uint256ohpDrO6 = await BAEHLqtZve.createAuction.call(uintw1BnaJ5, uintQlmLJvi, uintah1y6DH, uinthvYOvZs, {from: accounts[0]});

		await expect(BAEHLqtZve.concludeAuction.call(uintN01QLfE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressxG4iqdk = accounts[2]
		const BAEs7BQNLl = await BAE.new(addressxG4iqdk, {from: "0x0000000000000000000000000000000000000001"});
		const uintgC3wRMB = BigInt("1035")
		const uintXGrkKH = BigInt("1364")
		const uintpDQBUxT = BigInt("162")
		const uintFJruDW3 = BigInt("771")
		const uintVKYwdQB = BigInt("471")
		const uintFhm1KLG = BigInt("775")
		const uintOQpeA6y = BigInt("2016")
		const uint256D0bd7Q4 = await BAEs7BQNLl.createAuction.call(uintFJruDW3, uintpDQBUxT, uintXGrkKH, uintgC3wRMB, {from: accounts[1]});
		const uint256mAXTddZ = await BAEs7BQNLl.resetAuction.call(uintOQpeA6y, uintFhm1KLG, uintVKYwdQB, {from: accounts[4]});
	});
})