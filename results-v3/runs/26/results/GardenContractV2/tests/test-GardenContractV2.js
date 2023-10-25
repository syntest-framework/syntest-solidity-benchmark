const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressBmpZa6 = accounts[1]
		const addresslrnSiqx = accounts[2]
		const addressivFOBrs = accounts[3]
		const GardenContractV2PG2Tkn9 = await GardenContractV2.new(addressBmpZa6, addresslrnSiqx, addressivFOBrs, {from: accounts[4]});
		const uintHudHEIE = BigInt("34")
		const stringNCSSU5O = "k5doY2KHBocQB"
		const uintxFtCHwb = BigInt("66")
		const uintUJrYkK = BigInt("3")
		const uintznxwHe = BigInt("223")
		const uintLxm76Z1 = BigInt("92")
		const stringeLBEswV = "NedgyTVFKgyzoTdTA3Tg3jGm2ttxjn6W6ptmQOJLnokc3HDrEaNfV"
		const stringtyBbgZ9 = await GardenContractV2PG2Tkn9.withdraw.call(stringNCSSU5O, uintHudHEIE, {from: accounts[1]});
		const uint256OvGWc5 = await GardenContractV2PG2Tkn9.getTotalrTLPHarvest.call(uintxFtCHwb, {from: accounts[5]});
		const uint8B1BNLsM = await GardenContractV2PG2Tkn9.setTimeStamp.call(uintznxwHe, uintUJrYkK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AnwoXCx = await GardenContractV2PG2Tkn9.timeUntilNextTLP.call(stringeLBEswV, uintLxm76Z1, {from: accounts[4]});

		await expect(GardenContractV2PG2Tkn9.withdraw.call(stringNCSSU5O, uintHudHEIE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscojpWzf = accounts[2]
		const addressvNHepXU = accounts[1]
		const addressrtvbK6J = accounts[4]
		const GardenContractV2LYWAX8K = await GardenContractV2.new(addresscojpWzf, addressvNHepXU, addressrtvbK6J, {from: accounts[0]});
		const boolKKlLiXy = true
		const uintjO7MyZN = BigInt("75")
		const stringq3IcXCT = "P9H8"
		const uintfAhU4XG = BigInt("1769")
		const stringYGNyNko = "0mSLPCVBz9FDPZa43F9zn4MsaKrTMNSo8CzeYg1yBwA1gxwsRt"
		const uintcGbLswU = BigInt("166")
		const stringXxk0JkL = "aPcpNh82om4AEcL87jAmMQj2RAfVJ2pAxne4enJcv2oa9YoNqxCGs3bs9iyYfIk31wwp1QUxGuyaSU7lJ3bSwBbg"
		const stringYtyJFR8 = ""
		const uint256RCxxa5c = await GardenContractV2LYWAX8K.plant.call(uintfAhU4XG, stringq3IcXCT, uintjO7MyZN, boolKKlLiXy, {from: accounts[1]});
		const uint256Hx98oU = await GardenContractV2LYWAX8K.totalTLPGrowing.call(stringYGNyNko, {from: accounts[1]});
		const stringgGXVcQV = await GardenContractV2LYWAX8K.claimDecompose.call(stringXxk0JkL, uintcGbLswU, {from: accounts[4]});
		const uint256BvHrA0M = await GardenContractV2LYWAX8K.totalTLPBurnt.call(stringYtyJFR8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2LYWAX8K.plant.call(uintfAhU4XG, stringq3IcXCT, uintjO7MyZN, boolKKlLiXy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressceDWEd5 = accounts[0]
		const addressIAhGSQx = accounts[5]
		const addressnyvdiUF = accounts[0]
		const GardenContractV2LbfIRDe = await GardenContractV2.new(addressceDWEd5, addressIAhGSQx, addressnyvdiUF, {from: accounts[5]});
		const addressAHhwLR = accounts[2]
		const addressppQrYi5 = accounts[3]
		const uintMn18dhc = BigInt("211")
		const uintFPrQ2Yz = BigInt("232")
		const addressLyh9jA1 = accounts[3]
		const addressWzRzziU = await GardenContractV2LbfIRDe.addTokenOwner.call(addressppQrYi5, addressAHhwLR, {from: accounts[4]});
		const uint8HXJGUkY = await GardenContractV2LbfIRDe.zeroHoldings.call(uintFPrQ2Yz, uintMn18dhc, {from: accounts[1]});
		const addressLKBuku7 = await GardenContractV2LbfIRDe.changeOwner.call(addressLyh9jA1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2LbfIRDe.addTokenOwner.call(addressppQrYi5, addressAHhwLR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressXdgbmtc = accounts[2]
		const addresssY4a3YV = accounts[0]
		const addressoyps8g = accounts[2]
		const GardenContractV2iKRD18r = await GardenContractV2.new(addressXdgbmtc, addresssY4a3YV, addressoyps8g, {from: accounts[5]});
		const stringLbQ6ZLn = "1rmE4hifKjwe56KIOHX"
		const uintHMl7V5c = BigInt("112")
		const stringmojlcSC = "6cPqIoGtNtOJOkBDxPrjRh7IvTIohgZkyZ18LfpNEEHbMlXy2Ta"
		const stringWg3mZfv = "n1IeF4VGSUoEet3dJST2JnJqQk131RBPSDLewPOhkHJBqEKsumGIXW3iCkBWhhkCs"
		const uintenrw13A = BigInt("90")
		const stringcaQSAik = await GardenContractV2iKRD18r.harvestAllBeds.call(stringLbQ6ZLn, {from: accounts[3]});
		const uint256La9LYDE = await GardenContractV2iKRD18r.timeUntilNextTLP.call(stringmojlcSC, uintHMl7V5c, {from: accounts[0]});
		const stringwaXLE0r = await GardenContractV2iKRD18r.harvestAllBeds.call(stringWg3mZfv, {from: accounts[4]});
		const uint256DU30vnW = await GardenContractV2iKRD18r.getTotalsTLPHarvest.call(uintenrw13A, {from: accounts[4]});

		await expect(GardenContractV2iKRD18r.harvestAllBeds.call(stringLbQ6ZLn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressIY0eYd = accounts[3]
		const addressuHM3LxV = "0x0000000000000000000000000000000000000001"
		const addresslEUinYr = accounts[1]
		const GardenContractV2Um17W0S = await GardenContractV2.new(addressIY0eYd, addressuHM3LxV, addresslEUinYr, {from: accounts[2]});
		const stringMu7v2hF = "m9Qv2QOK8SeT4pvoEMduRfoMjTCg76ztMo7XUQ4adu44HkCd8aE9mXNqudu4sQa9"
		const stringYOalPL2 = "5lIAxZVxWOgv2cwzCNdniZCDVpCj8qJcYtEb7sU9JTkTyyqtWwaxKPgn"
		const uintON6ihqg = BigInt("58")
		const stringnyRUUyM = "l4txHO0TDhhwrpU0XBnmXqGcmuhbi"
		const uintVozdDl6 = BigInt("86")
		const stringlxTHnI0 = "kjB8w0Ek4Vzd"
		const addressS5UfILs = accounts[4]
		const stringjUsvpCf = "SX3UDQBZ6FBj7H5uuM3Hfa"
		const addressbULzFwi = "0x0000000000000000000000000000000000000001"
		const uint256WcwSPmT = await GardenContractV2Um17W0S.totalTLPBurnt.call(stringMu7v2hF, {from: accounts[4]});
		const uint256vXha9gA = await GardenContractV2Um17W0S.totalTLPDecomposed.call(stringYOalPL2, {from: accounts[5]});
		const stringzFcbW4a = await GardenContractV2Um17W0S.claimDecompose.call(stringnyRUUyM, uintON6ihqg, {from: accounts[1]});
		const uint256g18cIM = await GardenContractV2Um17W0S.growthRemaining.call(addressS5UfILs, stringlxTHnI0, uintVozdDl6, {from: accounts[2]});
		const uint256yWZE7Ll = await GardenContractV2Um17W0S.balanceOf.call(addressbULzFwi, stringjUsvpCf, {from: accounts[1]});

		await expect(GardenContractV2Um17W0S.totalTLPBurnt.call(stringMu7v2hF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressHczmAza = accounts[1]
		const addressezBXDti = accounts[1]
		const addressUz7RBE = "0x0000000000000000000000000000000000000001"
		const GardenContractV2a1Bj5Y1 = await GardenContractV2.new(addressHczmAza, addressezBXDti, addressUz7RBE, {from: accounts[5]});
		const uintKR8wzZD = BigInt("96")
		const stringVcpEEfW = "SyEd3h2UcNUtPRqAjksSAaItT4INzLRvb7QPhLM17k1S6WfI3EnE4VI7IvrNaSj3AXDJHuEBfdM9pCkVOL3nHMXf3sL"
		const stringcrOdxIl = "yzap5"
		const uinteR1YtRY = BigInt("209")
		const stringuib8Hj = "LvdHDX"
		const addressFSJftwO = accounts[2]
		const stringK4hNxUn = await GardenContractV2a1Bj5Y1.harvest.call(stringVcpEEfW, uintKR8wzZD, {from: accounts[2]});
		const stringnLRIUoQ = await GardenContractV2a1Bj5Y1.harvestAllBeds.call(stringcrOdxIl, {from: accounts[1]});
		await GardenContractV2a1Bj5Y1.totalBedSupply.call(stringuib8Hj, uinteR1YtRY, {from: accounts[1]});
		const addressL1maltm = await GardenContractV2a1Bj5Y1.changeBenefitiary.call(addressFSJftwO, {from: accounts[0]});

		await expect(GardenContractV2a1Bj5Y1.harvest.call(stringVcpEEfW, uintKR8wzZD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressCLKEz9P = accounts[2]
		const addressDxXOhp0 = accounts[0]
		const addressDl8jCb6 = accounts[2]
		const GardenContractV2iKRD18r = await GardenContractV2.new(addressCLKEz9P, addressDxXOhp0, addressDl8jCb6, {from: accounts[5]});
		const stringvEnntK = "Thg6ta5Pu8hgncorvUQjunkA7e8mKhwp7H8TNme7nxdpEgaraBqBWSEcx05l0DoSLmOrC8kXDp3b"
		const stringLbQ6ZLn = "1rmE4hifKjwe56KIOHX"
		const stringAtDubmS = "kBGYFJRrwkrEmSQCa2b2YrgRcsoheVeSt16ECwSroMF9lYuqfSfZyhJ98Thg7eORBTKNL3ZBrdsL35XWc9maqd83JJG4SE3poNU"
		const boolcFrmPiR = false
		const uintTVSg7rR = BigInt("108")
		const stringDg8pmaG = "uuKTsUKXBnnPDyAR8S8WUIuO9dc7uol0X42udxHmi4EPGE5Nz8EwEgPEyyLiw"
		const uintzHhtVpH = BigInt("1468")
		const uintRsxzLXg = BigInt("112")
		const stringmojlcSC = "6cPqIoGtNtOJOkBDxPrjRh7IvTIohgZkyZ18LfpNEEHbMlXy2Ta"
		const stringWg3mZfv = "n1IeF4VGSUoEet3dJST2JnJqQk131RBPSDLewPOhkHJBqEKsumGIXW3iCkBWhhkCs"
		const uintOzXQoJL = BigInt("109")
		const uint256kvk4j01 = await GardenContractV2iKRD18r.totalTLPDecomposed.call(stringvEnntK, {from: "0x0000000000000000000000000000000000000001"});
		const stringcaQSAik = await GardenContractV2iKRD18r.harvestAllBeds.call(stringLbQ6ZLn, {from: accounts[3]});
		const uint256g7Kz1nb = await GardenContractV2iKRD18r.totalTLPDecomposed.call(stringAtDubmS, {from: accounts[4]});
		const uint256btRRyns = await GardenContractV2iKRD18r.plant.call(uintzHhtVpH, stringDg8pmaG, uintTVSg7rR, boolcFrmPiR, {from: accounts[0]});
		const uint256La9LYDE = await GardenContractV2iKRD18r.timeUntilNextTLP.call(stringmojlcSC, uintRsxzLXg, {from: accounts[0]});
		const stringwaXLE0r = await GardenContractV2iKRD18r.harvestAllBeds.call(stringWg3mZfv, {from: accounts[4]});
		const uint256DU30vnW = await GardenContractV2iKRD18r.getTotalsTLPHarvest.call(uintOzXQoJL, {from: accounts[4]});

		await expect(GardenContractV2iKRD18r.totalTLPDecomposed.call(stringvEnntK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressTGv9c2 = accounts[0]
		const addressxdYc3wn = accounts[5]
		const addressYotrhSQ = accounts[0]
		const GardenContractV2LbfIRDe = await GardenContractV2.new(addressTGv9c2, addressxdYc3wn, addressYotrhSQ, {from: accounts[5]});
		const uinti1CjsmX = BigInt("94")
		const stringMPGhSIM = "Mc2YA0IIEYA6ehFGopWW29"
		const addressqGyUo2E = accounts[3]
		const addressYdoGge = accounts[3]
		await GardenContractV2LbfIRDe.totalBedSupply.call(stringMPGhSIM, uinti1CjsmX, {from: accounts[1]});
		const addressWzRzziU = await GardenContractV2LbfIRDe.addTokenOwner.call(addressYdoGge, addressqGyUo2E, {from: accounts[4]});

		await expect(GardenContractV2LbfIRDe.totalBedSupply.call(stringMPGhSIM, uinti1CjsmX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressYT0EDsV = accounts[2]
		const addressGICLZjb = accounts[0]
		const addressP0TSAVs = accounts[2]
		const GardenContractV2iKRD18r = await GardenContractV2.new(addressYT0EDsV, addressGICLZjb, addressP0TSAVs, {from: accounts[5]});
		const uintWq9n8di = BigInt("1172")
		const uintCq0bOEl = BigInt("201")
		const stringpWEEEgT = "cDApLbpoxN6adUkXjxXwU8wjE5DSP4RkIHkR7PEcFgzkMshLG"
		const stringLbQ6ZLn = "1rmE4hifKjwe56KIOHX"
		const uintXBzVPMZ = BigInt("97")
		const stringmojlcSC = "6cPqIoGtNtOJOkBDxPrjRh7IvTIohgZkyZ18LfpNEEHbMlXy2Ta"
		const uintbWBOZNT = BigInt("55")
		const uintqr664ZZ = BigInt("231")
		const uintmMsBieR = BigInt("124")
		const stringWg3mZfv = "n1IeF4VGSUoEet3dJST2JnJqQk131RBPSDLewPOhkHJBqEKsumGIXW3iCkBWhhkCs"
		const stringIHAd1BW = await GardenContractV2iKRD18r.decompose.call(stringpWEEEgT, uintCq0bOEl, uintWq9n8di, {from: accounts[3]});
		const stringcaQSAik = await GardenContractV2iKRD18r.harvestAllBeds.call(stringLbQ6ZLn, {from: accounts[3]});
		const uint256La9LYDE = await GardenContractV2iKRD18r.timeUntilNextTLP.call(stringmojlcSC, uintXBzVPMZ, {from: accounts[0]});
		const uint8dHzDW9u = await GardenContractV2iKRD18r.setTimeStamp.call(uintqr664ZZ, uintbWBOZNT, {from: accounts[1]});
		const uint256IYY5D7Q = await GardenContractV2iKRD18r.getTotalsTLPHarvest.call(uintmMsBieR, {from: "0x0000000000000000000000000000000000000001"});
		const stringwaXLE0r = await GardenContractV2iKRD18r.harvestAllBeds.call(stringWg3mZfv, {from: accounts[4]});

		await expect(GardenContractV2iKRD18r.decompose.call(stringpWEEEgT, uintCq0bOEl, uintWq9n8di, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressnfqf2u = accounts[0]
		const addressONbCZF0 = accounts[5]
		const addressWMK1ksx = accounts[0]
		const GardenContractV2LbfIRDe = await GardenContractV2.new(addressnfqf2u, addressONbCZF0, addressWMK1ksx, {from: accounts[5]});
		const uintl0RwfLy = BigInt("211")
		const uintHSa1OSV = BigInt("232")
		const uint8HXJGUkY = await GardenContractV2LbfIRDe.zeroHoldings.call(uintHSa1OSV, uintl0RwfLy, {from: accounts[1]});

		await expect(GardenContractV2LbfIRDe.zeroHoldings.call(uintHSa1OSV, uintl0RwfLy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressv5eAOL = accounts[2]
		const addressBBbkm3Y = accounts[0]
		const addressMsZvTsn = accounts[0]
		const GardenContractV2OqbhPMc = await GardenContractV2.new(addressv5eAOL, addressBBbkm3Y, addressMsZvTsn, {from: accounts[3]});
		const uintalnBdfQ = BigInt("38")
		const uintaV81wn8 = BigInt("44")
		const uint256j770prr = await GardenContractV2OqbhPMc.getTotalsTLPHarvest.call(uintalnBdfQ, {from: accounts[4]});
		const uint256k42K6aM = await GardenContractV2OqbhPMc.getTotalrTLPHarvest.call(uintaV81wn8, {from: accounts[1]});

		await expect(GardenContractV2OqbhPMc.getTotalsTLPHarvest.call(uintalnBdfQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressHw5tyzW = accounts[0]
		const address0D1ZJS = accounts[5]
		const addressTugTjGF = accounts[0]
		const GardenContractV2LbfIRDe = await GardenContractV2.new(addressHw5tyzW, address0D1ZJS, addressTugTjGF, {from: accounts[5]});
		const stringrM9Edb = "4y6aDUvS50D5Osp92pRYPTChlvbPKjoTOlWPjzRctdJxYFkX5L2YcpkfOHtMLbdFeo3DOK"
		const uints5TA8uX = BigInt("238")
		const uintrcckLwO = BigInt("232")
		const stringWcRs86X = "p5E"
		const uint256aGkjgLv = await GardenContractV2LbfIRDe.totalTLPGrown.call(stringrM9Edb, {from: accounts[3]});
		const uint8HXJGUkY = await GardenContractV2LbfIRDe.zeroHoldings.call(uintrcckLwO, uints5TA8uX, {from: accounts[1]});
		const uint2561aCJby = await GardenContractV2LbfIRDe.totalGardenSupply.call(stringWcRs86X, {from: accounts[1]});

		await expect(GardenContractV2LbfIRDe.totalTLPGrown.call(stringrM9Edb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswHQRzlz = accounts[5]
		const addressZTNGDWN = accounts[4]
		const addressbMLCKik = accounts[3]
		const GardenContractV2UsI8HJJ = await GardenContractV2.new(addresswHQRzlz, addressZTNGDWN, addressbMLCKik, {from: accounts[0]});
		const stringVhwkzs0 = "cxtpnKBrDpnududROMKvmRDlXbwMVpFJ1J57HQQAvhVpE28pf2clSrKR5m6fTOVJHxjn5qyQT5XeJQHGicTsSXBbymIvU62A"
		const addressEuOCViJ = accounts[2]
		const uintrs9tGhs = BigInt("167")
		const addressa2ynDC = accounts[3]
		const uintHCQqRbA = BigInt("41")
		const uintmOBz26B = BigInt("53")
		const uint256WlvDSiD = await GardenContractV2UsI8HJJ.balanceOf.call(addressEuOCViJ, stringVhwkzs0, {from: accounts[0]});
		const uint256FQs2CPR = await GardenContractV2UsI8HJJ.getTotalsTLPHarvest.call(uintrs9tGhs, {from: accounts[1]});
		const addressiYbpT71 = await GardenContractV2UsI8HJJ.changeOwner.call(addressa2ynDC, {from: accounts[4]});
		const uint8S9fnwtc = await GardenContractV2UsI8HJJ.setTimeStamp.call(uintmOBz26B, uintHCQqRbA, {from: accounts[4]});

		await expect(GardenContractV2UsI8HJJ.balanceOf.call(addressEuOCViJ, stringVhwkzs0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressyTmAcT9 = accounts[2]
		const addressRzWW5BX = accounts[0]
		const addressC78T4YS = accounts[2]
		const GardenContractV2iKRD18r = await GardenContractV2.new(addressyTmAcT9, addressRzWW5BX, addressC78T4YS, {from: accounts[5]});
		const uintsQ0Idub = BigInt("224")
		const stringN52Kqwx = "WlDsbLPTjS"
		const addressvdr33jQ = accounts[3]
		const uinttxd7fuc = BigInt("97")
		const stringmojlcSC = "6cPqIoGtNtOJOkBDxPrjRh7IvTIohgZkyZ18LfpNEEHbMlXy2Ta"
		const stringWg3mZfv = "n1IeF4QGSUoEet3dJST2JnJqQk131RBPSDLewPOhkHJBqEKsumGIXW3iCkBWhhkCs"
		const uint256FBRUxAo = await GardenContractV2iKRD18r.getTotalrTLPHarvest.call(uintsQ0Idub, {from: accounts[4]});
		const uint256V6QPUoP = await GardenContractV2iKRD18r.balanceOf.call(addressvdr33jQ, stringN52Kqwx, {from: accounts[2]});
		const uint256La9LYDE = await GardenContractV2iKRD18r.timeUntilNextTLP.call(stringmojlcSC, uinttxd7fuc, {from: accounts[0]});
		const stringwaXLE0r = await GardenContractV2iKRD18r.harvestAllBeds.call(stringWg3mZfv, {from: accounts[4]});

		await expect(GardenContractV2iKRD18r.getTotalrTLPHarvest.call(uintsQ0Idub, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressRcbbX9E = accounts[2]
		const addressdJKYSI = accounts[0]
		const addressJi0e0cx = accounts[2]
		const GardenContractV2iKRD18r = await GardenContractV2.new(addressRcbbX9E, addressdJKYSI, addressJi0e0cx, {from: accounts[5]});
		const uintrYERETg = BigInt("143")
		const stringNvsJsYt = "TkrFk4FHqpP3uQIX6eufw6MFFwNINgnTSbS2uZAvRXfcmWpyRQBvLEeJQpfIm7PvIG2VA7yE2JEQ51Lf8CV4kYK76LleH8"
		const addressKiV5AC = accounts[2]
		const uintqOhbT6R = BigInt("74")
		const stringSePrAeL = "oQC9lDl35KtswXLHyOLJtPz323zyJpXNihIJEgjo3aFAduFt2B6xzQT1N8KtTCKT9iRIHA4NLynUWsyfwHJkn9Av3UwrAUhoXJ"
		const addressxdsxnU = accounts[1]
		const stringLbQ6ZLn = "1rmE4hifKjwe56KIOHX"
		const stringWg3mZfv = "n1IeF4VGSUoEet3dJST2JnJqQk131RBPSDLewPOhkHJBqEKsumGIXW3iCkBWhhkCs"
		const uint256pu3u5A = await GardenContractV2iKRD18r.growthRemaining.call(addressKiV5AC, stringNvsJsYt, uintrYERETg, {from: accounts[1]});
		const uint256XgIorxE = await GardenContractV2iKRD18r.growthRemaining.call(addressxdsxnU, stringSePrAeL, uintqOhbT6R, {from: accounts[0]});
		const stringcaQSAik = await GardenContractV2iKRD18r.harvestAllBeds.call(stringLbQ6ZLn, {from: accounts[3]});
		const stringwaXLE0r = await GardenContractV2iKRD18r.harvestAllBeds.call(stringWg3mZfv, {from: accounts[4]});

		await expect(GardenContractV2iKRD18r.growthRemaining.call(addressKiV5AC, stringNvsJsYt, uintrYERETg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressFAr3PY = accounts[0]
		const addressLBShUdY = accounts[5]
		const addresshWHPVyi = accounts[0]
		const GardenContractV2LbfIRDe = await GardenContractV2.new(addressFAr3PY, addressLBShUdY, addresshWHPVyi, {from: accounts[5]});
		const stringIlVGPNx = "KV4ol6L2ODklqM1gkkeqPIX8qUaLIcfmzVdpJE8qzUrQIJIC9Ef2RrJYCD1W"
		const uintSQ7D0Jp = BigInt("193")
		const uintxWeblSu = BigInt("233")
		const uint256kzSZ9ap = await GardenContractV2LbfIRDe.totalTLPGrowing.call(stringIlVGPNx, {from: accounts[1]});
		const uint8HXJGUkY = await GardenContractV2LbfIRDe.zeroHoldings.call(uintxWeblSu, uintSQ7D0Jp, {from: accounts[1]});

		await expect(GardenContractV2LbfIRDe.totalTLPGrowing.call(stringIlVGPNx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressgRaIypn = accounts[0]
		const addressyTeq8KD = accounts[5]
		const addresswSKMsb5 = accounts[0]
		const GardenContractV2LbfIRDe = await GardenContractV2.new(addressgRaIypn, addressyTeq8KD, addresswSKMsb5, {from: accounts[5]});
		const uintqRnchp = BigInt("164")
		const stringheNKOsG = "NSscrDpLg6Cmw4acvgYC2HdImCBUVPVROXD8TzAXORpgFNc9hQoYRxelwIns9pRQ"
		const uintGWlw5Jx = BigInt("212")
		const uintHQAAGRG = BigInt("232")
		const uint256BCybrLP = await GardenContractV2LbfIRDe.timeUntilNextTLP.call(stringheNKOsG, uintqRnchp, {from: "0x0000000000000000000000000000000000000001"});
		const uint8HXJGUkY = await GardenContractV2LbfIRDe.zeroHoldings.call(uintHQAAGRG, uintGWlw5Jx, {from: accounts[1]});

		await expect(GardenContractV2LbfIRDe.timeUntilNextTLP.call(stringheNKOsG, uintqRnchp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressbi5c5Wl = accounts[0]
		const addresshT4hX9E = accounts[5]
		const addressIxHceC = accounts[0]
		const GardenContractV2LbfIRDe = await GardenContractV2.new(addressbi5c5Wl, addresshT4hX9E, addressIxHceC, {from: accounts[5]});
		const stringdQaSk9T = "s1VcJyhekhu3TeJEFW24U8Parb0M0J1hM"
		const uintixgvL3A = BigInt("193")
		const uintr0VwqKI = BigInt("232")
		const uint256J00YR2k = await GardenContractV2LbfIRDe.totalGardenSupply.call(stringdQaSk9T, {from: accounts[2]});
		const uint8HXJGUkY = await GardenContractV2LbfIRDe.zeroHoldings.call(uintr0VwqKI, uintixgvL3A, {from: accounts[1]});

		await expect(GardenContractV2LbfIRDe.totalGardenSupply.call(stringdQaSk9T, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressajzS6XN = accounts[2]
		const addressFtQZJIf = accounts[0]
		const addressjn0vaWI = accounts[2]
		const GardenContractV2iKRD18r = await GardenContractV2.new(addressajzS6XN, addressFtQZJIf, addressjn0vaWI, {from: accounts[5]});
		const uintuFWuscY = BigInt("49")
		const stringJkkSwa = "QKRiVHavrf7N82Yl9O"
		const stringN52Kqwx = "WlDsbLPTjS"
		const addressxq46QNX = accounts[3]
		const uintjcSCIQ5 = BigInt("99")
		const uintpjMAUhN = BigInt("97")
		const stringmojlcSC = "6cPqIoGtNtOJOkBDxPrjRh7IvTIhgZkyZ18LfpNEEHbMlXy2Ta"
		const uintIznuBad = BigInt("206")
		const stringzKSeB69 = "37enKVW8hWNRrsxLnDYkeeT8AGvRXQmAoB179ZY"
		const stringmM9VBrH = await GardenContractV2iKRD18r.claimDecompose.call(stringJkkSwa, uintuFWuscY, {from: accounts[5]});
		const uint256V6QPUoP = await GardenContractV2iKRD18r.balanceOf.call(addressxq46QNX, stringN52Kqwx, {from: accounts[2]});
		const uint256rcJiU2d = await GardenContractV2iKRD18r.getTotalrTLPHarvest.call(uintjcSCIQ5, {from: accounts[3]});
		const uint256La9LYDE = await GardenContractV2iKRD18r.timeUntilNextTLP.call(stringmojlcSC, uintpjMAUhN, {from: accounts[0]});
		const uint256e9VOcGD = await GardenContractV2iKRD18r.timeUntilNextTLP.call(stringzKSeB69, uintIznuBad, {from: accounts[2]});

		await expect(GardenContractV2iKRD18r.claimDecompose.call(stringJkkSwa, uintuFWuscY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresslSRQ2t = accounts[5]
		const addresshXZyjzY = accounts[0]
		const addressqARobYz = accounts[4]
		const GardenContractV2NRubjt = await GardenContractV2.new(addresslSRQ2t, addresshXZyjzY, addressqARobYz, {from: "0x0000000000000000000000000000000000000001"});
		const uinttbnMqlc = BigInt("151")
		const uintzfj3J1q = BigInt("109")
		const stringUUNVlem = "ubohC5XQ4qYbRy6aeFaaMkkOU6pSX8wLEfiCHrbFhykOA9ZDrCK7XdKAVv77RyUC6TQsJO1TghR"
		const addressEvOW77J = "0x0000000000000000000000000000000000000001"
		const uintfWYeOMo = BigInt("197")
		const stringhzsAhPi = "zSQKIXTsq77GeVYKi9xV0fCDeaGrqIDeOd1aBSVjSPG6E5spPubE2IvMXqXxjO1vVfXFcMqxgPbr3msRJDvJwt88PPwMDB"
		const uint2564gtr0J = await GardenContractV2NRubjt.getTotalsTLPHarvest.call(uinttbnMqlc, {from: accounts[3]});
		await GardenContractV2NRubjt.totalBedSupply.call(stringUUNVlem, uintzfj3J1q, {from: accounts[4]});
		const addressxIcqQXf = await GardenContractV2NRubjt.changeBenefitiary.call(addressEvOW77J, {from: "0x0000000000000000000000000000000000000001"});
		await GardenContractV2NRubjt.totalBedSupply.call(stringhzsAhPi, uintfWYeOMo, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GardenContractV2', async () => {
		const addressCNopkVV = accounts[0]
		const addresshy9P3eO = accounts[5]
		const addressz80bXJC = accounts[0]
		const GardenContractV2LbfIRDe = await GardenContractV2.new(addressCNopkVV, addresshy9P3eO, addressz80bXJC, {from: accounts[5]});
		const uintiv8p2AA = BigInt("0")
		const uint256GZivlgd = await GardenContractV2LbfIRDe.getTotalrTLPHarvest.call(uintiv8p2AA, {from: accounts[2]});

		await expect(GardenContractV2LbfIRDe.getTotalrTLPHarvest.call(uintiv8p2AA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressiQR5N7Y = accounts[0]
		const addresshvHrKkO = accounts[5]
		const addressEoLsReA = accounts[0]
		const GardenContractV2LbfIRDe = await GardenContractV2.new(addressiQR5N7Y, addresshvHrKkO, addressEoLsReA, {from: accounts[5]});
		const addressvusxxWP = accounts[3]
		const boolIELqmn9 = true
		const uintpcRbSOI = BigInt("78")
		const stringwbAvOmh = "38scwcGjecN868w3GnrIpn"
		const uintUQgC8Y = BigInt("31")
		const stringo5FJAj = "RSZTOpCzfjCkM9lGJts73lk5AICXf6NxEQLpv2DfGyfkcqeXM5DnRkYZbcPkg8bs1B4sDKgfGncc8HyvM0PhQn7ovWcJ"
		const addressIAyw4B = accounts[3]
		const addresse2tiAOl = await GardenContractV2LbfIRDe.renounceTokenOwner.call(addressvusxxWP, {from: accounts[5]});
		const uint256CE42S4d = await GardenContractV2LbfIRDe.plant.call(uintUQgC8Y, stringwbAvOmh, uintpcRbSOI, boolIELqmn9, {from: accounts[3]});
		const uint256uh3nQH = await GardenContractV2LbfIRDe.balanceOf.call(addressIAyw4B, stringo5FJAj, {from: accounts[4]});

		await expect(GardenContractV2LbfIRDe.renounceTokenOwner.call(addressvusxxWP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJevC4OI = accounts[0]
		const addresswQHHlNJ = accounts[5]
		const addressVteNih = accounts[0]
		const GardenContractV2LbfIRDe = await GardenContractV2.new(addressJevC4OI, addresswQHHlNJ, addressVteNih, {from: accounts[5]});
		const addressapviKEk = accounts[2]
		const uintUZVitK7 = BigInt("25")
		const addressfihTsp = await GardenContractV2LbfIRDe.changeBenefitiary.call(addressapviKEk, {from: accounts[5]});
		const uint256GZivlgd = await GardenContractV2LbfIRDe.getTotalrTLPHarvest.call(uintUZVitK7, {from: accounts[2]});

		await expect(GardenContractV2LbfIRDe.getTotalrTLPHarvest.call(uintUZVitK7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})