const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressoIVHGnb = accounts[2]
		const addresssKNlabu = accounts[3]
		const addressd0HtP89 = accounts[2]
		const GardenContractV2OQyrBcp = await GardenContractV2.new(addressoIVHGnb, addresssKNlabu, addressd0HtP89, {from: accounts[5]});
		const stringYGNKOXo = "1afCYF4oqc6Y01iHKvgyIwPm6Xh2qK483gN6wmHhEWV1B4q6pvt"
		const uinti5pTtKj = BigInt("130")
		const stringlNXP5Bz = "vci2mVu3ynjFt0I5tVVZ"
		const addressCCI6rCH = accounts[3]
		const addressbUNtWeq = accounts[4]
		const addresswg2gGMr = "0x0000000000000000000000000000000000000001"
		const addresseVSyO40 = accounts[2]
		const uint256GKsHHZv = await GardenContractV2OQyrBcp.totalTLPGrowing.call(stringYGNKOXo, {from: accounts[4]});
		const uint256W6aD06Q = await GardenContractV2OQyrBcp.growthRemaining.call(addressCCI6rCH, stringlNXP5Bz, uinti5pTtKj, {from: accounts[2]});
		const address6eHtUx = await GardenContractV2OQyrBcp.changeBenefitiary.call(addressbUNtWeq, {from: accounts[3]});
		const addressOBh4m5s = await GardenContractV2OQyrBcp.addTokenOwner.call(addresseVSyO40, addresswg2gGMr, {from: accounts[0]});

		await expect(GardenContractV2OQyrBcp.totalTLPGrowing.call(stringYGNKOXo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressMzFa0lc = accounts[4]
		const addressO369q6o = accounts[4]
		const addressO7t8wX = accounts[5]
		const GardenContractV2skHVCZY = await GardenContractV2.new(addressMzFa0lc, addressO369q6o, addressO7t8wX, {from: accounts[5]});
		const uintzS3tLlC = BigInt("250")
		const stringxyAy9l = "jfCAxRUv4RV3t3Weyi9i3PQvkWQLV4td2bdr7DD0yGGbSxR2"
		const stringBnAXFrb = "Q997jOIh96JJ07yrsKNDeAQgyHsPFMPvPULDG"
		const uintXPlHNIw = BigInt("45")
		const uintASey1vM = BigInt("129")
		const stringx95hLi5 = await GardenContractV2skHVCZY.claimDecompose.call(stringxyAy9l, uintzS3tLlC, {from: accounts[4]});
		const uint256IMDt41C = await GardenContractV2skHVCZY.totalTLPGrowing.call(stringBnAXFrb, {from: accounts[4]});
		const uint8xGdFp9C = await GardenContractV2skHVCZY.setTimeStamp.call(uintASey1vM, uintXPlHNIw, {from: accounts[0]});

		await expect(GardenContractV2skHVCZY.claimDecompose.call(stringxyAy9l, uintzS3tLlC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresschHNcJu = "0x0000000000000000000000000000000000000001"
		const addresshoSjEv2 = accounts[2]
		const addressxrpkGmg = accounts[2]
		const GardenContractV2K9StqKE = await GardenContractV2.new(addresschHNcJu, addresshoSjEv2, addressxrpkGmg, {from: accounts[0]});
		const stringR5rn6qd = "LUw92PjpcUDSPvmpb7T5yZGQ6Iaxz9j1JuJMnkXNbbpb7v12EnEnj77SeC3ViVW8zoei6Ebny"
		const stringISXwXM = "mY5GVoS"
		const uintoDxzave = BigInt("79")
		const stringOCwrko4 = "rzmak41EDXBKNtgR25AmPwFnf5n22tQAxIhllmW09OC9idMEin9p8BwpPdJuVi6Smg3Gz7bsMDZZNOPM"
		const boolFKvuI0Z = true
		const uintLHui6WZ = BigInt("3")
		const stringkyCMoeg = "jCzcWFl8FBpuA78ajAp9CTMadwViwVmggThmJU869D"
		const uintWXaEqw8 = BigInt("1543")
		const uint256oU9R5Tr = await GardenContractV2K9StqKE.totalGardenSupply.call(stringR5rn6qd, {from: accounts[0]});
		const uint256xlLNd9 = await GardenContractV2K9StqKE.totalGardenSupply.call(stringISXwXM, {from: "0x0000000000000000000000000000000000000001"});
		const stringmptrgGc = await GardenContractV2K9StqKE.claimDecompose.call(stringOCwrko4, uintoDxzave, {from: accounts[1]});
		const uint256BooDgpi = await GardenContractV2K9StqKE.plant.call(uintWXaEqw8, stringkyCMoeg, uintLHui6WZ, boolFKvuI0Z, {from: accounts[4]});

		await expect(GardenContractV2K9StqKE.totalGardenSupply.call(stringR5rn6qd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressdI86Fj = "0x0000000000000000000000000000000000000001"
		const addresskVqPBFP = accounts[3]
		const addressZqJM8fk = accounts[0]
		const GardenContractV2vbjfDL = await GardenContractV2.new(addressdI86Fj, addresskVqPBFP, addressZqJM8fk, {from: accounts[2]});
		const uintESJFhbO = BigInt("99")
		const uint9ivuko = BigInt("889")
		const uinti6jHpKP = BigInt("115")
		const stringyy2kSvU = "XAnWmafE0uA4VTfToxaTvm4qeMvxeP0uQmOFlSZ6bmIK2PyIN2TeSJDdQTkAwQEdVNUEwwsbjA3UIN3i7fTUmlXL9X"
		const uintg8qCfsI = BigInt("219")
		const uintbkd0QpO = BigInt("252")
		const uintZVL15Q3 = BigInt("9")
		const stringqZN3Ax2 = "1qlDvWGdgnwPlk5eWNJdmqSVKabmbjR71ru5"
		const addresspgsD3gk = accounts[1]
		const addressWZz0IZS = accounts[0]
		const uint256GpA7o5O = await GardenContractV2vbjfDL.getTotalsTLPHarvest.call(uintESJFhbO, {from: accounts[2]});
		const stringTshg31Q = await GardenContractV2vbjfDL.decompose.call(stringyy2kSvU, uinti6jHpKP, uint9ivuko, {from: accounts[0]});
		const uint8wd7G0dT = await GardenContractV2vbjfDL.zeroHoldings.call(uintbkd0QpO, uintg8qCfsI, {from: accounts[2]});
		const uint256gH0HCA = await GardenContractV2vbjfDL.timeUntilNextTLP.call(stringqZN3Ax2, uintZVL15Q3, {from: accounts[4]});
		const addresshTsOquA = await GardenContractV2vbjfDL.addTokenOwner.call(addressWZz0IZS, addresspgsD3gk, {from: accounts[5]});

		await expect(GardenContractV2vbjfDL.getTotalsTLPHarvest.call(uintESJFhbO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressFmKURq = accounts[1]
		const addresssojbBf0 = accounts[0]
		const addressCrsi7Hj = accounts[2]
		const GardenContractV2TFQjDz = await GardenContractV2.new(addressFmKURq, addresssojbBf0, addressCrsi7Hj, {from: "0x0000000000000000000000000000000000000001"});
		const uintyepLOXB = BigInt("151")
		const uintbz7pFww = BigInt("210")
		const uintRAeVuPr = BigInt("183")
		const addressQATvIf5 = accounts[4]
		const uint256UJQkDXG = await GardenContractV2TFQjDz.getTotalsTLPHarvest.call(uintyepLOXB, {from: accounts[4]});
		const uint8CvthjHh = await GardenContractV2TFQjDz.setTimeStamp.call(uintRAeVuPr, uintbz7pFww, {from: accounts[2]});
		const addressJfbec0b = await GardenContractV2TFQjDz.renounceTokenOwner.call(addressQATvIf5, {from: accounts[1]});
	});

	it('test for GardenContractV2', async () => {
		const addressFTCXSN = accounts[3]
		const addressPqLVpEM = accounts[4]
		const addressxmH3TmN = accounts[5]
		const GardenContractV2dPljITe = await GardenContractV2.new(addressFTCXSN, addressPqLVpEM, addressxmH3TmN, {from: accounts[0]});
		const uintx3m66O = BigInt("1161")
		const uintSHfYrZC = BigInt("179")
		const stringvyflS6x = "TOAWotLjPF"
		const uintE0IGiL = BigInt("86")
		const stringn5VoZcx = "JTUJ5CEJuD21AOC4YrsLIIX4kQ6BkzE79vLP6t8A40DbqFr98hIFQ4F"
		const stringr6vgXuD = ""
		const stringFSxbCT5 = await GardenContractV2dPljITe.decompose.call(stringvyflS6x, uintSHfYrZC, uintx3m66O, {from: accounts[3]});
		const stringKUYPHgz = await GardenContractV2dPljITe.claimDecompose.call(stringn5VoZcx, uintE0IGiL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CwFSx9D = await GardenContractV2dPljITe.totalTLPDecomposed.call(stringr6vgXuD, {from: accounts[0]});

		await expect(GardenContractV2dPljITe.decompose.call(stringvyflS6x, uintSHfYrZC, uintx3m66O, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressP1C5OV = accounts[2]
		const addressmOZ1X75 = accounts[1]
		const addressy5P0Thr = accounts[0]
		const GardenContractV2Bfg9FK = await GardenContractV2.new(addressP1C5OV, addressmOZ1X75, addressy5P0Thr, {from: accounts[1]});
		const addresstXuuZDo = accounts[4]
		const uintb98fTDx = BigInt("58")
		const uintrKKv2r = BigInt("254")
		const addressxM4dCD = await GardenContractV2Bfg9FK.changeBenefitiary.call(addresstXuuZDo, {from: accounts[1]});
		const uint8hWuiJmE = await GardenContractV2Bfg9FK.zeroHoldings.call(uintrKKv2r, uintb98fTDx, {from: accounts[0]});

		await expect(GardenContractV2Bfg9FK.zeroHoldings.call(uintrKKv2r, uintb98fTDx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressnDOCZKa = accounts[3]
		const addresslL6L7Oc = accounts[4]
		const addressa4fd4D8 = accounts[5]
		const GardenContractV2dPljITe = await GardenContractV2.new(addressnDOCZKa, addresslL6L7Oc, addressa4fd4D8, {from: accounts[0]});
		const stringbnvCdh = "LsFnah9WUys9SOXgjfiGjfaHUjhPi1TiK0n5wBmTJvoRoC0i5GlQ3bRrhhKejmlWxrNqXWhuRMoMpFaGbcIUkCNHAjYC"
		const uintpHaHEft = BigInt("1161")
		const uintu4gzj6 = BigInt("179")
		const stringvyflS6x = "TOAWotLjPF"
		const uintKTZSHJR = BigInt("86")
		const stringn5VoZcx = "JTUJ5CEJuD21AOC4YrsLIIX4kQ6BkzE79vLP6t8A40DbqFr98hIFQ4F"
		const stringr6vgXuD = ""
		const uint256dwixloZ = await GardenContractV2dPljITe.totalTLPDecomposed.call(stringbnvCdh, {from: accounts[3]});
		const stringFSxbCT5 = await GardenContractV2dPljITe.decompose.call(stringvyflS6x, uintu4gzj6, uintpHaHEft, {from: accounts[3]});
		const stringKUYPHgz = await GardenContractV2dPljITe.claimDecompose.call(stringn5VoZcx, uintKTZSHJR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CwFSx9D = await GardenContractV2dPljITe.totalTLPDecomposed.call(stringr6vgXuD, {from: accounts[0]});

		await expect(GardenContractV2dPljITe.totalTLPDecomposed.call(stringbnvCdh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressDDXWYtq = accounts[3]
		const addresshaws9xY = accounts[4]
		const addressBAORZMG = accounts[5]
		const GardenContractV2dPljITe = await GardenContractV2.new(addressDDXWYtq, addresshaws9xY, addressBAORZMG, {from: accounts[0]});
		const uinttJbj70N = BigInt("163")
		const stringqQkGL5C = "aJk58aCE6e5Y2ejcwiFdlfTit34rdxpTMGBRbYeSULi7XIfn1fCZlKsyVxcrkmJy"
		const uintcOMTQJl = BigInt("1161")
		const uintmD7cVvm = BigInt("179")
		const stringvyflS6x = "TOAWotLjPF"
		const uintp4DVeR = BigInt("129")
		const uintBRjauyO = BigInt("223")
		const uintoCxYDho = BigInt("86")
		const stringn5VoZcx = "JTUJ5CEJuD21AOC4YrsLIIX4kQ6BkzE79vLP6t8A40DbqFr98hIFQ4F"
		const stringr6vgXuD = ""
		const stringmDSSw0q = await GardenContractV2dPljITe.harvest.call(stringqQkGL5C, uinttJbj70N, {from: accounts[2]});
		const stringFSxbCT5 = await GardenContractV2dPljITe.decompose.call(stringvyflS6x, uintmD7cVvm, uintcOMTQJl, {from: accounts[3]});
		const uint8KQc1MCw = await GardenContractV2dPljITe.setTimeStamp.call(uintBRjauyO, uintp4DVeR, {from: "0x0000000000000000000000000000000000000001"});
		const stringKUYPHgz = await GardenContractV2dPljITe.claimDecompose.call(stringn5VoZcx, uintoCxYDho, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CwFSx9D = await GardenContractV2dPljITe.totalTLPDecomposed.call(stringr6vgXuD, {from: accounts[0]});

		await expect(GardenContractV2dPljITe.harvest.call(stringqQkGL5C, uinttJbj70N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressy9RIHp3 = accounts[1]
		const addressQQE8ifs = accounts[3]
		const addressCbpCWPc = accounts[1]
		const GardenContractV2SA7Ygh5 = await GardenContractV2.new(addressy9RIHp3, addressQQE8ifs, addressCbpCWPc, {from: accounts[4]});
		const uintoKXpeyz = BigInt("183")
		const string8d3CTO = "YOvgzBtXWKdWhba650GbmODnwrr8MEINYZrPgdaiig4WVLUTOVO9IvQyetfcSce"
		const uintiQ9cwXC = BigInt("59")
		const uintZMD7zXG = BigInt("94")
		const uintKjywWuq = BigInt("91")
		const stringPey1vG7 = "oCXtvqoXt10zYmxEsvu7LBy"
		const uintpDcNbFf = BigInt("191")
		const stringa0Knblo = "RM1rGESaq"
		await GardenContractV2SA7Ygh5.totalBedSupply.call(string8d3CTO, uintoKXpeyz, {from: accounts[1]});
		const uint8euDwZIA = await GardenContractV2SA7Ygh5.zeroHoldings.call(uintZMD7zXG, uintiQ9cwXC, {from: accounts[1]});
		await GardenContractV2SA7Ygh5.totalBedSupply.call(stringPey1vG7, uintKjywWuq, {from: accounts[1]});
		const stringzMBRg9x = await GardenContractV2SA7Ygh5.withdraw.call(stringa0Knblo, uintpDcNbFf, {from: accounts[2]});

		await expect(GardenContractV2SA7Ygh5.totalBedSupply.call(string8d3CTO, uintoKXpeyz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressT6pq13d = accounts[4]
		const addressprogqos = accounts[4]
		const addresscOjlfXa = accounts[5]
		const GardenContractV2skHVCZY = await GardenContractV2.new(addressT6pq13d, addressprogqos, addresscOjlfXa, {from: accounts[5]});
		const stringkS2FsJ = "hYNXRhWtKffI9Tn1G3m1X9FrBNPcudrAtThNOTVPfZESS7yHagT"
		const addressz9sQTY = accounts[0]
		const uintPtuHzwj = BigInt("149")
		const stringdTlidXS = "6RCURSAJvlBsSAysEbjdPZv"
		const addressX8ja1xZ = accounts[1]
		const uintGg0DN1A = BigInt("250")
		const stringxyAy9l = "jfCAxRUv4RV3t3Weyi9i3PQvkWQLV4td2bdr7DD0yGGbSxR2"
		const stringBnAXFrb = "Q997jOIh96JJ07yrsKNDeAQgyHsPFMPvPULDG"
		const uintAeKpQy1 = BigInt("45")
		const uintfvyG88I = BigInt("129")
		const uint256Prv4sq5 = await GardenContractV2skHVCZY.balanceOf.call(addressz9sQTY, stringkS2FsJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256XvNPZZb = await GardenContractV2skHVCZY.growthRemaining.call(addressX8ja1xZ, stringdTlidXS, uintPtuHzwj, {from: accounts[1]});
		const stringx95hLi5 = await GardenContractV2skHVCZY.claimDecompose.call(stringxyAy9l, uintGg0DN1A, {from: accounts[4]});
		const uint256IMDt41C = await GardenContractV2skHVCZY.totalTLPGrowing.call(stringBnAXFrb, {from: accounts[4]});
		const uint8xGdFp9C = await GardenContractV2skHVCZY.setTimeStamp.call(uintfvyG88I, uintAeKpQy1, {from: accounts[0]});

		await expect(GardenContractV2skHVCZY.balanceOf.call(addressz9sQTY, stringkS2FsJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressjtkiOBo = accounts[2]
		const addressp8ZOiP7 = accounts[1]
		const addresstytGuqT = accounts[0]
		const GardenContractV2Bfg9FK = await GardenContractV2.new(addressjtkiOBo, addressp8ZOiP7, addresstytGuqT, {from: accounts[1]});
		const uintHPGJCms = BigInt("240")
		const uintQK8elX = BigInt("224")
		const uintBH71jKt = BigInt("211")
		const addressLxNOVg5 = accounts[5]
		const uint256QOUtvSE = await GardenContractV2Bfg9FK.getTotalrTLPHarvest.call(uintHPGJCms, {from: accounts[2]});
		const uint8F5FFjd7 = await GardenContractV2Bfg9FK.setTimeStamp.call(uintBH71jKt, uintQK8elX, {from: accounts[3]});
		const addressxM4dCD = await GardenContractV2Bfg9FK.changeBenefitiary.call(addressLxNOVg5, {from: accounts[1]});

		await expect(GardenContractV2Bfg9FK.getTotalrTLPHarvest.call(uintHPGJCms, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressObl0gEp = accounts[3]
		const addresszPaFnAz = accounts[4]
		const addressR35syaD = accounts[5]
		const GardenContractV2dPljITe = await GardenContractV2.new(addressObl0gEp, addresszPaFnAz, addressR35syaD, {from: accounts[0]});
		const addressIijw4cB = accounts[2]
		const uint7NJcdT = BigInt("86")
		const stringn5VoZcx = "JTUJ5CEJuD21AOC4YrsLIIX4kQ6BkzE79vLP6t8A40DbqFr98hIFQ4F"
		const stringwyL6DnA = "iZTkHbvoKeNxnWPXckqtwksu1cy9enVryYUEqF93RlS1p6yN2UekqPUobWmTWe7GjH6VHhkLc9WqisAoHTn67AjrtKsvaLpK7k"
		const stringr6vgXuD = ""
		const addressjPAvtlq = await GardenContractV2dPljITe.renounceTokenOwner.call(addressIijw4cB, {from: accounts[5]});
		const stringKUYPHgz = await GardenContractV2dPljITe.claimDecompose.call(stringn5VoZcx, uint7NJcdT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jELNReR = await GardenContractV2dPljITe.totalTLPGrown.call(stringwyL6DnA, {from: accounts[4]});
		const uint256CwFSx9D = await GardenContractV2dPljITe.totalTLPDecomposed.call(stringr6vgXuD, {from: accounts[0]});

		await expect(GardenContractV2dPljITe.renounceTokenOwner.call(addressIijw4cB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscc6fxdw = accounts[4]
		const addressaQoBQcJ = accounts[4]
		const addressHSFnDYC = accounts[5]
		const GardenContractV2skHVCZY = await GardenContractV2.new(addresscc6fxdw, addressaQoBQcJ, addressHSFnDYC, {from: accounts[5]});
		const addressmdIU0gM = accounts[2]
		const addressn7rKnJ1 = accounts[0]
		const uintuT0iSFM = BigInt("181")
		const stringgvu9ycx = "OHE3Z2ck8WrUSGm8DHPDCpZdug9djS7ANT0B5MK7Nhel4NJo"
		const stringBnAXFrb = "Q997jOIh96JJ07yrsKNDeAQgyHsPFMPvPULDG"
		const uintkl7nhZD = BigInt("45")
		const uintPXklu9j = BigInt("129")
		const addressyCGUxNX = await GardenContractV2skHVCZY.changeOwner.call(addressmdIU0gM, {from: accounts[5]});
		const addressuI4hYmu = await GardenContractV2skHVCZY.changeOwner.call(addressn7rKnJ1, {from: accounts[4]});
		const stringklwlF9S = await GardenContractV2skHVCZY.withdraw.call(stringgvu9ycx, uintuT0iSFM, {from: accounts[4]});
		const uint256IMDt41C = await GardenContractV2skHVCZY.totalTLPGrowing.call(stringBnAXFrb, {from: accounts[4]});
		const uint8xGdFp9C = await GardenContractV2skHVCZY.setTimeStamp.call(uintPXklu9j, uintkl7nhZD, {from: accounts[0]});

		await expect(GardenContractV2skHVCZY.changeOwner.call(addressn7rKnJ1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressztdNsif = accounts[4]
		const addressIj3tXVu = accounts[4]
		const addressjURkYN1 = accounts[5]
		const GardenContractV2skHVCZY = await GardenContractV2.new(addressztdNsif, addressIj3tXVu, addressjURkYN1, {from: accounts[5]});
		const uintMNCxy1x = BigInt("149")
		const stringdTlidXS = "6RCURSAJvlBsSAysEbjdPZv"
		const addressc0K2w7H = accounts[1]
		const stringOQGgIk0 = "UGdxu"
		const stringIm9BLss = "eYuWcEbXH6EOE4rBkYm3FRMV0qmMA1xz2A1kY6lI8xuxYSi"
		const uintWBDhP5q = BigInt("250")
		const stringxyAy9l = "jfCAxRUv4RV3t3Weyi9i3PQvkWQLV4td2bdr7DD0yGGbSxR2"
		const stringBnAXFrb = "Q99sjOIh96JJ07yrsKNDeAQgyHsPFMPvPULDG"
		const uint256XvNPZZb = await GardenContractV2skHVCZY.growthRemaining.call(addressc0K2w7H, stringdTlidXS, uintMNCxy1x, {from: accounts[1]});
		const uint256ghya4ZJ = await GardenContractV2skHVCZY.totalGardenSupply.call(stringOQGgIk0, {from: accounts[0]});
		const uint256FshJWnx = await GardenContractV2skHVCZY.totalTLPDecomposed.call(stringIm9BLss, {from: accounts[1]});
		const stringx95hLi5 = await GardenContractV2skHVCZY.claimDecompose.call(stringxyAy9l, uintWBDhP5q, {from: accounts[4]});
		const uint256IMDt41C = await GardenContractV2skHVCZY.totalTLPGrowing.call(stringBnAXFrb, {from: accounts[4]});

		await expect(GardenContractV2skHVCZY.growthRemaining.call(addressc0K2w7H, stringdTlidXS, uintMNCxy1x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressZrUyfT9 = accounts[3]
		const addressxlC6b1W = accounts[4]
		const addressTZpAjX = accounts[5]
		const GardenContractV2dPljITe = await GardenContractV2.new(addressZrUyfT9, addressxlC6b1W, addressTZpAjX, {from: accounts[0]});
		const uintx3vQUTl = BigInt("111")
		const stringPspNVUC = "avT9VNfQ4igUrgTXpEoqO6e8Nat2JlJz7jrGcSAikUS8UoUqmAIy2tY1zzLt87430MW"
		const uintw1NWepD = BigInt("86")
		const stringn5VoZcx = "JTUJ5CEJuD21AOC4YrsLIIX4kQ6BkzE79vLP6t8A40DbqFr98hIFQ4F"
		const stringr6vgXuD = ""
		const stringfWuNhT = await GardenContractV2dPljITe.withdraw.call(stringPspNVUC, uintx3vQUTl, {from: accounts[2]});
		const stringKUYPHgz = await GardenContractV2dPljITe.claimDecompose.call(stringn5VoZcx, uintw1NWepD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CwFSx9D = await GardenContractV2dPljITe.totalTLPDecomposed.call(stringr6vgXuD, {from: accounts[0]});

		await expect(GardenContractV2dPljITe.withdraw.call(stringPspNVUC, uintx3vQUTl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressOxYS8lS = accounts[4]
		const addressmmMum6R = accounts[1]
		const addressWBSsiUL = accounts[3]
		const GardenContractV2zL6IL7j = await GardenContractV2.new(addressOxYS8lS, addressmmMum6R, addressWBSsiUL, {from: accounts[2]});
		const stringNYXDKbT = "KPP7VdGnJIIzsueAjViSQt3VHmkxvg8m9KImUv85YkexqwQdS5uyT0Ja2E2lIbB4XTiR"
		const stringe0vbAas = "aghzz143fwrvsNWDu6PVFNyLeXvuaY6hTferHexcWh3GW07JadoLoci6TiGAYicr0"
		const string2KHqbT = "CmBxz4VcfuSflQuIhTAqaIuQ6Lyrh1zLzgRjmJM0jHsmCQIdns"
		const uintnfsyddt = BigInt("2")
		const uinttq7Dc30 = BigInt("236")
		const stringlqFL4gc = "cVxvWEXhMbXEthPWI4luaOhtog3FOiNOGzl"
		const uint256e4w7GT8 = await GardenContractV2zL6IL7j.totalTLPGrown.call(stringNYXDKbT, {from: accounts[5]});
		const uint256vRzsJYW = await GardenContractV2zL6IL7j.totalTLPBurnt.call(stringe0vbAas, {from: accounts[2]});
		const uint256ySMvmcL = await GardenContractV2zL6IL7j.totalGardenSupply.call(string2KHqbT, {from: accounts[2]});
		const uint256VS4QLrY = await GardenContractV2zL6IL7j.getTotalsTLPHarvest.call(uintnfsyddt, {from: accounts[2]});
		const stringf6Tm6qo = await GardenContractV2zL6IL7j.claimDecompose.call(stringlqFL4gc, uinttq7Dc30, {from: accounts[4]});

		await expect(GardenContractV2zL6IL7j.totalTLPGrown.call(stringNYXDKbT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressH6H0xn = accounts[4]
		const addressmapNIG = accounts[4]
		const addressh9f4Xcz = accounts[5]
		const GardenContractV2skHVCZY = await GardenContractV2.new(addressH6H0xn, addressmapNIG, addressh9f4Xcz, {from: accounts[5]});
		const boolZnYX9L2 = true
		const uinthZcRLQJ = BigInt("26")
		const stringeCXvZJI = "AkSxswOhPVMOf7WoV6Q1KkiFApLl3znN1WgghvasBomtqHtPHvmqbGrdwKACmpfLuwHdyczbgADwOIntNS4T2T9iekQA"
		const uintelnGNhS = BigInt("1409")
		const stringBnAXFrb = "Q997jOIh96J07yrsKNDeAQgyHsPFMPvPULDG"
		const uint256BxhPEuG = await GardenContractV2skHVCZY.plant.call(uintelnGNhS, stringeCXvZJI, uinthZcRLQJ, boolZnYX9L2, {from: accounts[3]});
		const uint256IMDt41C = await GardenContractV2skHVCZY.totalTLPGrowing.call(stringBnAXFrb, {from: accounts[4]});

		await expect(GardenContractV2skHVCZY.plant.call(uintelnGNhS, stringeCXvZJI, uinthZcRLQJ, boolZnYX9L2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressw4XOryD = accounts[3]
		const addressP3oGzvc = accounts[5]
		const addressth4oS9 = accounts[0]
		const GardenContractV2EspCqct = await GardenContractV2.new(addressw4XOryD, addressP3oGzvc, addressth4oS9, {from: accounts[0]});
		const uintdjr0QA = BigInt("119")
		const stringSM6TMyg = "2aJL9BdUdOczxH7XqHlhd5hTTZwJLTxrkbSkHjae5YjcKVzQEGGmQcvXhDmDGkaYMzc1FdW1Jm9nluiqk1ZYz1M6us"
		const boolGioPs9X = true
		const uintPtl16gR = BigInt("11")
		const stringthF1b6j = "P3QU8j7ma41UAMuIeN9eALdISV0xpU"
		const uintrPxbM8j = BigInt("584")
		const uint256Q0jubiE = await GardenContractV2EspCqct.timeUntilNextTLP.call(stringSM6TMyg, uintdjr0QA, {from: accounts[3]});
		const uint256Ork7Pxl = await GardenContractV2EspCqct.plant.call(uintrPxbM8j, stringthF1b6j, uintPtl16gR, boolGioPs9X, {from: accounts[2]});

		await expect(GardenContractV2EspCqct.timeUntilNextTLP.call(stringSM6TMyg, uintdjr0QA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressIKwthe6 = accounts[4]
		const addressvVV4y7D = accounts[4]
		const addressR1nnqa6 = accounts[5]
		const GardenContractV2skHVCZY = await GardenContractV2.new(addressIKwthe6, addressvVV4y7D, addressR1nnqa6, {from: accounts[5]});
		const uintROKq3k = BigInt("10")
		const stringCxONk9C = "9GnLgwMAoWUoCnpoXO2rZcTmx4YCQLr4"
		const addressNH3JUnJ = accounts[1]
		const stringkS2FsJ = "hYNXRhWtKffI9Tn1G3m1X9FrBNPcudrAtThNOTVPfZESS7yHagT"
		const addressu0eb2tg = accounts[5]
		const uintfaQR3U = BigInt("76")
		const stringoaAUoOv = "0uSdVF2lfzxAEO2CWGKgz35qOUHVMC9YiUs3qzlzQlIpGi32fUFkxMQrDiBRo5kuR"
		const stringUgmBaSB = "0692fa1BBuB2Ub8u3MtLvpLOCsayHt44HUBuGTSD3y9lX240lxe64i"
		const uintUzdqWxZ = BigInt("232")
		const uintrXwmduW = BigInt("198")
		const stringFGG9of8 = "E3CVzD1V4r"
		const uintISXv93I = BigInt("250")
		const stringxyAy9l = "jfCAxRUv4RV3t3Weyi9i3PQvkWQLV4td2bdr7DD0yGGbSxR2"
		const uint256M06ubSx = await GardenContractV2skHVCZY.getTotalrTLPHarvest.call(uintROKq3k, {from: accounts[3]});
		const uint256MTp3r3 = await GardenContractV2skHVCZY.balanceOf.call(addressNH3JUnJ, stringCxONk9C, {from: accounts[5]});
		const uint256Prv4sq5 = await GardenContractV2skHVCZY.balanceOf.call(addressu0eb2tg, stringkS2FsJ, {from: "0x0000000000000000000000000000000000000001"});
		const stringPZ9gzlF = await GardenContractV2skHVCZY.withdraw.call(stringoaAUoOv, uintfaQR3U, {from: accounts[5]});
		const uint256pv6naK = await GardenContractV2skHVCZY.totalTLPBurnt.call(stringUgmBaSB, {from: "0x0000000000000000000000000000000000000001"});
		const uint8H7JuGpb = await GardenContractV2skHVCZY.zeroHoldings.call(uintrXwmduW, uintUzdqWxZ, {from: accounts[3]});
		const uint256vFhMvb3 = await GardenContractV2skHVCZY.totalTLPDecomposed.call(stringFGG9of8, {from: accounts[2]});
		const stringx95hLi5 = await GardenContractV2skHVCZY.claimDecompose.call(stringxyAy9l, uintISXv93I, {from: accounts[4]});

		await expect(GardenContractV2skHVCZY.getTotalrTLPHarvest.call(uintROKq3k, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJUL0owa = accounts[2]
		const addressCHYDNS3 = accounts[2]
		const addressTpF69yg = accounts[5]
		const GardenContractV2rdJhLOk = await GardenContractV2.new(addressJUL0owa, addressCHYDNS3, addressTpF69yg, {from: accounts[4]});
		const stringORWMsqX = "LmRZKXn8ROq2zvKWW1AhwjzRLqp1148qJMLxQCEfn1rhFhN89sFT0yF5"
		const addressUVsqFDx = "0x0000000000000000000000000000000000000001"
		const uintnsMQty = BigInt("168")
		const stringE4kBCl7 = "s9hzD5KzPNlClgeFRMReAmat8GLyv56iQD3dFc8fNEPOhXpj3rdxoLDvNVMEGou5oAztITit5ra888v"
		const uintjvKyDxJ = BigInt("130")
		const stringOA2Ktm = "9rGSXUKguiKFpr2GtmOXSbIxx7FqLX3SN0s6QQofpwRh28ZeLQ9TMhd2BsHr4J"
		const stringCq0os2K = "RoBjbzKaP8ETkrDlr5WjFiqMr3bIFW328ZMVd1FAfyuZuk5z7"
		const uint256U9yVYWS = await GardenContractV2rdJhLOk.totalTLPBurnt.call(stringORWMsqX, {from: accounts[2]});
		const addresscKgEZl9 = await GardenContractV2rdJhLOk.changeBenefitiary.call(addressUVsqFDx, {from: accounts[0]});
		const stringVvefu4 = await GardenContractV2rdJhLOk.harvest.call(stringE4kBCl7, uintnsMQty, {from: accounts[4]});
		const uint256WVk6Ksz = await GardenContractV2rdJhLOk.timeUntilNextTLP.call(stringOA2Ktm, uintjvKyDxJ, {from: accounts[4]});
		const uint256BrOPkH = await GardenContractV2rdJhLOk.totalTLPDecomposed.call(stringCq0os2K, {from: accounts[3]});

		await expect(GardenContractV2rdJhLOk.totalTLPBurnt.call(stringORWMsqX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressEAoqeyO = accounts[2]
		const addressYosXeGO = accounts[0]
		const addressjRle6i = accounts[1]
		const GardenContractV2xLwKnVo = await GardenContractV2.new(addressEAoqeyO, addressYosXeGO, addressjRle6i, {from: accounts[3]});
		const stringxI5JEh = "QyWPguusIk2KSYBAWXdj7siUI503Y7XrUCf3S7lji3nWSBB6uVD1ZELRyf6qU7QL8mEO5suR1a9VGZiu636w8OAP72u8LkcM"
		const uintttWgEt = BigInt("31")
		const stringpRdTylZ = "WkXBBGEVxu93jl4OPIo3Gi"
		const stringoA6Ciev = "kkuYhQxqOQx8bUPnIbnU"
		const stringexYZQf = await GardenContractV2xLwKnVo.harvestAllBeds.call(stringxI5JEh, {from: accounts[1]});
		const stringlgfDeRQ = await GardenContractV2xLwKnVo.harvest.call(stringpRdTylZ, uintttWgEt, {from: accounts[0]});
		const uint256ztTI5vp = await GardenContractV2xLwKnVo.totalTLPDecomposed.call(stringoA6Ciev, {from: accounts[4]});

		await expect(GardenContractV2xLwKnVo.harvestAllBeds.call(stringxI5JEh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressLXtp1E = accounts[2]
		const addressv1ZS6mj = accounts[1]
		const addressvydjDeF = accounts[0]
		const GardenContractV2Bfg9FK = await GardenContractV2.new(addressLXtp1E, addressv1ZS6mj, addressvydjDeF, {from: accounts[1]});
		const addressgpbOcc = accounts[1]
		const addresseVSY43X = accounts[2]
		const stringPIqlX7a = "c1hMxUFqK1WerBnVGnDHpJSHGoTDPMTJVKwMS4KomNGNISp6YHhkGiK3DFWvlBdTC9SteujCn8b2C"
		const addressTVuXci8 = accounts[6]
		const addressMEQHM5n = await GardenContractV2Bfg9FK.addTokenOwner.call(addresseVSY43X, addressgpbOcc, {from: accounts[1]});
		const uint256rUXootq = await GardenContractV2Bfg9FK.balanceOf.call(addressTVuXci8, stringPIqlX7a, {from: accounts[0]});

		await expect(GardenContractV2Bfg9FK.addTokenOwner.call(addresseVSY43X, addressgpbOcc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressdaE1wl9 = accounts[3]
		const addressDFGLf0o = accounts[4]
		const addresspEuyrNd = accounts[5]
		const GardenContractV2dPljITe = await GardenContractV2.new(addressdaE1wl9, addressDFGLf0o, addresspEuyrNd, {from: accounts[0]});
		const addressAXu7jPH = accounts[4]
		const addressFm7QmXR = "0x0000000000000000000000000000000000000001"
		const stringTS8hM03 = "Jff3XKs7gs2inC3SGcHOxfp1dlT7qUbjetTLQnTNJMrfx7kHtWP8rw31prqWg61H1IzFsEJQGGk8x79WxujQa"
		const uintqyzQiJN = BigInt("86")
		const stringn5VoZcx = "JTUJ5CEJuD21AOC4YrsLIIX4kQ6BkzE79BvLP6t8A40DbqFr98hIFQ4F"
		const addressEmeihFQ = await GardenContractV2dPljITe.renounceTokenOwner.call(addressAXu7jPH, {from: accounts[0]});
		const addressz8IDp6p = await GardenContractV2dPljITe.renounceTokenOwner.call(addressFm7QmXR, {from: "0x0000000000000000000000000000000000000001"});
		const stringyne7qmc = await GardenContractV2dPljITe.harvestAllBeds.call(stringTS8hM03, {from: accounts[3]});
		const stringKUYPHgz = await GardenContractV2dPljITe.claimDecompose.call(stringn5VoZcx, uintqyzQiJN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2dPljITe.renounceTokenOwner.call(addressAXu7jPH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})