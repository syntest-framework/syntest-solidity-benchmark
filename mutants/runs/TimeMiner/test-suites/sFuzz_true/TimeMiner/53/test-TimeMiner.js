const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerKeuvEl = await TimeMiner.new({from: accounts[0]});
		const addressn4EHYd = accounts[4]
		const uintnmCvtnv = BigInt("345")
		const addressyIuciId = accounts[0]
		const boolTLmMBc = true
		await TimeMinerKeuvEl.preSaleFinished.call({from: accounts[1]});
		const uint256TH14dEh = await TimeMinerKeuvEl.balanceOf.call(addressn4EHYd, {from: accounts[0]});
		const boolTqVJFSi = await TimeMinerKeuvEl.transfer.call(addressyIuciId, uintnmCvtnv, {from: accounts[5]});
		const boolXqqWBpp = await TimeMinerKeuvEl.setStableCoinSystem.call(boolTLmMBc, {from: accounts[0]});
		const boolhIMoSP = await TimeMinerKeuvEl.infoStableSystem.call({from: accounts[2]});
		const uint256A0fljrx = await TimeMinerKeuvEl.totalSupply.call({from: accounts[3]});

		await expect(TimeMinerKeuvEl.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinern00p3mt = await TimeMiner.new({from: accounts[1]});
		const addressqyZTea4 = accounts[3]
		const uintqncroLK = BigInt("92")
		const addressrTLAOXZ = accounts[3]
		const uint2561NIb6X = await TimeMinern00p3mt.allInfoFor.call(addressqyZTea4, {from: accounts[5]});
		const boolqivOqKw = await TimeMinern00p3mt.transfer.call(addressrTLAOXZ, uintqncroLK, {from: accounts[0]});

		await expect(TimeMinern00p3mt.allInfoFor.call(addressqyZTea4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerMyl5pd7 = await TimeMiner.new({from: accounts[2]});
		const addressXZLqkJ3 = accounts[2]
		const boolSG72CXZ = true
		const addressUxXfUpa = accounts[2]
		const boolqklW5e = false
		const uint256ddhL1Sw = await TimeMinerMyl5pd7.totalSupply.call({from: accounts[1]});
		const uint256K4JF4h4 = await TimeMinerMyl5pd7.balanceOfTokenCirculation.call(addressXZLqkJ3, {from: accounts[0]});
		const addressSAouV4l = await TimeMinerMyl5pd7.whitelist.call(addressUxXfUpa, boolSG72CXZ, {from: accounts[0]});
		const boolHLbmtSo = await TimeMinerMyl5pd7.setStableCoinSystem.call(boolqklW5e, {from: accounts[3]});

		assert.equal(uint256K4JF4h4, BigInt("24000000"))
		assert.equal(uint256ddhL1Sw, BigInt("24000000"))
		await expect(TimeMinerMyl5pd7.whitelist.call(addressUxXfUpa, boolSG72CXZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerg7xICZJ = await TimeMiner.new({from: accounts[1]});
		const uintGNvgq9i = BigInt("371")
		const addressWLGQbLP = accounts[4]
		const uintT8abIz0 = BigInt("1256")
		const uintCQ1OE2X = BigInt("1575")
		const uint256u4rVROH = await TimeMinerg7xICZJ.totalSupply.call({from: accounts[2]});
		const boolBpMRwK6 = await TimeMinerg7xICZJ.transfer.call(addressWLGQbLP, uintGNvgq9i, {from: accounts[3]});
		const uint256j4UFoT = await TimeMinerg7xICZJ.setPrizeFromNewAddress.call(uintCQ1OE2X, uintT8abIz0, {from: accounts[4]});

		assert.equal(uint256u4rVROH, BigInt("24000000"))
		await expect(TimeMinerg7xICZJ.transfer.call(addressWLGQbLP, uintGNvgq9i, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerAuEVIBl = await TimeMiner.new({from: accounts[2]});
		const uintmncyiFm = BigInt("810")
		const addressm3PfwpT = accounts[2]
		const uintgDH6PpE = BigInt("351")
		const addressmsycM65 = accounts[5]
		const uint256hkQcYFU = await TimeMinerAuEVIBl.totalSupply.call({from: accounts[1]});
		const booljlGNhYU = await TimeMinerAuEVIBl.approve.call(addressm3PfwpT, uintmncyiFm, {from: accounts[0]});
		const boolBjyVE9B = await TimeMinerAuEVIBl.transfer.call(addressmsycM65, uintgDH6PpE, {from: accounts[2]});
		await TimeMinerAuEVIBl.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"});
		const booloaHD1SW = await TimeMinerAuEVIBl.infoStableSystem.call({from: accounts[3]});

		assert.equal(boolBjyVE9B, true)
		assert.equal(booljlGNhYU, true)
		assert.equal(uint256hkQcYFU, BigInt("24000000"))
		await expect(TimeMinerAuEVIBl.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerHXiWNUk = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKv83qaP = BigInt("411")
		const uintkLGTbLT = BigInt("338")
		const addressYgOO49 = "0x0000000000000000000000000000000000000001"
		const addresszqApeXa = accounts[2]
		const uintTDA35dF = BigInt("1056")
		const addressPWzlKZa = accounts[1]
		const addressC2g0Vgn = accounts[3]
		const addressy7Vug3Z = accounts[0]
		const addressi9jqRU = accounts[4]
		const addressb89lYjN = accounts[1]
		const uintTRcL2W7 = await TimeMinerHXiWNUk.preSale.call(uintKv83qaP, {from: accounts[1]});
		const boolXAb7Uja = await TimeMinerHXiWNUk.approve.call(addressYgOO49, uintkLGTbLT, {from: accounts[0]});
		const uint256elOFPwv = await TimeMinerHXiWNUk.tokensToClaim.call(addresszqApeXa, {from: accounts[2]});
		const boola6TY7d = await TimeMinerHXiWNUk.transfer.call(addressPWzlKZa, uintTDA35dF, {from: accounts[2]});
		const uint256fOsVBgP = await TimeMinerHXiWNUk.allowance.call(addressy7Vug3Z, addressC2g0Vgn, {from: accounts[1]});
		const uint256vnqCa8 = await TimeMinerHXiWNUk.allowance.call(addressb89lYjN, addressi9jqRU, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzZLY47c = await TimeMiner.new({from: accounts[4]});
		const addresscBHXX3Z = accounts[4]
		const addresstMfsXa = "0x0000000000000000000000000000000000000001"
		const addressiqCmVs = accounts[5]
		const addressTnh9g19 = "0x0000000000000000000000000000000000000001"
		const uintNfDNXJP = BigInt("584")
		const uintIir2WLh = BigInt("1154")
		const uintoiW7dDJ = BigInt("187")
		const uint256eiqAUvD = await TimeMinerzZLY47c.balanceOfTokenCirculation.call(addresscBHXX3Z, {from: accounts[3]});
		const uint256LiCFSAe = await TimeMinerzZLY47c.allowance.call(addressiqCmVs, addresstMfsXa, {from: accounts[4]});
		const uint256Kb3qYm3 = await TimeMinerzZLY47c.balanceOfTokenCirculation.call(addressTnh9g19, {from: accounts[4]});
		const uint256i3oXvMF = await TimeMinerzZLY47c.changePreSalePriceIfToHigh.call(uintNfDNXJP, {from: accounts[1]});
		const uint256xvaOwoS = await TimeMinerzZLY47c.changePreSalePriceIfToHigh.call(uintIir2WLh, {from: accounts[3]});
		const uint256TPrWGRj = await TimeMinerzZLY47c.changePreSalePriceIfToHigh.call(uintoiW7dDJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Kb3qYm3, BigInt("0"))
		assert.equal(uint256LiCFSAe, BigInt("0"))
		assert.equal(uint256eiqAUvD, BigInt("24000000"))
		await expect(TimeMinerzZLY47c.changePreSalePriceIfToHigh.call(uintNfDNXJP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinernFnjbTm = await TimeMiner.new({from: accounts[1]});
		const addressPXWH2R = accounts[2]
		const uintRmkvk2X = BigInt("473")
		const addressHkZbx0Z = accounts[4]
		const addressBB26pw = accounts[5]
		const addressOPoIM66 = accounts[2]
		const boolJMpi03T = await TimeMinernFnjbTm.infoStableSystem.call({from: accounts[3]});
		const uint256mdcxAFy = await TimeMinernFnjbTm.balanceOfTokenCirculation.call(addressPXWH2R, {from: "0x0000000000000000000000000000000000000001"});
		const boolcCUVaiZ = await TimeMinernFnjbTm.transfer.call(addressHkZbx0Z, uintRmkvk2X, {from: accounts[2]});
		const uint256AyYDM89 = await TimeMinernFnjbTm.allInfoFor.call(addressBB26pw, {from: "0x0000000000000000000000000000000000000001"});
		const boolqfwUbuw = await TimeMinernFnjbTm.isWhitelisted.call(addressOPoIM66, {from: accounts[1]});

		assert.equal(uint256mdcxAFy, BigInt("0"))
		await expect(TimeMinernFnjbTm.transfer.call(addressHkZbx0Z, uintRmkvk2X, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzZLY47c = await TimeMiner.new({from: accounts[4]});
		const addressQCFA1H6 = accounts[5]
		const addresseOaRIi = "0x0000000000000000000000000000000000000001"
		const addressY5gso9G = accounts[5]
		const uintjNoisdI = BigInt("957")
		const uintgF9TbXq = BigInt("1064")
		const addressiZbrpdJ = "0x0000000000000000000000000000000000000001"
		const uinttF44tQs = BigInt("584")
		const uintqKOzSMs = BigInt("1154")
		const uintKqVgWEF = BigInt("187")
		const uint256eiqAUvD = await TimeMinerzZLY47c.balanceOfTokenCirculation.call(addressQCFA1H6, {from: accounts[3]});
		const uint256LiCFSAe = await TimeMinerzZLY47c.allowance.call(addressY5gso9G, addresseOaRIi, {from: accounts[4]});
		const uint256NeJvDN1 = await TimeMinerzZLY47c.setPrizeFromNewAddress.call(uintgF9TbXq, uintjNoisdI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Kb3qYm3 = await TimeMinerzZLY47c.balanceOfTokenCirculation.call(addressiZbrpdJ, {from: accounts[4]});
		const uint256i3oXvMF = await TimeMinerzZLY47c.changePreSalePriceIfToHigh.call(uinttF44tQs, {from: accounts[1]});
		const uint256xvaOwoS = await TimeMinerzZLY47c.changePreSalePriceIfToHigh.call(uintqKOzSMs, {from: accounts[3]});
		const uint256TPrWGRj = await TimeMinerzZLY47c.changePreSalePriceIfToHigh.call(uintKqVgWEF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256LiCFSAe, BigInt("0"))
		assert.equal(uint256eiqAUvD, BigInt("0"))
		await expect(TimeMinerzZLY47c.setPrizeFromNewAddress.call(uintgF9TbXq, uintjNoisdI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerMyl5pd7 = await TimeMiner.new({from: accounts[2]});
		const boolqklW5e = false
		const uintsHrvykK = BigInt("111")
		const addressh2i3xzV = accounts[1]
		const uintH0R75Dd = BigInt("1263")
		const boolHLbmtSo = await TimeMinerMyl5pd7.setStableCoinSystem.call(boolqklW5e, {from: accounts[3]});
		const boolqQJEtbc = await TimeMinerMyl5pd7.approve.call(addressh2i3xzV, uintsHrvykK, {from: accounts[0]});
		const uint256CnranPQ = await TimeMinerMyl5pd7.changePreSalePriceIfToHigh.call(uintH0R75Dd, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerMyl5pd7.setStableCoinSystem.call(boolqklW5e, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerMyl5pd7 = await TimeMiner.new({from: accounts[2]});
		const addressEJZFgU = accounts[3]
		const addresstRzIxSO = accounts[2]
		const boolSG72CXZ = false
		const addressDDOnlQE = accounts[2]
		const boolICw0TpF = await TimeMinerMyl5pd7.isWhitelisted.call(addressEJZFgU, {from: accounts[3]});
		const boolvxtB4hP = await TimeMinerMyl5pd7.isWhitelisted.call(addresstRzIxSO, {from: accounts[1]});
		const addressSAouV4l = await TimeMinerMyl5pd7.whitelist.call(addressDDOnlQE, boolSG72CXZ, {from: accounts[0]});

		assert.equal(boolICw0TpF, false)
		assert.equal(boolvxtB4hP, true)
		await expect(TimeMinerMyl5pd7.whitelist.call(addressDDOnlQE, boolSG72CXZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerTJu8ixu = await TimeMiner.new({from: accounts[3]});
		const uintwCR9YTP = BigInt("836")
		const uintl1ZGIhF = BigInt("34")
		const addressDwR83j = accounts[0]
		const boolfhCcIDc = true
		const addresst1OtfjU = accounts[1]
		const uint256jbOa1Qs = await TimeMinerTJu8ixu.changePreSalePriceIfToHigh.call(uintwCR9YTP, {from: accounts[3]});
		const uint256R8oHskD = await TimeMinerTJu8ixu.totalSupply.call({from: accounts[3]});
		const booli1p4Naj = await TimeMinerTJu8ixu.approve.call(addressDwR83j, uintl1ZGIhF, {from: accounts[0]});
		const boolp65irsq = await TimeMinerTJu8ixu.setStableCoinSystem.call(boolfhCcIDc, {from: accounts[1]});
		const uint256IW5awu8 = await TimeMinerTJu8ixu.balanceOf.call(addresst1OtfjU, {from: accounts[5]});

		assert.equal(booli1p4Naj, true)
		assert.equal(uint256R8oHskD, BigInt("24000000"))
		await expect(TimeMinerTJu8ixu.setStableCoinSystem.call(boolfhCcIDc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinern00p3mt = await TimeMiner.new({from: accounts[1]});
		const addressrvNWvCT = accounts[5]
		await TimeMinern00p3mt.preSaleFinished.call({from: accounts[1]});
		const uint2561NIb6X = await TimeMinern00p3mt.allInfoFor.call(addressrvNWvCT, {from: accounts[5]});

		await expect(TimeMinern00p3mt.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerMyl5pd7 = await TimeMiner.new({from: accounts[2]});
		const uintDnNhXDV = BigInt("446")
		const addressmEX7vne = accounts[4]
		const addressPBh2N9T = accounts[3]
		const boolSG72CXZ = false
		const addressoOwcnR4 = accounts[2]
		const booleE8RDYR = await TimeMinerMyl5pd7.transferFrom.call(addressPBh2N9T, addressmEX7vne, uintDnNhXDV, {from: "0x0000000000000000000000000000000000000001"});
		const addressSAouV4l = await TimeMinerMyl5pd7.whitelist.call(addressoOwcnR4, boolSG72CXZ, {from: accounts[0]});

		await expect(TimeMinerMyl5pd7.transferFrom.call(addressPBh2N9T, addressmEX7vne, uintDnNhXDV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerMyl5pd7 = await TimeMiner.new({from: accounts[2]});
		const boolpW404Py = false
		const addressSgLZcHo = accounts[3]
		const boolSG72CXZ = false
		const addressPySanW7 = accounts[2]
		const addressvvlA98g = accounts[5]
		const addressNqLv11a = await TimeMinerMyl5pd7.whitelist.call(addressSgLZcHo, boolpW404Py, {from: accounts[2]});
		const addressSAouV4l = await TimeMinerMyl5pd7.whitelist.call(addressPySanW7, boolSG72CXZ, {from: accounts[0]});
		const uint256bl4jzCF = await TimeMinerMyl5pd7.allInfoFor.call(addressvvlA98g, {from: accounts[5]});

		await expect(TimeMinerMyl5pd7.whitelist.call(addressPySanW7, boolSG72CXZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinercvWO19 = await TimeMiner.new({from: accounts[1]});
		const addresszheI9ll = accounts[4]
		const boolf39Bedt = true
		const addresstTLFLhX = accounts[0]
		const uintLx6vPzF = BigInt("846")
		const uintXC4QZaQ = BigInt("2014")
		const addressfMED0do = accounts[4]
		const boolXmAkkH = await TimeMinercvWO19.isWhitelisted.call(addresszheI9ll, {from: accounts[4]});
		const boolNY4v08j = await TimeMinercvWO19.setStableCoinSystem.call(boolf39Bedt, {from: accounts[1]});
		const uint256hYwVbPE = await TimeMinercvWO19.tokensToClaim.call(addresstTLFLhX, {from: accounts[4]});
		const uint256jf4TpVh = await TimeMinercvWO19.setPrizeFromNewAddress.call(uintXC4QZaQ, uintLx6vPzF, {from: accounts[0]});
		const boolE78f1C5 = await TimeMinercvWO19.isWhitelisted.call(addressfMED0do, {from: accounts[2]});

		assert.equal(boolXmAkkH, false)
		await expect(TimeMinercvWO19.tokensToClaim.call(addresstTLFLhX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinern00p3mt = await TimeMiner.new({from: accounts[1]});
		const uintEEzsmRw = BigInt("1537")
		const addresszNcm6ij = accounts[5]
		await TimeMinern00p3mt.preSaleFinished.call({from: accounts[1]});
		const uint1j0F08 = await TimeMinern00p3mt.preSale.call(uintEEzsmRw, {from: accounts[5]});
		const uint2561NIb6X = await TimeMinern00p3mt.allInfoFor.call(addresszNcm6ij, {from: accounts[5]});

		await expect(TimeMinern00p3mt.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerHjhUZW5 = await TimeMiner.new({from: accounts[2]});
		const uintK58K8eS = BigInt("1856")
		const uintmpm4pcZ = BigInt("854")
		const addressnpseNHb = accounts[0]
		const addressuFoVtT0 = accounts[3]
		const uintBlKf0Aa = BigInt("1190")
		const addressLLiW47y = accounts[2]
		const uint256OzRT975 = await TimeMinerHjhUZW5.setPrizeFromNewAddress.call(uintmpm4pcZ, uintK58K8eS, {from: accounts[2]});
		const uint256NhSfX7y = await TimeMinerHjhUZW5.allInfoFor.call(addressnpseNHb, {from: accounts[4]});
		const boollh42U2s = await TimeMinerHjhUZW5.isWhitelisted.call(addressuFoVtT0, {from: accounts[5]});
		const bool6OnomT = await TimeMinerHjhUZW5.transfer.call(addressLLiW47y, uintBlKf0Aa, {from: accounts[0]});

		await expect(TimeMinerHjhUZW5.allInfoFor.call(addressnpseNHb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})