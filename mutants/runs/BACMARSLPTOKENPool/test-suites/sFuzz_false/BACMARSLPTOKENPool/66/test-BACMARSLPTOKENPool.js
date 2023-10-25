const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressqj7PYu = accounts[4]
		const addressqfgeFXy = accounts[3]
		const addressYMk1R9p = accounts[5]
		const BACMARSLPTOKENPoolEnqogWR = await BACMARSLPTOKENPool.new(addressqj7PYu, addressqfgeFXy, addressYMk1R9p, {from: accounts[3]});
		const uintyoaqFg0 = BigInt("1911")
		const addressoG185yH = accounts[5]
		const addressXK6ekVD = accounts[3]
		const uintraYWYyA = BigInt("340")
		const uintNMhZ0Bi = BigInt("293")
		const uint256WllJDDk = await BACMARSLPTOKENPoolEnqogWR.stake.call(uintyoaqFg0, {from: accounts[2]});
		const uint256qWGlFpb = await BACMARSLPTOKENPoolEnqogWR.earned.call(addressoG185yH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Pv2wpLo = await BACMARSLPTOKENPoolEnqogWR.earned.call(addressXK6ekVD, {from: accounts[3]});
		const uint256s600xj6 = await BACMARSLPTOKENPoolEnqogWR.getRewardForDuration.call({from: accounts[2]});
		const uint256sPk8aiJ = await BACMARSLPTOKENPoolEnqogWR.stake.call(uintraYWYyA, {from: accounts[2]});
		const uint256piEYcGf = await BACMARSLPTOKENPoolEnqogWR.notifyRewardAmount.call(uintNMhZ0Bi, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolEnqogWR.stake.call(uintyoaqFg0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressO7zc0DF = accounts[3]
		const addressuRzD78e = accounts[0]
		const addresscltWCkm = accounts[0]
		const BACMARSLPTOKENPoolbxWAOKI = await BACMARSLPTOKENPool.new(addressO7zc0DF, addressuRzD78e, addresscltWCkm, {from: accounts[2]});
		const addressDeToJoA = accounts[0]
		const uintKzsxDDP = BigInt("619")
		const uint256iDITrNG = await BACMARSLPTOKENPoolbxWAOKI.earned.call(addressDeToJoA, {from: accounts[2]});
		await BACMARSLPTOKENPoolbxWAOKI.getReward.call({from: accounts[4]});
		const uint256mnEaixb = await BACMARSLPTOKENPoolbxWAOKI.withdraw.call(uintKzsxDDP, {from: accounts[3]});
		const stringCbPx4N = await BACMARSLPTOKENPoolbxWAOKI.symbol.call({from: accounts[1]});
		const uint256GEwkaN2 = await BACMARSLPTOKENPoolbxWAOKI.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uint256iDITrNG, BigInt("0"))
		await expect(BACMARSLPTOKENPoolbxWAOKI.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressdDUAnH = accounts[3]
		const addresswK7N0xb = accounts[3]
		const addressFaLyiPt = accounts[2]
		const BACMARSLPTOKENPoolMRY4Qq = await BACMARSLPTOKENPool.new(addressdDUAnH, addresswK7N0xb, addressFaLyiPt, {from: accounts[4]});
		const addressIGV8OOR = accounts[5]
		const addressivczMxp = "0x0000000000000000000000000000000000000001"
		const uintdSpxMaf = BigInt("762")
		const uint256TkxMEGe = await BACMARSLPTOKENPoolMRY4Qq.balanceOf.call(addressIGV8OOR, {from: accounts[5]});
		const uint256bamTK8U = await BACMARSLPTOKENPoolMRY4Qq.totalSupply.call({from: accounts[2]});
		const stringlYF1epA = await BACMARSLPTOKENPoolMRY4Qq.name.call({from: accounts[1]});
		const uint256Io7axrf = await BACMARSLPTOKENPoolMRY4Qq.balanceOf.call(addressivczMxp, {from: accounts[4]});
		const uint2566wcbg8 = await BACMARSLPTOKENPoolMRY4Qq.stake.call(uintdSpxMaf, {from: accounts[0]});
		await BACMARSLPTOKENPoolMRY4Qq.onlyRewardsDistribution.call({from: accounts[5]});

		assert.equal(uint256TkxMEGe, BigInt("0"))
		assert.equal(uint256bamTK8U, BigInt("0"))
		await expect(BACMARSLPTOKENPoolMRY4Qq.name.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressMAnckaW = accounts[5]
		const addressftULov2 = accounts[0]
		const addressFbZEpZD = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolaV781mw = await BACMARSLPTOKENPool.new(addressMAnckaW, addressftULov2, addressFbZEpZD, {from: accounts[4]});
		const uintpJFQxMs = BigInt("1586")
		const addressYNrxny = accounts[4]
		const uint256T4s1Es7 = await BACMARSLPTOKENPoolaV781mw.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPoolaV781mw.exit.call({from: accounts[5]});
		const stringGbFnS9 = await BACMARSLPTOKENPoolaV781mw.name.call({from: accounts[2]});
		const uint256GD1PrZj = await BACMARSLPTOKENPoolaV781mw.notifyRewardAmount.call(uintpJFQxMs, {from: accounts[4]});
		const uint256CyfvNLA = await BACMARSLPTOKENPoolaV781mw.balanceOf.call(addressYNrxny, {from: accounts[2]});

		assert.equal(uint256T4s1Es7, BigInt("0"))
		await expect(BACMARSLPTOKENPoolaV781mw.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMCFKbhX = "AzM3BoQhjaI6YU8Z7anNFeXMHqXrZyyacpG85hDj8zovCkeIkpL6mvPrTxUq84B5xUSzYXuktqNVAR"
		const stringKMY3PBi = "VFqwyEPYQokW"
		const uintOr2WNsm = BigInt("210")
		const BACMARSLPTOKENPoolXByQUS2 = await BACMARSLPTOKENPool.new(stringMCFKbhX, stringKMY3PBi, uintOr2WNsm, {from: accounts[2]});
		const bytetKkRo16 = "0x1e1d1b1915161118001d010a1e101f010e06051c15060b111e151f141b030507"
		const byteCIt79RL = "0x0b161b100e1e060701041219101b0a061311201915181e0a1d0b090f0e131c19"
		const uinttQoFcsl = BigInt("234")
		const uintGNZPzT1 = BigInt("394")
		const uintTEpEouJ = BigInt("1117")
		const addressVx8vjj = accounts[2]
		const addressCkxSjea = "0x0000000000000000000000000000000000000001"
		const uint256WKVVFQq = await BACMARSLPTOKENPoolXByQUS2.stakeWithPermit.call(uintTEpEouJ, uintGNZPzT1, uinttQoFcsl, byteCIt79RL, bytetKkRo16, {from: accounts[5]});
		const uint256hGZN6lV = await BACMARSLPTOKENPoolXByQUS2.balanceOf.call(addressVx8vjj, {from: accounts[0]});
		const uint256cSMiGjx = await BACMARSLPTOKENPoolXByQUS2.earned.call(addressCkxSjea, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressyQzs5sA = accounts[4]
		const addressI8taP7k = accounts[1]
		const addresslyeC6dx = accounts[0]
		const BACMARSLPTOKENPoolnhf6nbS = await BACMARSLPTOKENPool.new(addressyQzs5sA, addressI8taP7k, addresslyeC6dx, {from: accounts[3]});
		const uintG3IlRg = BigInt("346")
		const addressZ76wOog = accounts[2]
		const uintneik3om = BigInt("1832")
		const byterIj9yy = "0x03070a0b1c1a030418090e050815081208061a1504011c0a1c090e0b040d0911"
		const bytepGv5wmn = "0x181b1001081a15110a080e0111000f100a160f081b061817180a1b131e140205"
		const uintegS7hbr = BigInt("17")
		const uinthHwplVP = BigInt("8")
		const uintCLUacxm = BigInt("2042")
		const byte8W6mKD = "0x10101a0c0808141307120c17110d0b120e0315101a0a1b03120e041410141d05"
		const byteWbSWvag = "0x0b0f03160c08050b071c1703000214070b110e1b0c1b1a0d11140a0601070d0d"
		const uintsvpzRgk = BigInt("224")
		const uintSQ3FOza = BigInt("1757")
		const uintqWcB0cZ = BigInt("1313")
		const uint256QelUNJ4 = await BACMARSLPTOKENPoolnhf6nbS.notifyRewardAmount.call(uintG3IlRg, {from: accounts[4]});
		const uint256Ek9GgG3 = await BACMARSLPTOKENPoolnhf6nbS.balanceOf.call(addressZ76wOog, {from: accounts[2]});
		const uint256ajwMGJ1 = await BACMARSLPTOKENPoolnhf6nbS.withdraw.call(uintneik3om, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TRttcoI = await BACMARSLPTOKENPoolnhf6nbS.stakeWithPermit.call(uintCLUacxm, uinthHwplVP, uintegS7hbr, bytepGv5wmn, byterIj9yy, {from: accounts[1]});
		const uint256FzOREX7 = await BACMARSLPTOKENPoolnhf6nbS.stakeWithPermit.call(uintqWcB0cZ, uintSQ3FOza, uintsvpzRgk, byteWbSWvag, byte8W6mKD, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolnhf6nbS.notifyRewardAmount.call(uintG3IlRg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringk64VnoX = "tc7oQrliqgDuKrYYPTneuRFSMYXs9LK6fYKLn3PXlsD43nvWC2TXEsxgWvhqXgDdRjh2Nga49PVw9hQhCt1ycEX"
		const stringQUebzNI = "aG1cBIwckvTnwIU5PofXaMksdHrjCodwaxqzrEa7eX4QlhnNHBpNK"
		const uintGG2EtoK = BigInt("244")
		const BACMARSLPTOKENPoolnY6ph2x = await BACMARSLPTOKENPool.new(stringk64VnoX, stringQUebzNI, uintGG2EtoK, {from: accounts[0]});
		await BACMARSLPTOKENPoolnY6ph2x.nonReentrant.call({from: accounts[1]});
		const uint8UDlrKt = await BACMARSLPTOKENPoolnY6ph2x.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvhAlm2Y = "QwrJfpG61H8h3HQXiAkoO4aPSjaiSaNnzCjBThjNylNwARRWhUSqNtBfGVaHz"
		const stringEEjvBsX = "iRCX3NP3Nuj0ms7bIlewycpL0zanLbOJk34SSynOPjXBdwzjaYnM0SmKSqJiXS4wsiyAvZfmtMuTthZSWD3YkXx4w"
		const uintvdYao73 = BigInt("136")
		const BACMARSLPTOKENPoolKByljH0 = await BACMARSLPTOKENPool.new(stringvhAlm2Y, stringEEjvBsX, uintvdYao73, {from: "0x0000000000000000000000000000000000000001"});
		const uintU5LwEGv = BigInt("1660")
		const uintRDA9l35 = BigInt("718")
		const uintrnBtKuY = BigInt("1242")
		const uint256eqygrmS = await BACMARSLPTOKENPoolKByljH0.withdraw.call(uintU5LwEGv, {from: accounts[1]});
		const uint8qVUUhj1 = await BACMARSLPTOKENPoolKByljH0.decimals.call({from: accounts[1]});
		const uint256ByUCiH3 = await BACMARSLPTOKENPoolKByljH0.lastTimeRewardApplicable.call({from: accounts[5]});
		await BACMARSLPTOKENPoolKByljH0.exit.call({from: accounts[1]});
		const uint256R0SSLIx = await BACMARSLPTOKENPoolKByljH0.stake.call(uintRDA9l35, {from: accounts[3]});
		const uint256j2SEXBY = await BACMARSLPTOKENPoolKByljH0.stake.call(uintrnBtKuY, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsFX0ryS = "LXRDYu1joFo2rNtMVm11KRSmEKZlFKJYihl"
		const stringKBVsit4 = "ry2u1BXYJQecdTnm8mrYNwXrJsS1BbBgOVknqSwoyBVMBLeufLa9JBrwrYUOjzYP"
		const uintg24HhSH = BigInt("72")
		const BACMARSLPTOKENPoolqROHqwx = await BACMARSLPTOKENPool.new(stringsFX0ryS, stringKBVsit4, uintg24HhSH, {from: accounts[2]});
		const uintCsxPfaV = BigInt("1194")
		const uint256b7ePMtD = await BACMARSLPTOKENPoolqROHqwx.getRewardForDuration.call({from: accounts[3]});
		const uint256vBy71EZ = await BACMARSLPTOKENPoolqROHqwx.notifyRewardAmount.call(uintCsxPfaV, {from: accounts[5]});
		const uint256piufqaG = await BACMARSLPTOKENPoolqROHqwx.rewardPerToken.call({from: accounts[4]});
		const stringpaftMEp = await BACMARSLPTOKENPoolqROHqwx.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressHi8PJ67 = accounts[2]
		const addressOfHpQUy = accounts[0]
		const addresspo6sAIB = accounts[0]
		const BACMARSLPTOKENPoolN7CrWK = await BACMARSLPTOKENPool.new(addressHi8PJ67, addressOfHpQUy, addresspo6sAIB, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolN7CrWK.nonReentrant.call({from: accounts[3]});
		const uint256wXsSTm3 = await BACMARSLPTOKENPoolN7CrWK.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256klOLx5l = await BACMARSLPTOKENPoolN7CrWK.totalSupply.call({from: accounts[2]});
		const uint256iZ4nFIg = await BACMARSLPTOKENPoolN7CrWK.totalSupply.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEydn5eT = "fTYUP2DyfCXJnjqG2erCB2AwWKYHqaZkBx9mlzjHGOc1JR7J9W2KmwvxwM7ZzQLX2vecT3eHFlQvRQE80bKzw1kW"
		const stringDZxj9S2 = "NL6Pll3qn0UiWh6pMAK34CXLg94vZHezsmIMLUdI1Kl14JmIMoUdCwrnPBSSACDGWcyu5377lp"
		const uintfVhtLsy = BigInt("229")
		const BACMARSLPTOKENPoolLO6VMaB = await BACMARSLPTOKENPool.new(stringEydn5eT, stringDZxj9S2, uintfVhtLsy, {from: accounts[4]});
		const addressNGe7A60 = accounts[1]
		const uint8T59ohGM = await BACMARSLPTOKENPoolLO6VMaB.decimals.call({from: accounts[0]});
		await BACMARSLPTOKENPoolLO6VMaB.getReward.call({from: accounts[0]});
		const stringdq9O5Ab = await BACMARSLPTOKENPoolLO6VMaB.name.call({from: accounts[3]});
		const uint256iZGvsFw = await BACMARSLPTOKENPoolLO6VMaB.earned.call(addressNGe7A60, {from: accounts[1]});
		const uint256l0FRln4 = await BACMARSLPTOKENPoolLO6VMaB.getRewardForDuration.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringy20BgEN = "GPBOWVpd650dfqKUufynA"
		const stringhz4C7w = "0OYnrgAMCfUcV1vHD6raBaQlJUJnp0Cj2gWvo1olifM6TegWfsVeGXsG4xAQ8kYJAUA2tLI5cxW32b74L9QGmRj85IWLvKPdus"
		const uintDtQRFgd = BigInt("183")
		const BACMARSLPTOKENPoolxTtPUl9 = await BACMARSLPTOKENPool.new(stringy20BgEN, stringhz4C7w, uintDtQRFgd, {from: accounts[0]});
		const uintTwSXfp = BigInt("1367")
		const byteburFLjL = "0x1a030011020115161f01140a16161a160c0c05001805011d19061d0419081b13"
		const byteGlsJlsz = "0x17082019101c0d0413171e1b0615150e12051106131a15080f08061e0b10071e"
		const uintSX7ueSn = BigInt("161")
		const uintvaMN1j4 = BigInt("1877")
		const uintij7oAHN = BigInt("667")
		const addressJdbzHsw = accounts[0]
		await BACMARSLPTOKENPoolxTtPUl9.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256kWv5qKv = await BACMARSLPTOKENPoolxTtPUl9.notifyRewardAmount.call(uintTwSXfp, {from: accounts[0]});
		const uint256f8WZFZ = await BACMARSLPTOKENPoolxTtPUl9.stakeWithPermit.call(uintij7oAHN, uintvaMN1j4, uintSX7ueSn, byteGlsJlsz, byteburFLjL, {from: accounts[0]});
		const uint256AxVjkUx = await BACMARSLPTOKENPoolxTtPUl9.getRewardForDuration.call({from: accounts[3]});
		const uint256Vj5w4D5 = await BACMARSLPTOKENPoolxTtPUl9.earned.call(addressJdbzHsw, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressjTc3NSF = accounts[3]
		const addressHfzlcW = accounts[0]
		const addresszSMZ2WH = accounts[0]
		const BACMARSLPTOKENPoolbxWAOKI = await BACMARSLPTOKENPool.new(addressjTc3NSF, addressHfzlcW, addresszSMZ2WH, {from: accounts[2]});
		const addressCERyGCH = "0x0000000000000000000000000000000000000001"
		const uint256cZLvbja = await BACMARSLPTOKENPoolbxWAOKI.earned.call(addressCERyGCH, {from: accounts[4]});
		await BACMARSLPTOKENPoolbxWAOKI.getReward.call({from: accounts[4]});
		const uint256R9pUJp = await BACMARSLPTOKENPoolbxWAOKI.getRewardForDuration.call({from: accounts[1]});
		const stringCbPx4N = await BACMARSLPTOKENPoolbxWAOKI.symbol.call({from: accounts[1]});

		assert.equal(uint256cZLvbja, BigInt("0"))
		await expect(BACMARSLPTOKENPoolbxWAOKI.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringq82QS7z = "G7"
		const stringgjg3Mlv = "v"
		const uintP7yv3ti = BigInt("176")
		const BACMARSLPTOKENPoolBJqWEIx = await BACMARSLPTOKENPool.new(stringq82QS7z, stringgjg3Mlv, uintP7yv3ti, {from: accounts[2]});
		const addressffEVZx = accounts[0]
		const bytei2mOLJ8 = "0x1d1e11140420160100201f110a0a070118161c000b191e1b1218151209060b0c"
		const byteXnxD3c = "0x170705080a1205141b08191b001c200d1d0214090e1c190d1b0a0c0b1a1b0d0c"
		const uintTAEMmZm = BigInt("193")
		const uintrMpCFoF = BigInt("354")
		const uintJRgXuB = BigInt("2033")
		const uintQulwzjT = BigInt("1942")
		const addressQfjeSjU = accounts[1]
		const uint256ZF1WRU3 = await BACMARSLPTOKENPoolBJqWEIx.balanceOf.call(addressffEVZx, {from: accounts[2]});
		const uint256CJmGe6C = await BACMARSLPTOKENPoolBJqWEIx.stakeWithPermit.call(uintJRgXuB, uintrMpCFoF, uintTAEMmZm, byteXnxD3c, bytei2mOLJ8, {from: accounts[1]});
		const uint256lSWdVkI = await BACMARSLPTOKENPoolBJqWEIx.withdraw.call(uintQulwzjT, {from: accounts[0]});
		const uint256heIJB7b = await BACMARSLPTOKENPoolBJqWEIx.balanceOf.call(addressQfjeSjU, {from: accounts[1]});
		const stringHnSoKoF = await BACMARSLPTOKENPoolBJqWEIx.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressXywLNV6 = accounts[3]
		const address3EbyMq = accounts[0]
		const addressxPWUGF = accounts[0]
		const BACMARSLPTOKENPoolbxWAOKI = await BACMARSLPTOKENPool.new(addressXywLNV6, address3EbyMq, addressxPWUGF, {from: accounts[2]});
		const uintCRVih4V = BigInt("809")
		const uint256PGIbUPa = await BACMARSLPTOKENPoolbxWAOKI.totalSupply.call({from: accounts[1]});
		const uint2565znfrj = await BACMARSLPTOKENPoolbxWAOKI.notifyRewardAmount.call(uintCRVih4V, {from: accounts[4]});
		const uint256QQnKQ90 = await BACMARSLPTOKENPoolbxWAOKI.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolbxWAOKI.getReward.call({from: accounts[4]});

		assert.equal(uint256PGIbUPa, BigInt("0"))
		await expect(BACMARSLPTOKENPoolbxWAOKI.notifyRewardAmount.call(uintCRVih4V, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string3HkLfX = "984UV5NhIbNptehSBj72sr9tVDWDeeqwBNqJ3iWte9V9a7G25zdGSf6OflbAanogxmcxKKYmQWrdWzEjcIH"
		const stringr2htrRI = "QYBVo2os1HCXbZot61OdKu7mmo"
		const uintVYNwMHC = BigInt("40")
		const BACMARSLPTOKENPoolIFAX7hh = await BACMARSLPTOKENPool.new(string3HkLfX, stringr2htrRI, uintVYNwMHC, {from: accounts[5]});
		const uintBJeTSBo = BigInt("95")
		const uint256qb69YYM = await BACMARSLPTOKENPoolIFAX7hh.notifyRewardAmount.call(uintBJeTSBo, {from: accounts[0]});
		const uint256rvH12iv = await BACMARSLPTOKENPoolIFAX7hh.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPoolIFAX7hh.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressnR9rrz3 = accounts[3]
		const addressil5ICUM = accounts[0]
		const addressmj8lZFB = accounts[0]
		const BACMARSLPTOKENPoolbxWAOKI = await BACMARSLPTOKENPool.new(addressnR9rrz3, addressil5ICUM, addressmj8lZFB, {from: accounts[2]});
		const bytef4I9YkQ = "0x1b14180b1a0f1e1209110d0c010a0c06070517020d030703160f0f050b110207"
		const bytewrWzllH = "0x1a1b12040a151f0d0c0111151f140a110813180b080c0a0603060a171b150d18"
		const uintKdSzOLD = BigInt("14")
		const uinthHu3Yvi = BigInt("1664")
		const uintJjk2b8 = BigInt("902")
		await BACMARSLPTOKENPoolbxWAOKI.getReward.call({from: accounts[4]});
		const uint256DVIIR8d = await BACMARSLPTOKENPoolbxWAOKI.stakeWithPermit.call(uintJjk2b8, uinthHu3Yvi, uintKdSzOLD, bytewrWzllH, bytef4I9YkQ, {from: accounts[3]});

		await expect(BACMARSLPTOKENPoolbxWAOKI.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaaJavr = "6F3Gr2YfzFNH0NXp"
		const stringX1jMpqH = "A52OEWORTGnbv2fTzR4mmhRtevhEmnuhl7yeVr2SJ96adezsfsA3o383iwkQ7qQ81cFDftmMld2Ihu02lbl9yFx"
		const uintAOHNqa3 = BigInt("63")
		const BACMARSLPTOKENPoolKTD5rs = await BACMARSLPTOKENPool.new(stringaaJavr, stringX1jMpqH, uintAOHNqa3, {from: accounts[5]});
		const bytesoa3DAz = "0x020f0d1b01010e0f1e0b0c0c17140e08051d16180e041f1e1c060c0f18180803"
		const byteTFS55T4 = "0x0414020c0c16141e1b0d0c08170810061a0e0707081818180b1c0b1020051708"
		const uintMpSAx5S = BigInt("134")
		const uintH2fAU1v = BigInt("662")
		const uint1Pm4BU = BigInt("1229")
		const uint256KCQHu2C = await BACMARSLPTOKENPoolKTD5rs.stakeWithPermit.call(uint1Pm4BU, uintH2fAU1v, uintMpSAx5S, byteTFS55T4, bytesoa3DAz, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolKTD5rs.onlyRewardsDistribution.call({from: accounts[1]});
		const stringhSUCUa1 = await BACMARSLPTOKENPoolKTD5rs.symbol.call({from: accounts[4]});
		const uint8rtB78L4 = await BACMARSLPTOKENPoolKTD5rs.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwZ62TPz = "J7rBvN47mOAQqNZnqSf1df"
		const stringo5b9nPf = "XGyalptT4H57V7BamrXoaHhqXcD5YtXO3P5H3k2lh"
		const uintsdQxKRB = BigInt("94")
		const BACMARSLPTOKENPoolgEK6Vth = await BACMARSLPTOKENPool.new(stringwZ62TPz, stringo5b9nPf, uintsdQxKRB, {from: accounts[2]});
		const uinttQmO687 = BigInt("1329")
		const byteU91K7Lf = "0x03020101031e180c06081d0b0302171817120e1e0c18110305020d0c16040c1c"
		const byteJXRUBxQ = "0x16131b030515140f16180e0a1a021f071e1f101e1d1500161a1a1c17130a121c"
		const uintIdWin1z = BigInt("251")
		const uintsp8SG4o = BigInt("169")
		const uintllzzxps = BigInt("334")
		await BACMARSLPTOKENPoolgEK6Vth.exit.call({from: accounts[4]});
		const uint256B8D5RNU = await BACMARSLPTOKENPoolgEK6Vth.withdraw.call(uinttQmO687, {from: accounts[1]});
		const uint256m5fjT8v = await BACMARSLPTOKENPoolgEK6Vth.stakeWithPermit.call(uintllzzxps, uintsp8SG4o, uintIdWin1z, byteJXRUBxQ, byteU91K7Lf, {from: accounts[3]});
		const stringSFJ3djF = await BACMARSLPTOKENPoolgEK6Vth.symbol.call({from: accounts[2]});
		const uint256QdzGe4 = await BACMARSLPTOKENPoolgEK6Vth.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPoolgEK6Vth.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringV1bcxri = "fW6OOaG9dq7Fy1hMVqnsvFcdeUGO3zoxjbd9aIHOK6i3yHDvbkjvz26kjf6NKeWtt1cSbF2wTgTTI"
		const stringxpezFNK = "z9o5RhFQk1gyfinukVKylEOaa5ndi81pS"
		const uintTOR56je = BigInt("42")
		const BACMARSLPTOKENPoolpAZ4xC = await BACMARSLPTOKENPool.new(stringV1bcxri, stringxpezFNK, uintTOR56je, {from: accounts[5]});
		const addressfSC0HE2 = accounts[2]
		const addressdLujhn = accounts[4]
		const uint256zCbOqva = await BACMARSLPTOKENPoolpAZ4xC.earned.call(addressfSC0HE2, {from: accounts[2]});
		const uint256gOwRqYy = await BACMARSLPTOKENPoolpAZ4xC.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressRJKwx6m = await BACMARSLPTOKENPoolpAZ4xC.updateReward.call(addressdLujhn, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUAVUeUx = "w4lQGKei59"
		const stringtmgWA6 = "DiophpBcEk9zmIIZfW5LEEIwCqGDfFsECRkPTRyXWlJGmn2ARDAsetIMfKuKoue"
		const uintZ0hkvy5 = BigInt("85")
		const BACMARSLPTOKENPoolRJindYI = await BACMARSLPTOKENPool.new(stringUAVUeUx, stringtmgWA6, uintZ0hkvy5, {from: accounts[2]});
		const addressU7FpY0t = accounts[5]
		const addressVZfrzWK = accounts[3]
		const uint256MigfbxC = await BACMARSLPTOKENPoolRJindYI.getRewardForDuration.call({from: accounts[2]});
		const addressdfMOOFC = await BACMARSLPTOKENPoolRJindYI.updateReward.call(addressU7FpY0t, {from: accounts[2]});
		const uint256xxsEE9W = await BACMARSLPTOKENPoolRJindYI.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256A8uaz2J = await BACMARSLPTOKENPoolRJindYI.totalSupply.call({from: accounts[2]});
		const uint256prqI0wF = await BACMARSLPTOKENPoolRJindYI.earned.call(addressVZfrzWK, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtpNbCYq = "JCg3Ycb3AsHGFOEzUyxd2F1zrfNcAx9"
		const stringKdpy6Pt = "3oVFVMxOE7HmH6s9uEsj3"
		const uintTsRueJw = BigInt("235")
		const BACMARSLPTOKENPoolIrLSjp7 = await BACMARSLPTOKENPool.new(stringtpNbCYq, stringKdpy6Pt, uintTsRueJw, {from: accounts[0]});
		const addressf9lgGJh = accounts[1]
		await BACMARSLPTOKENPoolIrLSjp7.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolIrLSjp7.onlyRewardsDistribution.call({from: accounts[3]});
		const address4Nycr7 = await BACMARSLPTOKENPoolIrLSjp7.updateReward.call(addressf9lgGJh, {from: accounts[0]});
		const uint256RIuAsZO = await BACMARSLPTOKENPoolIrLSjp7.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringllqU8Oy = "TvnLhc2bnN32L1iwpI334sABVD3dMQ87Os3GOgMNjg86AzAL5d7sFydb3Imofgo8BroayDqLckgkUuxKAEFUPlj2zp13U"
		const stringBvplfV = "5DqGsImnxim23h6uEOIvoPsxLyKBJjWeSbjz2Oya8bHPk0f3RGvHeeXopconuvm821Is3"
		const uintdCJOT8y = BigInt("223")
		const BACMARSLPTOKENPoolx8vcDNj = await BACMARSLPTOKENPool.new(stringllqU8Oy, stringBvplfV, uintdCJOT8y, {from: accounts[3]});
		const byteL6R96C8 = "0x19111c0a1f1a160f20171c1c030a160c0d0b081e18041a140a0f1c0b061a0e11"
		const byteiUMs5Ky = "0x011e05200918060d091316041b0309001c0d0d0b041316091a1f1b1610111f10"
		const uint4l4M69 = BigInt("159")
		const uintW1bVEzi = BigInt("1104")
		const uintjwetc3l = BigInt("1135")
		const uintyvGfZ8A = BigInt("1392")
		await BACMARSLPTOKENPoolx8vcDNj.exit.call({from: accounts[0]});
		const uint256pg49Vhe = await BACMARSLPTOKENPoolx8vcDNj.stakeWithPermit.call(uintjwetc3l, uintW1bVEzi, uint4l4M69, byteiUMs5Ky, byteL6R96C8, {from: accounts[4]});
		const uint256AzUiREq = await BACMARSLPTOKENPoolx8vcDNj.totalSupply.call({from: accounts[0]});
		const uint256QBzkEYK = await BACMARSLPTOKENPoolx8vcDNj.notifyRewardAmount.call(uintyvGfZ8A, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHvY2iKf = "iGJybwmTqJPEWackocMvvUaK4viX6T37MC9Fcm8BNJjo7tnsP9u"
		const stringeS17Hpx = "zQMCzDHQlZP3U14iUVEQ3YGowG55tA358NIGZVrcuLLwYvH7"
		const uintasXnFBa = BigInt("17")
		const BACMARSLPTOKENPoolme5N06N = await BACMARSLPTOKENPool.new(stringHvY2iKf, stringeS17Hpx, uintasXnFBa, {from: accounts[2]});
		await BACMARSLPTOKENPoolme5N06N.exit.call({from: accounts[0]});
		await BACMARSLPTOKENPoolme5N06N.nonReentrant.call({from: accounts[3]});
		const uint256gRNILFy = await BACMARSLPTOKENPoolme5N06N.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolme5N06N.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringACGNwZn = "T9LAQAlIovbzI"
		const stringtSqVgpP = "ebbnbNreFNoKaxdVJ9Ylt0ZEpq1wFHkkEfHY1IYwFFGqIMlJa9D9sJJan4fpQnmlLBJDjn3hIQC3itlyFQ4u9i3rHdMiaOXr"
		const uintmEJzN13 = BigInt("136")
		const BACMARSLPTOKENPooljg23MkM = await BACMARSLPTOKENPool.new(stringACGNwZn, stringtSqVgpP, uintmEJzN13, {from: accounts[2]});
		const addressxMQx3W8 = "0x0000000000000000000000000000000000000001"
		const uintKxzOI08 = BigInt("1417")
		await BACMARSLPTOKENPooljg23MkM.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256GnvYV7b = await BACMARSLPTOKENPooljg23MkM.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256afHwPJS = await BACMARSLPTOKENPooljg23MkM.earned.call(addressxMQx3W8, {from: accounts[2]});
		const stringidDQ4zY = await BACMARSLPTOKENPooljg23MkM.symbol.call({from: accounts[2]});
		const uint256gWt56T7 = await BACMARSLPTOKENPooljg23MkM.withdraw.call(uintKxzOI08, {from: accounts[3]});
		await BACMARSLPTOKENPooljg23MkM.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringO41VFxW = "wsqkVVmkMdFAFAK73VVJ0btppCWaKYuymTE5mKjLV2tyu2k8HTDgZSe8tnYm3VsuLtpHGOL7"
		const stringMbZYlXM = "RTsaIhzMUyfVOHWHIchZz5dq5qUGvdJh5VHiywcNE6raL1ROFyW"
		const uintEkhtNCn = BigInt("162")
		const BACMARSLPTOKENPoolkeO8II1 = await BACMARSLPTOKENPool.new(stringO41VFxW, stringMbZYlXM, uintEkhtNCn, {from: accounts[1]});
		const uint256i2a8s1Y = await BACMARSLPTOKENPoolkeO8II1.rewardPerToken.call({from: accounts[3]});
		const uint256rRwsINf = await BACMARSLPTOKENPoolkeO8II1.getRewardForDuration.call({from: accounts[0]});
		const uint8QqhgUOt = await BACMARSLPTOKENPoolkeO8II1.decimals.call({from: accounts[2]});
		const uint256vl8fo6n = await BACMARSLPTOKENPoolkeO8II1.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvRP4mZ = "ukMU0USrNbWuVcO2jnj2LWufPef8ftxTxV3VFcarb9KUfsmeJ8VtP3JVhBA0acIRx1udq3zMpqWS3UcnQ"
		const stringmpAnPEL = "tw"
		const uintQTF46Zl = BigInt("227")
		const BACMARSLPTOKENPoolsCOIIxA = await BACMARSLPTOKENPool.new(stringvRP4mZ, stringmpAnPEL, uintQTF46Zl, {from: "0x0000000000000000000000000000000000000001"});
		const addressiYjkUEY = accounts[5]
		const uint256DDBkHl = await BACMARSLPTOKENPoolsCOIIxA.balanceOf.call(addressiYjkUEY, {from: accounts[2]});
		const uint256MuHElFD = await BACMARSLPTOKENPoolsCOIIxA.lastTimeRewardApplicable.call({from: accounts[0]});
		const stringMayMK47 = await BACMARSLPTOKENPoolsCOIIxA.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringcuU4PLn = await BACMARSLPTOKENPoolsCOIIxA.name.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string62C9Bs = "i9fjOSP7FgLhwwVmEUa21AiAusOMPo221FmiFfsYqjz"
		const stringmoW7e9d = "3J5n4lTWvBq2rVEVNWyc1RoexBrFhX36lMBbpVPlH7BCfdxz5FaRg2lgtg1Dqy24Eu39Tutw2KThlfEab"
		const uintM36JJf9 = BigInt("165")
		const BACMARSLPTOKENPoolbkkL03U = await BACMARSLPTOKENPool.new(string62C9Bs, stringmoW7e9d, uintM36JJf9, {from: accounts[3]});
		const uintaVRHaAf = BigInt("1537")
		const addresssrqzo21 = accounts[2]
		const addresskFEfySL = accounts[3]
		const uint256QiUx46W = await BACMARSLPTOKENPoolbkkL03U.stake.call(uintaVRHaAf, {from: accounts[0]});
		await BACMARSLPTOKENPoolbkkL03U.nonReentrant.call({from: accounts[3]});
		await BACMARSLPTOKENPoolbkkL03U.getReward.call({from: accounts[0]});
		const uint256wlaTYlw = await BACMARSLPTOKENPoolbkkL03U.balanceOf.call(addresssrqzo21, {from: accounts[5]});
		const uint256XeSEQK = await BACMARSLPTOKENPoolbkkL03U.earned.call(addresskFEfySL, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string7c4Nl2 = "95iCF2XNb0EjdHkn2DaXpxkawimtZTYI"
		const stringzEORP3k = "hK4eeKics90HxmMJgHFoLfaJSGG6jC"
		const uintdFJFKlC = BigInt("116")
		const BACMARSLPTOKENPoolkENYDo0 = await BACMARSLPTOKENPool.new(string7c4Nl2, stringzEORP3k, uintdFJFKlC, {from: accounts[3]});
		const addressGcSGyJ = accounts[2]
		const uint256RuX8D7I = await BACMARSLPTOKENPoolkENYDo0.getRewardForDuration.call({from: accounts[3]});
		await BACMARSLPTOKENPoolkENYDo0.nonReentrant.call({from: accounts[5]});
		const uint256f5WYe8t = await BACMARSLPTOKENPoolkENYDo0.rewardPerToken.call({from: accounts[4]});
		const uint256FyZSvYE = await BACMARSLPTOKENPoolkENYDo0.earned.call(addressGcSGyJ, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringx3WVWv = "9BNAa6B8yecti"
		const stringw9UXVkW = "dOeqmeMdO2XAdummpYu6bB6voG8Z2MtKfiWbgMIXaYKCy8OfA6L4IxSPN0iqmbjRf"
		const uintwupA4t = BigInt("135")
		const BACMARSLPTOKENPool4kPlSP = await BACMARSLPTOKENPool.new(stringx3WVWv, stringw9UXVkW, uintwupA4t, {from: accounts[5]});
		const uint256occSXrd = await BACMARSLPTOKENPool4kPlSP.getRewardForDuration.call({from: accounts[0]});
		const uint2561FyfjD = await BACMARSLPTOKENPool4kPlSP.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCm4FYlu = "wXsPc8piyG6DwpXWluvooPJZSGMFAZNEAUzlt5EE7hrUQzNXUtQvGdlsb"
		const stringuulz58T = "K4yRfu1GfORSdVKI8Sfu19U6OOCyp5OkJmw5n9AWJ1oGUvkRtXhKtHjl9yWkds3Y7m"
		const uintBsU4TSd = BigInt("106")
		const BACMARSLPTOKENPoolK8Q5nKf = await BACMARSLPTOKENPool.new(stringCm4FYlu, stringuulz58T, uintBsU4TSd, {from: accounts[5]});
		const uint8S8qZy2I = await BACMARSLPTOKENPoolK8Q5nKf.decimals.call({from: accounts[3]});
		const stringidQIZEE = await BACMARSLPTOKENPoolK8Q5nKf.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUzSTQFl = "sWEDZ7nhRzKyRm7Ctu4AH35J539QVPamsc7E8niStFdIirWwkJfgCohBkJrobVm5uEigDRaUYKlyKifRQlJPgazUso"
		const stringS2XgmQB = "M5qy5powoT25xZm0HgUf29X7ivkVfcYtYWIzWpRqPW3L4E"
		const uintdTc9jZj = BigInt("245")
		const BACMARSLPTOKENPoolTkXYTmb = await BACMARSLPTOKENPool.new(stringUzSTQFl, stringS2XgmQB, uintdTc9jZj, {from: accounts[1]});
		const uintt035Nv = BigInt("514")
		const uint256NDt1XAn = await BACMARSLPTOKENPoolTkXYTmb.totalSupply.call({from: accounts[0]});
		const uint256BUMQNTE = await BACMARSLPTOKENPoolTkXYTmb.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint8uOp1i9K = await BACMARSLPTOKENPoolTkXYTmb.decimals.call({from: accounts[4]});
		const uint256Q9XNkJ9 = await BACMARSLPTOKENPoolTkXYTmb.withdraw.call(uintt035Nv, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmvv6t6 = "4Q3FtCTDlAqWDMqn9mgcn55BKmw5GH8Dgeelc7YasB"
		const stringD9cerqI = "uZlDEzW2DrsbCu4BlG"
		const uintvE4xYtG = BigInt("33")
		const BACMARSLPTOKENPoolEhUZFfP = await BACMARSLPTOKENPool.new(stringmvv6t6, stringD9cerqI, uintvE4xYtG, {from: accounts[2]});
		const uinthwTxuZy = BigInt("641")
		const uintquMpcAg = BigInt("1619")
		const uint256TvYOv5A = await BACMARSLPTOKENPoolEhUZFfP.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256MDXgr8 = await BACMARSLPTOKENPoolEhUZFfP.withdraw.call(uinthwTxuZy, {from: accounts[5]});
		await BACMARSLPTOKENPoolEhUZFfP.getReward.call({from: accounts[5]});
		await BACMARSLPTOKENPoolEhUZFfP.exit.call({from: accounts[4]});
		const uint256ASd0C1L = await BACMARSLPTOKENPoolEhUZFfP.notifyRewardAmount.call(uintquMpcAg, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolEhUZFfP.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringp5cx3TL = "gDvgT6trVdtFGLtLlpUjTKyJKNPkbGugydYpUtjCnEsQG1nl8s6GtSpiHdsrwf7cXmNL2g6FFhlvXFGaccgSLXcySjh"
		const stringA4yXpiC = "UHd59xQxzN0p3L4UpqJtmtNig1kda2bEonBdmgCG8wckS193"
		const uinto0rM46u = BigInt("40")
		const BACMARSLPTOKENPoolAKJU43Q = await BACMARSLPTOKENPool.new(stringp5cx3TL, stringA4yXpiC, uinto0rM46u, {from: accounts[2]});
		const uintacM7lCs = BigInt("169")
		const byteSuU0xl5 = "0x16061a140713150d10061008081e1215190a17141e0f060414051d201c111805"
		const byteTwsPx3T = "0x1e0e1208051f050316100e0b1d1e17180b0b0b0d170c1c11161503100e1d0905"
		const uinta2EAqEh = BigInt("196")
		const uintz26qtEV = BigInt("985")
		const uintVJQP02Q = BigInt("586")
		await BACMARSLPTOKENPoolAKJU43Q.exit.call({from: accounts[4]});
		const stringD2c0w0h = await BACMARSLPTOKENPoolAKJU43Q.symbol.call({from: accounts[3]});
		const uint256D9g9XYV = await BACMARSLPTOKENPoolAKJU43Q.stake.call(uintacM7lCs, {from: accounts[1]});
		const uint256v0S1SN1 = await BACMARSLPTOKENPoolAKJU43Q.stakeWithPermit.call(uintVJQP02Q, uintz26qtEV, uinta2EAqEh, byteTwsPx3T, byteSuU0xl5, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfEoWEG = "59gaRnVl2MXtgEYSGwr3NXcyas5x3gwYSHVxpfHEmKvK1fgPVGfsLH755RhTwYOBGgpGngzxmk"
		const stringFx1CSfi = "cAZjulQwAkCS7Wo2WYjXd3P8LhylnA2"
		const uintl1LimJN = BigInt("57")
		const BACMARSLPTOKENPoolUFfyY0k = await BACMARSLPTOKENPool.new(stringfEoWEG, stringFx1CSfi, uintl1LimJN, {from: accounts[3]});
		const addressCOLL0Kx = accounts[4]
		const uint256vZhKb7z = await BACMARSLPTOKENPoolUFfyY0k.earned.call(addressCOLL0Kx, {from: accounts[3]});
		await BACMARSLPTOKENPoolUFfyY0k.exit.call({from: accounts[4]});
		await BACMARSLPTOKENPoolUFfyY0k.getReward.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNKpfvu = "VBsYrXBE6hhcOuk7WXBi95c9RGsV8htXgjWjM7XRCol47Tc9g4blhSr8qNrSqjo2GWMNsxnvEhGWtTBO2XX9ix3ks6DEkQpaR"
		const stringzn1lSLH = "H3f2XtTJ3sMHk3mUNbUGahXrL5Shee987h"
		const uintZrj4Uax = BigInt("212")
		const BACMARSLPTOKENPoolAHLPfy = await BACMARSLPTOKENPool.new(stringNKpfvu, stringzn1lSLH, uintZrj4Uax, {from: accounts[5]});
		const uintrmPajge = BigInt("1020")
		const uintHE5BHMF = BigInt("1504")
		const addressFp45UCe = "0x0000000000000000000000000000000000000001"
		const addresshQ2vSp = accounts[4]
		const uint256zGl6ANm = await BACMARSLPTOKENPoolAHLPfy.withdraw.call(uintrmPajge, {from: accounts[0]});
		const uint256i4AjInB = await BACMARSLPTOKENPoolAHLPfy.stake.call(uintHE5BHMF, {from: accounts[5]});
		await BACMARSLPTOKENPoolAHLPfy.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256gWUkQRL = await BACMARSLPTOKENPoolAHLPfy.earned.call(addressFp45UCe, {from: accounts[0]});
		const uint256IatrAg9 = await BACMARSLPTOKENPoolAHLPfy.totalSupply.call({from: accounts[2]});
		const addressLUmQkXf = await BACMARSLPTOKENPoolAHLPfy.updateReward.call(addresshQ2vSp, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringk55SEsW = "Clf8pwy5ERh2VIc0sopBAczcMwG7xnkV6aG3PjYrFRGimlbj7rR"
		const stringwOnMxbm = "SotXmGMIZWiwGVNAkaF4gOm781VCs4UE7gEzYXzctO21HbanBBA3Fw83"
		const uint2N6CRI = BigInt("204")
		const BACMARSLPTOKENPoolIv92261 = await BACMARSLPTOKENPool.new(stringk55SEsW, stringwOnMxbm, uint2N6CRI, {from: accounts[3]});
		const byteFXfZJrq = "0x0208191e0a1c0e0b1e0f1f1a0116190d1b0b160b1b19011e1e03171c040a1609"
		const byteNfSvDKj = "0x0a12141f1e0a13111d1611130e1e1a0f0a071611061f0b1d03190a0610010411"
		const uintg9Fzfx = BigInt("243")
		const uintQWFEq4n = BigInt("155")
		const uintZJFvRhr = BigInt("336")
		await BACMARSLPTOKENPoolIv92261.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8C5xZHC7 = await BACMARSLPTOKENPoolIv92261.decimals.call({from: accounts[2]});
		await BACMARSLPTOKENPoolIv92261.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256gRlxBdS = await BACMARSLPTOKENPoolIv92261.stakeWithPermit.call(uintZJFvRhr, uintQWFEq4n, uintg9Fzfx, byteNfSvDKj, byteFXfZJrq, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsMOJlAM = "SuDICxBl8YnMlsQ452Tr6jjLksCva8dJ9Cf6q6IkRT76q4WmPOuZH9AJabhYqn7IBpfNOfjpHySOu"
		const stringfeY2pMn = "zFnFP0WKbNftgqDTDM5RdYq1vyzA824e8hmGUSuUrAR065fxlZNONjq88ixMsP"
		const uintkwwbyY = BigInt("195")
		const BACMARSLPTOKENPooluDS9Eb0 = await BACMARSLPTOKENPool.new(stringsMOJlAM, stringfeY2pMn, uintkwwbyY, {from: accounts[1]});
		const uintrge8fm6 = BigInt("1382")
		const uintc7KgD0a = BigInt("1334")
		const uint256cvGa9V = await BACMARSLPTOKENPooluDS9Eb0.rewardPerToken.call({from: accounts[4]});
		const stringqssbNAF = await BACMARSLPTOKENPooluDS9Eb0.name.call({from: accounts[3]});
		await BACMARSLPTOKENPooluDS9Eb0.getReward.call({from: accounts[0]});
		const uint256sfgRdyS = await BACMARSLPTOKENPooluDS9Eb0.notifyRewardAmount.call(uintrge8fm6, {from: accounts[3]});
		const uint256XLHqqvc = await BACMARSLPTOKENPooluDS9Eb0.notifyRewardAmount.call(uintc7KgD0a, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIobM1t0 = "TMEPhJ4LPXefNwOlapb7dlYYPatw2BT9NY8ynkyePP"
		const stringUa8kfxx = "8LVnS"
		const uintHBvGSbJ = BigInt("9")
		const BACMARSLPTOKENPoolwB0SHJk = await BACMARSLPTOKENPool.new(stringIobM1t0, stringUa8kfxx, uintHBvGSbJ, {from: accounts[5]});
		const bytePE3nOSn = "0x0f0f141d1902180716010e06030e0c0d08070c0e0c09020f111d2005201f1701"
		const bytesUrdcvf = "0x040616040009150214090e0e190615020603050a1d1c110604061f1e0c1d1800"
		const uintbZwtP0Y = BigInt("61")
		const uintntx53RE = BigInt("1078")
		const uintwPBlXUn = BigInt("1343")
		const addressjAwK8Ze = accounts[2]
		const byteFSk2I2Z = "0x121a1d0f151a0115110f1b0f1016180d1e0b140c15070e0715160c1f11120b1a"
		const byteOppfv1 = "0x1d1b14161a06100a1419190b0f161f09071e1a1118081917110a100a1808071c"
		const uintkRlXVk7 = BigInt("229")
		const uintUXweaHa = BigInt("893")
		const uintpAuMVtK = BigInt("764")
		const uint256wMFO4Df = await BACMARSLPTOKENPoolwB0SHJk.stakeWithPermit.call(uintwPBlXUn, uintntx53RE, uintbZwtP0Y, bytesUrdcvf, bytePE3nOSn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256J6Vv8LZ = await BACMARSLPTOKENPoolwB0SHJk.earned.call(addressjAwK8Ze, {from: accounts[4]});
		await BACMARSLPTOKENPoolwB0SHJk.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256HKls7CB = await BACMARSLPTOKENPoolwB0SHJk.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256ZrIhwQq = await BACMARSLPTOKENPoolwB0SHJk.stakeWithPermit.call(uintpAuMVtK, uintUXweaHa, uintkRlXVk7, byteOppfv1, byteFSk2I2Z, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsAc2zm = "wigOlHWU"
		const stringS4RkPtR = "diZaE"
		const uintc70tjuS = BigInt("67")
		const BACMARSLPTOKENPoolM0lTlfK = await BACMARSLPTOKENPool.new(stringsAc2zm, stringS4RkPtR, uintc70tjuS, {from: accounts[3]});
		const addressEUywzHk = accounts[0]
		const stringDksXat = await BACMARSLPTOKENPoolM0lTlfK.symbol.call({from: accounts[2]});
		const uint256QbI3R6C = await BACMARSLPTOKENPoolM0lTlfK.earned.call(addressEUywzHk, {from: accounts[1]});
		const uint256e9oyo4 = await BACMARSLPTOKENPoolM0lTlfK.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringG9r31r = "i1F5I1LFugOT9GGrE6Q45teBlUE352qhMW8gakhjUyFLJAlPHfzBaHH7W3kxpcbOEPdZKrmqG4EpIlLMurDlM86RooQ4KW"
		const stringEMAeHvm = "tdzjsDQJ4eJyaLKwixm9HF1VOy6EuZpjuK1W77g2g"
		const uintLu8pAPw = BigInt("132")
		const BACMARSLPTOKENPool5XBVAg = await BACMARSLPTOKENPool.new(stringG9r31r, stringEMAeHvm, uintLu8pAPw, {from: accounts[5]});
		const uintSZeXptw = BigInt("944")
		const addressPCfeq5k = accounts[4]
		const uint256RynTt02 = await BACMARSLPTOKENPool5XBVAg.withdraw.call(uintSZeXptw, {from: accounts[3]});
		const uint256YoMPj7L = await BACMARSLPTOKENPool5XBVAg.earned.call(addressPCfeq5k, {from: accounts[1]});
		const uint256TXPIUv = await BACMARSLPTOKENPool5XBVAg.totalSupply.call({from: accounts[3]});
		const uint256wkt7sDE = await BACMARSLPTOKENPool5XBVAg.totalSupply.call({from: accounts[0]});
		const uint86KX0yS = await BACMARSLPTOKENPool5XBVAg.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringz9RsMCW = "ByFUbMZDw3NQihK4Ex116Q0KpsTH6JMPG19w9jqyq3TSuPXmfWWWEDATPPQpevrM1emSxErrHoY"
		const stringotfYQz0 = "YjeMOoKizjxYIb1OXch5xEJpzztCQRtV2ckjzoBs6f0xkoStgXzj9iw"
		const uintJlLghAM = BigInt("188")
		const BACMARSLPTOKENPoolAAxSNHH = await BACMARSLPTOKENPool.new(stringz9RsMCW, stringotfYQz0, uintJlLghAM, {from: accounts[4]});
		const uint2569qmHSJ = await BACMARSLPTOKENPoolAAxSNHH.getRewardForDuration.call({from: accounts[2]});
		const uint256Lt8tuXC = await BACMARSLPTOKENPoolAAxSNHH.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAepxl4 = "Gdi1W5MtSAkb2SmbljfH2iMukktrYI6yDOraQhW2UrqJRebxfMLFCYbsBJ7T7e6hFhsMSupJ"
		const stringghTvCO1 = "kNNbhHU3cQqtyKLhxjZugAukT7C7oq0KSLtXSB3seTAjmfqBis57BT"
		const uintg8Yhiz4 = BigInt("159")
		const BACMARSLPTOKENPooliHo2E8Z = await BACMARSLPTOKENPool.new(stringAepxl4, stringghTvCO1, uintg8Yhiz4, {from: accounts[2]});
		const byteMl4rcoB = "0x151e040e121508180c1904031a0f1b07191217160b1a1d0c111c05151c1b031e"
		const byteMOfAhsM = "0x1d1a080c111f011117091405011f051d05180f1c0d0812110d14120e09140612"
		const uintwuYrEmR = BigInt("89")
		const uintXFBerpv = BigInt("1561")
		const uintT3biJps = BigInt("574")
		await BACMARSLPTOKENPooliHo2E8Z.getReward.call({from: accounts[0]});
		const uint256OCdJkd6 = await BACMARSLPTOKENPooliHo2E8Z.stakeWithPermit.call(uintT3biJps, uintXFBerpv, uintwuYrEmR, byteMOfAhsM, byteMl4rcoB, {from: accounts[5]});
		const uint256yBcXkzH = await BACMARSLPTOKENPooliHo2E8Z.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvFjC3k = "czYCADNLDI1yBxtOzivZc66FP0HQQuMnjwqW51M7AOQb9ibwNWOkqlDQSw4NMGG"
		const stringhssXTNg = "Xa8UxHvit8Fi47JGpgLglnrTBDkdtG6DyFWZdwlmiuT5YzIsoslygxLUZ2J6gVYTCNaORD"
		const uintRpkN5MP = BigInt("192")
		const BACMARSLPTOKENPoollfcyTwY = await BACMARSLPTOKENPool.new(stringvFjC3k, stringhssXTNg, uintRpkN5MP, {from: accounts[1]});
		const addressbaSUmQb = accounts[1]
		const uintgA57Oiy = BigInt("1454")
		const uintBFm3e6j = BigInt("254")
		const addressPf2fjf1 = await BACMARSLPTOKENPoollfcyTwY.updateReward.call(addressbaSUmQb, {from: accounts[2]});
		await BACMARSLPTOKENPoollfcyTwY.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256q0XUqdP = await BACMARSLPTOKENPoollfcyTwY.stake.call(uintgA57Oiy, {from: accounts[5]});
		const uint256HG0ZGFg = await BACMARSLPTOKENPoollfcyTwY.getRewardForDuration.call({from: accounts[1]});
		const uint256GYna0km = await BACMARSLPTOKENPoollfcyTwY.getRewardForDuration.call({from: accounts[3]});
		const uint256Ok5eVuj = await BACMARSLPTOKENPoollfcyTwY.notifyRewardAmount.call(uintBFm3e6j, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQavba9o = "q6unbjlWBshLE1kNVNqHP5qRdWMYB3e75K6tzbn5G2L5PfpAN5eC0WcQRHAhWQU1RKhV8bFKwmvNQjo"
		const stringg0BtlNE = "LJBSUMhPpWuykkDCnr"
		const uintwu1UtCv = BigInt("95")
		const BACMARSLPTOKENPooluJ1N3cZ = await BACMARSLPTOKENPool.new(stringQavba9o, stringg0BtlNE, uintwu1UtCv, {from: accounts[0]});
		const addressEDD49dq = accounts[2]
		const addressGAGoe9N = accounts[4]
		const bytemwx7Tm = "0x050b0b0d100e1b0f1b1a1b1d0f1019151c0e191916091018120c18141e14091e"
		const byteDGD2tuL = "0x0409081e0c04151e0308051d050006120f070813170708031b160a1d01100d12"
		const uintVoPIwHH = BigInt("47")
		const uintLhvSSF = BigInt("522")
		const uintTnUcbq0 = BigInt("67")
		const byteWw4b1U = "0x190703161e13090b060f10051918070a021318021f1112061501131d0d1c1a1a"
		const byteKmSnr81 = "0x0f0913091c0d061f0a0b1b09180c161b0f0c0f030a0d0619131d0b020211001d"
		const uintz9rYiM9 = BigInt("115")
		const uintDa1Qenk = BigInt("132")
		const uintEGBhbuc = BigInt("984")
		const uint256xaKkgX7 = await BACMARSLPTOKENPooluJ1N3cZ.totalSupply.call({from: accounts[0]});
		const addressTHnyp5P = await BACMARSLPTOKENPooluJ1N3cZ.updateReward.call(addressEDD49dq, {from: accounts[4]});
		const uint256rdReNbh = await BACMARSLPTOKENPooluJ1N3cZ.balanceOf.call(addressGAGoe9N, {from: accounts[3]});
		const uint256ep0O1Ia = await BACMARSLPTOKENPooluJ1N3cZ.stakeWithPermit.call(uintTnUcbq0, uintLhvSSF, uintVoPIwHH, byteDGD2tuL, bytemwx7Tm, {from: accounts[2]});
		const uint256ehzqVhC = await BACMARSLPTOKENPooluJ1N3cZ.stakeWithPermit.call(uintEGBhbuc, uintDa1Qenk, uintz9rYiM9, byteKmSnr81, byteWw4b1U, {from: accounts[5]});
		const uint256uvMJtq = await BACMARSLPTOKENPooluJ1N3cZ.getRewardForDuration.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFin7iQz = "zJBQYjdv7f11GeidILU7aFVpT35T8sCZ"
		const stringM1U6j31 = "jiq9TWAuO4Xv"
		const uintGXgbf4t = BigInt("71")
		const BACMARSLPTOKENPoolW6RKref = await BACMARSLPTOKENPool.new(stringFin7iQz, stringM1U6j31, uintGXgbf4t, {from: accounts[5]});
		const uintN32N7IS = BigInt("315")
		const uintn8u8Zh = BigInt("1201")
		const uintOQU4fdP = BigInt("1837")
		const uintWLHYEO = BigInt("794")
		const addressiFtozpt = "0x0000000000000000000000000000000000000001"
		const uint256aOcAc6O = await BACMARSLPTOKENPoolW6RKref.withdraw.call(uintN32N7IS, {from: accounts[3]});
		const uint256W3z0uxJ = await BACMARSLPTOKENPoolW6RKref.stake.call(uintn8u8Zh, {from: accounts[3]});
		const uint256wgAhYoW = await BACMARSLPTOKENPoolW6RKref.stake.call(uintOQU4fdP, {from: accounts[1]});
		const uint256PUpEVB = await BACMARSLPTOKENPoolW6RKref.stake.call(uintWLHYEO, {from: accounts[1]});
		const uint2568zrSe8 = await BACMARSLPTOKENPoolW6RKref.earned.call(addressiFtozpt, {from: accounts[0]});
		await BACMARSLPTOKENPoolW6RKref.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQV8QjJt = "uBvGOxHimeE2WIDgCmMIWkKz7Bbyg9x7v"
		const stringP9tDrC = "vGmmMr8dIjVlbgcbeo28FcyHGgIODunu3LLPfv4eYDmpiTeX9ag3wXJuOg0AoIfmjSNQ"
		const uintdSFmsaB = BigInt("225")
		const BACMARSLPTOKENPoolqj04Avc = await BACMARSLPTOKENPool.new(stringQV8QjJt, stringP9tDrC, uintdSFmsaB, {from: accounts[3]});
		const byteHJBs2Q = "0x0e071d1406060120071017170d111012020e061b1306021b1c04141d0b20081d"
		const byteQQ3bvT6 = "0x0b190d16170a1a1f131619030e090a0d0d041a1f1a2007011f1c11051b011c05"
		const uintp95TSdD = BigInt("187")
		const uintz6vhpq5 = BigInt("790")
		const uintj9ArZKi = BigInt("263")
		const uintX97yqDD = BigInt("745")
		const uint256jJQrsKD = await BACMARSLPTOKENPoolqj04Avc.stakeWithPermit.call(uintj9ArZKi, uintz6vhpq5, uintp95TSdD, byteQQ3bvT6, byteHJBs2Q, {from: accounts[4]});
		await BACMARSLPTOKENPoolqj04Avc.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256aQ1QxwF = await BACMARSLPTOKENPoolqj04Avc.withdraw.call(uintX97yqDD, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjZQ7lke = "38qMWxrLAcS6NuUPnBA7NPYUvKxeWNh1Zme5Ve66PzvTAvrziybXQxrTEAbqX77QJP0aNwDaa0oQzsHsMrHRVcH9hTOfKnEsrE"
		const stringZmgBq4x = "hNreDRY3A4RplFWkS"
		const uintbXRWELt = BigInt("92")
		const BACMARSLPTOKENPoolh5D0XtX = await BACMARSLPTOKENPool.new(stringjZQ7lke, stringZmgBq4x, uintbXRWELt, {from: accounts[5]});
		const stringwjHf2OX = await BACMARSLPTOKENPoolh5D0XtX.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringDBhV5Nn = await BACMARSLPTOKENPoolh5D0XtX.name.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringohf1iw = "jLt76CAjvUxHVB8x2rFLOflIDOjjLRGLymxfMASfd9PPPVQmyt3gxUG7H5hVXjc3xprmL"
		const stringwLEEP8I = "rWCyVqmccmgbRb9HNTeebMg0oHnj4Dq44WhZsofVGBWyrllH6yacJbSiGhTMfy4MCfD"
		const uintfdmdYz1 = BigInt("237")
		const BACMARSLPTOKENPoolIYuKVEF = await BACMARSLPTOKENPool.new(stringohf1iw, stringwLEEP8I, uintfdmdYz1, {from: accounts[1]});
		const addresstrbgQyA = accounts[4]
		const byteqM8EAhT = "0x200f09171a0e1a1f0d040a130b011101130c01061d0f0315081b03091c0f1608"
		const byteMfsElEI = "0x091306131e1f121b1a021c081f09020720170d11060b1e031a170b151d1f1017"
		const uintNHiFuCE = BigInt("106")
		const uintXPzUg7P = BigInt("470")
		const uinte9iGYvE = BigInt("1754")
		await BACMARSLPTOKENPoolIYuKVEF.onlyRewardsDistribution.call({from: accounts[3]});
		await BACMARSLPTOKENPoolIYuKVEF.nonReentrant.call({from: accounts[3]});
		const uint256n7oZqW = await BACMARSLPTOKENPoolIYuKVEF.balanceOf.call(addresstrbgQyA, {from: accounts[2]});
		const uint256ajehml = await BACMARSLPTOKENPoolIYuKVEF.stakeWithPermit.call(uinte9iGYvE, uintXPzUg7P, uintNHiFuCE, byteMfsElEI, byteqM8EAhT, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPGCPS0y = "3muza9QUCHjZ8C8MVDdUoKxii4qEfZxhQeWOJaBUNR2bWGrYWwcj8wl8nwOh2xdiG0Gy21fE2m"
		const stringyvUjyZJ = "157DTy7u9y502Q7"
		const uintFMjnNRG = BigInt("236")
		const BACMARSLPTOKENPoolowRNOp9 = await BACMARSLPTOKENPool.new(stringPGCPS0y, stringyvUjyZJ, uintFMjnNRG, {from: accounts[5]});
		const uintTjp7XyE = BigInt("623")
		const stringoO96XVq = await BACMARSLPTOKENPoolowRNOp9.symbol.call({from: accounts[1]});
		const stringtji2JsT = await BACMARSLPTOKENPoolowRNOp9.name.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolowRNOp9.nonReentrant.call({from: accounts[4]});
		await BACMARSLPTOKENPoolowRNOp9.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256BJx22pI = await BACMARSLPTOKENPoolowRNOp9.withdraw.call(uintTjp7XyE, {from: accounts[2]});
		const uint256zYTWJXd = await BACMARSLPTOKENPoolowRNOp9.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbmMoaOc = "6xUVjy2TvDoizOB"
		const stringlrTx7yb = "yJxhSBghjpgeL7VN6lbjpcjJCPm2GCc7RQ9HvNGN6IOztXM"
		const uintvdnqw5W = BigInt("21")
		const BACMARSLPTOKENPoolUwLx8zv = await BACMARSLPTOKENPool.new(stringbmMoaOc, stringlrTx7yb, uintvdnqw5W, {from: accounts[1]});
		await BACMARSLPTOKENPoolUwLx8zv.nonReentrant.call({from: accounts[3]});
		const uint256RGY5KDv = await BACMARSLPTOKENPoolUwLx8zv.getRewardForDuration.call({from: accounts[0]});
		await BACMARSLPTOKENPoolUwLx8zv.nonReentrant.call({from: accounts[5]});
		const uint8jBLeFSM = await BACMARSLPTOKENPoolUwLx8zv.decimals.call({from: accounts[4]});
		await BACMARSLPTOKENPoolUwLx8zv.getReward.call({from: accounts[1]});
	});
})