const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addresswvDUATN = accounts[2]
		const addressVqQ8QCj = accounts[2]
		const addressbPhedNI = accounts[3]
		const GardenContractV2PKFTQ8n = await GardenContractV2.new(addresswvDUATN, addressVqQ8QCj, addressbPhedNI, {from: accounts[5]});
		const stringNqgrgL5 = "LqjIMGiGNxVMtjg21ez7m7IkkkKDBxT4dPbhrGiTAjtI2L3J6KDYubB6e4G1IumGaEPY4re6C9"
		const addresskmlYbZd = accounts[0]
		const uintDzL7Yx = BigInt("125")
		const stringXvEy2q = "hVFIMIkj7oDGBNUjN7GIoAtXmFjoAc1uhD4xxDzsOdHV"
		const addressFnb7EZv = accounts[2]
		const uint256rzpnsa = await GardenContractV2PKFTQ8n.totalTLPBurnt.call(stringNqgrgL5, {from: accounts[2]});
		const addressGh9QlI = await GardenContractV2PKFTQ8n.renounceTokenOwner.call(addresskmlYbZd, {from: accounts[3]});
		const uint256S4HwvtO = await GardenContractV2PKFTQ8n.growthRemaining.call(addressFnb7EZv, stringXvEy2q, uintDzL7Yx, {from: accounts[3]});

		await expect(GardenContractV2PKFTQ8n.totalTLPBurnt.call(stringNqgrgL5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstYrCuLf = accounts[5]
		const addressjSr2W89 = accounts[0]
		const addressnXlcUsx = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addresstYrCuLf, addressjSr2W89, addressnXlcUsx, {from: accounts[2]});
		const uintIJEX6wm = BigInt("46")
		const stringHxyjvOk = "mi5iRfV84nynbMS"
		const stringceDrlkE = "vwG9kQq9noq2E209T3bWAKdBIG8z1ED4acDMxy45y9zb99TtbP6EwPrBLY"
		const uint256WtFWiRr = await GardenContractV2nUkl6J1.timeUntilNextTLP.call(stringHxyjvOk, uintIJEX6wm, {from: accounts[0]});
		const uint256BWeoEC7 = await GardenContractV2nUkl6J1.totalTLPGrown.call(stringceDrlkE, {from: accounts[2]});

		await expect(GardenContractV2nUkl6J1.timeUntilNextTLP.call(stringHxyjvOk, uintIJEX6wm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressaqbq5Bi = accounts[1]
		const addressngLL0dU = accounts[5]
		const addressOGrMeFk = accounts[4]
		const GardenContractV2WCsDLxi = await GardenContractV2.new(addressaqbq5Bi, addressngLL0dU, addressOGrMeFk, {from: accounts[1]});
		const stringWtIG9oF = "CCbar1QLDyXbH9p"
		const uint3plB6p = BigInt("15")
		const stringCuPgZ0i = "iYbdbllW7Wb9mNyWCz8dNldZ7Ov3BWlv2jCVw6X08rv5RrQ"
		const uinthemwkU5 = BigInt("217")
		const stringR6FkY2a = "je6qm7o4V"
		const uintsStH1D0 = BigInt("166")
		const uint256JEOW50a = await GardenContractV2WCsDLxi.totalTLPGrowing.call(stringWtIG9oF, {from: accounts[2]});
		const uint256ADWWjYx = await GardenContractV2WCsDLxi.timeUntilNextTLP.call(stringCuPgZ0i, uint3plB6p, {from: accounts[2]});
		await GardenContractV2WCsDLxi.totalBedSupply.call(stringR6FkY2a, uinthemwkU5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gvUWhLM = await GardenContractV2WCsDLxi.getTotalrTLPHarvest.call(uintsStH1D0, {from: accounts[0]});

		await expect(GardenContractV2WCsDLxi.totalTLPGrowing.call(stringWtIG9oF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressruaVkR = accounts[2]
		const addressYyRgiGh = accounts[2]
		const addressUis0vnc = accounts[5]
		const GardenContractV2oIRMWfs = await GardenContractV2.new(addressruaVkR, addressYyRgiGh, addressUis0vnc, {from: accounts[4]});
		const uintU33kli4 = BigInt("65")
		const uintrrmvwlq = BigInt("250")
		const uintUuQ4ag = BigInt("997")
		const uintO3xrH06 = BigInt("42")
		const stringJXaUmxJ = "UfZzdGdfSm7lOH4qCJnYTCNzo0eDpF2usbQPwe5uBG39l3Fw0"
		const uint8UCCwYyW = await GardenContractV2oIRMWfs.setTimeStamp.call(uintrrmvwlq, uintU33kli4, {from: accounts[0]});
		const stringbTkJhTF = await GardenContractV2oIRMWfs.decompose.call(stringJXaUmxJ, uintO3xrH06, uintUuQ4ag, {from: accounts[2]});

		await expect(GardenContractV2oIRMWfs.setTimeStamp.call(uintrrmvwlq, uintU33kli4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressj20JdPO = accounts[3]
		const addresspWGxdV = accounts[3]
		const addressu9tDXFO = "0x0000000000000000000000000000000000000001"
		const GardenContractV2mjhjmZs = await GardenContractV2.new(addressj20JdPO, addresspWGxdV, addressu9tDXFO, {from: accounts[5]});
		const uintUc4BP7v = BigInt("134")
		const stringy2igOBh = "35c"
		const uintpNQUU3k = BigInt("203")
		const stringpk8pjpd = "TWcRKb1SHMudhcvwoNqQ5QVFB5JY6i5CriOltxTMicF"
		const addressii4Ocg = accounts[0]
		const addresszLOVk3N = accounts[2]
		await GardenContractV2mjhjmZs.totalBedSupply.call(stringy2igOBh, uintUc4BP7v, {from: accounts[4]});
		const uint256RfDkGQa = await GardenContractV2mjhjmZs.growthRemaining.call(addressii4Ocg, stringpk8pjpd, uintpNQUU3k, {from: accounts[2]});
		const addressnld9Blw = await GardenContractV2mjhjmZs.changeBenefitiary.call(addresszLOVk3N, {from: accounts[2]});

		await expect(GardenContractV2mjhjmZs.totalBedSupply.call(stringy2igOBh, uintUc4BP7v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressCWAKQ44 = accounts[1]
		const addressmYR8LTY = accounts[2]
		const addressHakq1kB = accounts[4]
		const GardenContractV2uMJFE5 = await GardenContractV2.new(addressCWAKQ44, addressmYR8LTY, addressHakq1kB, {from: accounts[2]});
		const uintvKQA7Tu = BigInt("111")
		const stringX14SdFi = "pTswkmsqDo3GhGjXQ8vuKnzRU1Pu81JU61fNU1f7PsJ"
		const addressJBu9Tzk = accounts[5]
		const addressInLcxdJ = accounts[2]
		const uintKHCNcqh = BigInt("206")
		const uintXZa2Z4d = BigInt("111")
		const addressLWGImTH = accounts[0]
		const stringIvYaai9 = await GardenContractV2uMJFE5.harvest.call(stringX14SdFi, uintvKQA7Tu, {from: accounts[1]});
		const addressQeG7x7m = await GardenContractV2uMJFE5.addTokenOwner.call(addressInLcxdJ, addressJBu9Tzk, {from: accounts[0]});
		const uint8BOoc7g1 = await GardenContractV2uMJFE5.zeroHoldings.call(uintXZa2Z4d, uintKHCNcqh, {from: accounts[4]});
		const addresszYfOxDs = await GardenContractV2uMJFE5.changeOwner.call(addressLWGImTH, {from: accounts[4]});

		await expect(GardenContractV2uMJFE5.harvest.call(stringX14SdFi, uintvKQA7Tu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresshvQX6mq = "0x0000000000000000000000000000000000000001"
		const addressH42cvX1 = accounts[1]
		const addressFbZ2co = accounts[4]
		const GardenContractV22o8EW2 = await GardenContractV2.new(addresshvQX6mq, addressH42cvX1, addressFbZ2co, {from: "0x0000000000000000000000000000000000000001"});
		const addressA5wlKH = accounts[4]
		const uintws8ARyd = BigInt("40")
		const addressBP5njRX = await GardenContractV22o8EW2.changeBenefitiary.call(addressA5wlKH, {from: accounts[4]});
		const uint256ryW22YC = await GardenContractV22o8EW2.getTotalsTLPHarvest.call(uintws8ARyd, {from: accounts[0]});
	});

	it('test for GardenContractV2', async () => {
		const addressqm50Dym = accounts[1]
		const addressaPFXtBv = accounts[0]
		const addressUx3NbIa = accounts[2]
		const GardenContractV2rtjpRlk = await GardenContractV2.new(addressqm50Dym, addressaPFXtBv, addressUx3NbIa, {from: accounts[2]});
		const stringfriG6iH = "pR9OYHxazT8qsd9eDAytNuqkTAadMLn1e8hqkrq"
		const uintsnOM9t2 = BigInt("45")
		const stringg4ZOP8m = "Sbvw"
		const uint256ioqJuRv = await GardenContractV2rtjpRlk.totalTLPDecomposed.call(stringfriG6iH, {from: accounts[0]});
		const uint256NLZTkQi = await GardenContractV2rtjpRlk.getTotalrTLPHarvest.call(uintsnOM9t2, {from: accounts[2]});
		const stringPYW8QrZ = await GardenContractV2rtjpRlk.harvestAllBeds.call(stringg4ZOP8m, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2rtjpRlk.totalTLPDecomposed.call(stringfriG6iH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressLeYw6h3 = accounts[5]
		const addressyJIdEil = accounts[0]
		const addressVwYjFCu = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addressLeYw6h3, addressyJIdEil, addressVwYjFCu, {from: accounts[2]});
		const addresspZQdRp1 = "0x0000000000000000000000000000000000000001"
		const uintxSHeJXz = BigInt("28")
		const stringHxyjvOk = "mi5iRfV84nynbMS"
		const addressRMfS6I = await GardenContractV2nUkl6J1.changeOwner.call(addresspZQdRp1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256WtFWiRr = await GardenContractV2nUkl6J1.timeUntilNextTLP.call(stringHxyjvOk, uintxSHeJXz, {from: accounts[0]});

		await expect(GardenContractV2nUkl6J1.changeOwner.call(addresspZQdRp1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressmiiIdEI = accounts[5]
		const addresso5Dkb2L = accounts[0]
		const addressV6LYtp = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addressmiiIdEI, addresso5Dkb2L, addressV6LYtp, {from: accounts[2]});
		const stringceDrlkE = "vG9kQq9noq2E209T3bWAKdBIG8z1ED4acDMxy45y9zb99TtbP6EwPrBLY"
		const uint256BWeoEC7 = await GardenContractV2nUkl6J1.totalTLPGrown.call(stringceDrlkE, {from: accounts[2]});

		await expect(GardenContractV2nUkl6J1.totalTLPGrown.call(stringceDrlkE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressTbd8wEW = accounts[5]
		const addressuYogaLo = accounts[0]
		const addressLKHZyw = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addressTbd8wEW, addressuYogaLo, addressLKHZyw, {from: accounts[2]});
		const uintu3OfZx8 = BigInt("115")
		const stringceDrlkE = "vG9kQq9noq2E209T3bWAKdBIG8z1ED4acDMxy45y9zb99TtbP6EwPrBLY"
		const uint256VI9SpLS = await GardenContractV2nUkl6J1.getTotalrTLPHarvest.call(uintu3OfZx8, {from: accounts[4]});
		const uint256BWeoEC7 = await GardenContractV2nUkl6J1.totalTLPGrown.call(stringceDrlkE, {from: accounts[2]});

		await expect(GardenContractV2nUkl6J1.getTotalrTLPHarvest.call(uintu3OfZx8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressstfrOxl = accounts[5]
		const addressroSjWmP = accounts[0]
		const addressLFRASva = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addressstfrOxl, addressroSjWmP, addressLFRASva, {from: accounts[2]});
		const stringjKTsFz = "iIxC4Fev5kG5PFtCCSF37BK"
		const stringceDrlkE = "vG9kQ9noq2E209T3bWAKdBIG8z1ED4acDMxy45y9zb99TtbP6EwPrBLY"
		const uint256qUTEFzc = await GardenContractV2nUkl6J1.totalGardenSupply.call(stringjKTsFz, {from: accounts[3]});
		const uint256BWeoEC7 = await GardenContractV2nUkl6J1.totalTLPGrown.call(stringceDrlkE, {from: accounts[2]});

		await expect(GardenContractV2nUkl6J1.totalGardenSupply.call(stringjKTsFz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspJLzCvG = accounts[5]
		const addressJGVt1F = accounts[0]
		const addressIovQCE3 = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addresspJLzCvG, addressJGVt1F, addressIovQCE3, {from: accounts[2]});
		const uintmLwkIkv = BigInt("1232")
		const uintf84b8M5 = BigInt("45")
		const stringsA87tur = "TGkAtDxXPptsqplrRQBah1djqd7b46S3VtJEqx6tlWsp3JBCuuzxPKcVLiZw89PRHUGWQVvqFXGlKTc7zM1SAfpItuyp"
		const stringceDrlkE = "vG9kQq9no2E209T3bWAKdBIG8z1ED4acDMxy45y9zb99TtbP6EwPrBLY"
		const uintu1zPTVw = BigInt("446")
		const uintnwaAPpa = BigInt("93")
		const uintH57ZVm = BigInt("194")
		const stringiBZBUjb = await GardenContractV2nUkl6J1.decompose.call(stringsA87tur, uintf84b8M5, uintmLwkIkv, {from: accounts[3]});
		const uint256BWeoEC7 = await GardenContractV2nUkl6J1.totalTLPGrown.call(stringceDrlkE, {from: accounts[2]});
		const uint8H6cTES = await GardenContractV2nUkl6J1.operationBurnMint.call(uintH57ZVm, uintnwaAPpa, uintu1zPTVw, {from: accounts[3]});

		await expect(GardenContractV2nUkl6J1.decompose.call(stringsA87tur, uintf84b8M5, uintmLwkIkv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJT6lCQd = accounts[5]
		const addresssDMsW4H = accounts[0]
		const addresspKjyxLD = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addressJT6lCQd, addresssDMsW4H, addresspKjyxLD, {from: accounts[2]});
		const uintltGtZmn = BigInt("114")
		const stringV2koi4z = "rBxlCKIwkT3bLsp"
		const stringceDrlkE = "vG9kQq9noq2E209T3bWAKdBIG8z1ED4acDMxy45y9zb99TtbP6EwPrBLY"
		const uintvwUxQr = BigInt("161")
		const uintIweloLC = BigInt("171")
		const stringzE6dkMm = await GardenContractV2nUkl6J1.claimDecompose.call(stringV2koi4z, uintltGtZmn, {from: accounts[1]});
		const uint256BWeoEC7 = await GardenContractV2nUkl6J1.totalTLPGrown.call(stringceDrlkE, {from: accounts[2]});
		const uint8lLG3HWs = await GardenContractV2nUkl6J1.setTimeStamp.call(uintIweloLC, uintvwUxQr, {from: accounts[5]});

		await expect(GardenContractV2nUkl6J1.claimDecompose.call(stringV2koi4z, uintltGtZmn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressm1azAVX = accounts[5]
		const addressRJLN7Dm = accounts[0]
		const addresswXOPUYA = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addressm1azAVX, addressRJLN7Dm, addresswXOPUYA, {from: accounts[2]});
		const stringYvIDYqN = "NKkCtnr38VtY64hFCJOAZ21ECCzoBxqGCUqEQrY51wi4DUBif4n9l"
		const addressETLtCNV = accounts[2]
		const uintRhkRzTm = BigInt("242")
		const string775LsT = "qmMgnAtpywqgeUh96zBdpiAp7tUHgvMwDcLYhP76BtWaSHMZDUBmVj1yBVEDHYBJOqA94U2zlQQL3aiHF"
		const uintx2ndyRl = BigInt("115")
		const uint256Kaoiuwr = await GardenContractV2nUkl6J1.balanceOf.call(addressETLtCNV, stringYvIDYqN, {from: accounts[5]});
		await GardenContractV2nUkl6J1.totalBedSupply.call(string775LsT, uintRhkRzTm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VI9SpLS = await GardenContractV2nUkl6J1.getTotalrTLPHarvest.call(uintx2ndyRl, {from: accounts[4]});

		await expect(GardenContractV2nUkl6J1.balanceOf.call(addressETLtCNV, stringYvIDYqN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQTvW8tw = accounts[5]
		const addresskiYaAmI = accounts[0]
		const addressKX8SL7T = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addressQTvW8tw, addresskiYaAmI, addressKX8SL7T, {from: accounts[2]});
		const uintrdbjgGY = BigInt("92")
		const boolUT2QzFt = false
		const uintxRSyLmx = BigInt("231")
		const stringrPkSTK9 = "rP59"
		const uintYfR5HEv = BigInt("987")
		const uintoWjJEcC = BigInt("75")
		const uint256mDB0Gz = await GardenContractV2nUkl6J1.getTotalsTLPHarvest.call(uintrdbjgGY, {from: accounts[4]});
		const uint256oAc5UM = await GardenContractV2nUkl6J1.plant.call(uintYfR5HEv, stringrPkSTK9, uintxRSyLmx, boolUT2QzFt, {from: accounts[4]});
		const uint256VI9SpLS = await GardenContractV2nUkl6J1.getTotalrTLPHarvest.call(uintoWjJEcC, {from: accounts[4]});

		await expect(GardenContractV2nUkl6J1.getTotalsTLPHarvest.call(uintrdbjgGY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressPJgxk4 = accounts[5]
		const addressBCoza76 = accounts[0]
		const addressgGZyiw2 = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addressPJgxk4, addressBCoza76, addressgGZyiw2, {from: accounts[2]});
		const uintjQ3Umpo = BigInt("195")
		const stringaxo7PA = "dWCfgKRzlWJQKYqhvVP7VgGsmWu58NR"
		const addressAI9JgPo = accounts[4]
		const uintBi8PqC = BigInt("135")
		const stringquq76v6 = "uOgzpfN5hmMKx7"
		const uint256lVwgqZF = await GardenContractV2nUkl6J1.growthRemaining.call(addressAI9JgPo, stringaxo7PA, uintjQ3Umpo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VI9SpLS = await GardenContractV2nUkl6J1.getTotalrTLPHarvest.call(uintBi8PqC, {from: accounts[4]});
		const uint256DuLJcPx = await GardenContractV2nUkl6J1.totalTLPDecomposed.call(stringquq76v6, {from: accounts[3]});

		await expect(GardenContractV2nUkl6J1.growthRemaining.call(addressAI9JgPo, stringaxo7PA, uintjQ3Umpo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressDblmxFr = accounts[5]
		const addressHm3RJoi = accounts[0]
		const addressMDo9Xve = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addressDblmxFr, addressHm3RJoi, addressMDo9Xve, {from: accounts[2]});
		const boolEpq66E = true
		const uintdyXycyP = BigInt("247")
		const stringNSyGROk = "dm1483JtnD4jBs1Vx8XdO9HCXh7yYdUElkCsYhRYJUblcOm"
		const uintF6NFOrk = BigInt("814")
		const stringceDrlkE = "vG9kQq9noq2E209T3bWAKdBIG8z1ED4acDMxy45y9zb99TtbP6EwPrBLY"
		const uint256yXQNU4D = await GardenContractV2nUkl6J1.plant.call(uintF6NFOrk, stringNSyGROk, uintdyXycyP, boolEpq66E, {from: accounts[4]});
		const uint256BWeoEC7 = await GardenContractV2nUkl6J1.totalTLPGrown.call(stringceDrlkE, {from: accounts[2]});

		await expect(GardenContractV2nUkl6J1.plant.call(uintF6NFOrk, stringNSyGROk, uintdyXycyP, boolEpq66E, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressIlZJncJ = accounts[5]
		const addressX1rpGqS = accounts[0]
		const addressX52nJDo = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addressIlZJncJ, addressX1rpGqS, addressX52nJDo, {from: accounts[2]});
		const uintcqsCudp = BigInt("216")
		const stringMtftxbo = "iNjSl5EjVDpiHaGu3kRX1T8Bs0fzs3sW639W0DRj790LN8wOGfYl71QjpbmTgw76pVQNofmQV"
		const stringYvIDYqN = "NKkCtnr38VtY64hFCJOAZ21ECCzoBxqGCUqEQrY51wi4DUBif4n9l"
		const addresso9FQCB = accounts[2]
		const uintimbq3ft = BigInt("242")
		const string775LsT = "qmMgnAtpywqgeUh96zBdpiAp7tUHgvMwDcLYhP76BtWaSHMZDUBmVj1BVEDHYBJOqA94U2zlQQL3aiHF"
		const stringbAnwNA4 = await GardenContractV2nUkl6J1.withdraw.call(stringMtftxbo, uintcqsCudp, {from: accounts[3]});
		const uint256Kaoiuwr = await GardenContractV2nUkl6J1.balanceOf.call(addresso9FQCB, stringYvIDYqN, {from: accounts[5]});
		await GardenContractV2nUkl6J1.totalBedSupply.call(string775LsT, uintimbq3ft, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2nUkl6J1.withdraw.call(stringMtftxbo, uintcqsCudp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressm3IN2S5 = accounts[1]
		const addressfjNfxrk = accounts[2]
		const addresscW3vTmz = accounts[1]
		const GardenContractV2nwrYdlb = await GardenContractV2.new(addressm3IN2S5, addressfjNfxrk, addresscW3vTmz, {from: accounts[3]});
		const stringA4YAXUG = "l76YvyHPtjsD7KHpugks5A2tKcx9nHefklH1UkhuukOpSjISmGqeCyBLDOr"
		const stringmCBi9le = "LBdbVLOPmvvyKfXEf5cHSixtYLNn8yoAuo7gBRSzUDG4odLkRAkezIbP7VxezpVoWTmtnhnB8ToJ9c0dMWsuz"
		const stringv9k5E0b = "HZWVXFNwNhRT"
		const stringm7ZtGuV = await GardenContractV2nwrYdlb.harvestAllBeds.call(stringA4YAXUG, {from: accounts[3]});
		const stringjloTQa4 = await GardenContractV2nwrYdlb.harvestAllBeds.call(stringmCBi9le, {from: accounts[0]});
		const uint256f3Javz9 = await GardenContractV2nwrYdlb.totalGardenSupply.call(stringv9k5E0b, {from: accounts[0]});

		await expect(GardenContractV2nwrYdlb.harvestAllBeds.call(stringA4YAXUG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressw1Iy8Yp = accounts[5]
		const addresspN6ue3 = accounts[0]
		const addressmqwC0wT = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addressw1Iy8Yp, addresspN6ue3, addressmqwC0wT, {from: accounts[2]});
		const uintgo99FUE = BigInt("10")
		const uintSEwe3ij = BigInt("254")
		const stringJvS31rA = "lEIlPitaLGC1aFnOZj2JNHxU8yOcKN8ueZNRbAP8rA7HL8"
		const uintdXgjRl = BigInt("15")
		const stringfdQar5y = "l69AraYEPIBNBfuVbmYo2ICRYSihcSEvnDhmxLjcfklUU86jKyZenGGEsJL"
		const addressLIx6uzd = accounts[5]
		const addressCLtjGM = accounts[3]
		const uintXICJ0xw = BigInt("150")
		const stringNzo18rk = "IQEWSKkROR9T5cDJH8EVi5qBkauURvLGkUv4r9GHFr0heWItkd2hEOvUol8Q1UPBNR1"
		const uintdQc5RP = BigInt("16")
		const stringbRIFzd = "Lrvz5s7s4ld3Tmjdw1gARTKu0o99KnjbQ"
		const uint256VI9SpLS = await GardenContractV2nUkl6J1.getTotalrTLPHarvest.call(uintgo99FUE, {from: accounts[4]});
		const stringPc1j7Xk = await GardenContractV2nUkl6J1.claimDecompose.call(stringJvS31rA, uintSEwe3ij, {from: "0x0000000000000000000000000000000000000001"});
		await GardenContractV2nUkl6J1.totalBedSupply.call(stringfdQar5y, uintdXgjRl, {from: accounts[4]});
		const addresskdY3nbn = await GardenContractV2nUkl6J1.addTokenOwner.call(addressCLtjGM, addressLIx6uzd, {from: accounts[3]});
		const stringYPs1kme = await GardenContractV2nUkl6J1.claimDecompose.call(stringNzo18rk, uintXICJ0xw, {from: accounts[0]});
		const stringJTbbatm = await GardenContractV2nUkl6J1.harvest.call(stringbRIFzd, uintdQc5RP, {from: accounts[3]});

		await expect(GardenContractV2nUkl6J1.getTotalrTLPHarvest.call(uintgo99FUE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressk7nBB9K = accounts[2]
		const addressvGZ7YI = accounts[0]
		const addressjADqlVi = accounts[2]
		const GardenContractV2XAY3M9A = await GardenContractV2.new(addressk7nBB9K, addressvGZ7YI, addressjADqlVi, {from: accounts[1]});
		const addressUinA1Er = accounts[3]
		const uintxTFiLRJ = BigInt("73")
		const addressA8ZIleC = await GardenContractV2XAY3M9A.changeOwner.call(addressUinA1Er, {from: accounts[1]});
		const uint256heKhVm = await GardenContractV2XAY3M9A.getTotalrTLPHarvest.call(uintxTFiLRJ, {from: accounts[4]});

		await expect(GardenContractV2XAY3M9A.getTotalrTLPHarvest.call(uintxTFiLRJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresskyWcpED = accounts[5]
		const addressMB19vpR = accounts[0]
		const addressO1AbQHN = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addresskyWcpED, addressMB19vpR, addressO1AbQHN, {from: accounts[2]});
		const addressLxNKqIo = accounts[0]
		const addressvtbIeif = accounts[3]
		const stringceDrlkE = "vG9kQq9noq2E209T3bWAKdBIG28z1ED4acDMxy45y9zb99TtbP6EwPrBLY"
		const addressVBQypUV = await GardenContractV2nUkl6J1.addTokenOwner.call(addressvtbIeif, addressLxNKqIo, {from: accounts[2]});
		const uint256BWeoEC7 = await GardenContractV2nUkl6J1.totalTLPGrown.call(stringceDrlkE, {from: accounts[2]});

		await expect(GardenContractV2nUkl6J1.addTokenOwner.call(addressvtbIeif, addressLxNKqIo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressSfxtd31 = accounts[5]
		const addressr3OHvrR = accounts[0]
		const addressjRU3IW7 = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addressSfxtd31, addressr3OHvrR, addressjRU3IW7, {from: accounts[2]});
		const addressKpywTtA = accounts[5]
		const uintFHO5X1t = BigInt("105")
		const stringLknSy94 = "n75dfcV0n928gojLGmG7L9XeM5VXcRU3ePZ2gtVUiekwQ"
		const address4BNHl7 = accounts[1]
		const stringGEa65XP = "qO11C1yW11GDfkb9kqzsJyWYQv3meCNoVkeJko7SZyfPJgaOvLugeKy3LfrDLwNgFppzahhMkeRfKJbSaeM"
		const addresssYxrilu = accounts[4]
		const addressynnC4DR = await GardenContractV2nUkl6J1.changeBenefitiary.call(addressKpywTtA, {from: accounts[2]});
		const uint256ff4DF6Z = await GardenContractV2nUkl6J1.growthRemaining.call(address4BNHl7, stringLknSy94, uintFHO5X1t, {from: accounts[3]});
		const uint256GPY9mvv = await GardenContractV2nUkl6J1.balanceOf.call(addresssYxrilu, stringGEa65XP, {from: accounts[4]});

		await expect(GardenContractV2nUkl6J1.growthRemaining.call(address4BNHl7, stringLknSy94, uintFHO5X1t, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressHp5NO7n = accounts[5]
		const addressxG0QXNL = accounts[0]
		const addressNpU2zIS = accounts[0]
		const GardenContractV2nUkl6J1 = await GardenContractV2.new(addressHp5NO7n, addressxG0QXNL, addressNpU2zIS, {from: accounts[2]});
		const addressHrox3so = accounts[1]
		const uintQnpSzq = BigInt("104")
		const boolh65rzJv = false
		const uintrJqKKkl = BigInt("213")
		const string1AwO25 = "vhOHNbIP"
		const uintPEvcQKY = BigInt("1330")
		const addressOxFfP2u = await GardenContractV2nUkl6J1.renounceTokenOwner.call(addressHrox3so, {from: accounts[2]});
		const uint256VI9SpLS = await GardenContractV2nUkl6J1.getTotalrTLPHarvest.call(uintQnpSzq, {from: accounts[4]});
		const uint256RQJq4Tf = await GardenContractV2nUkl6J1.plant.call(uintPEvcQKY, string1AwO25, uintrJqKKkl, boolh65rzJv, {from: accounts[0]});

		await expect(GardenContractV2nUkl6J1.renounceTokenOwner.call(addressHrox3so, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})