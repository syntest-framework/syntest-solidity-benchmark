const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressvDSSscd = accounts[1]
		const addressza5TuPV = accounts[1]
		const addressD5tzuNl = accounts[2]
		const GardenContractV2vJ01sWr = await GardenContractV2.new(addressvDSSscd, addressza5TuPV, addressD5tzuNl, {from: accounts[4]});
		const uintWhZSq0S = BigInt("150")
		const stringlCTwLR = "CKLL8dmn9ZSEm58lvsTa3Cvo6DnuLR06KU4c6oG3sYtHykcwQbasIqcewEiYAPYj85xxBkkd9ICM92UjlColW"
		const uintJLJnNHn = BigInt("178")
		const stringCVjhyLM = "xnGEGEWqsy8"
		await GardenContractV2vJ01sWr.totalBedSupply.call(stringlCTwLR, uintWhZSq0S, {from: accounts[1]});
		const stringqR52rJt = await GardenContractV2vJ01sWr.withdraw.call(stringCVjhyLM, uintJLJnNHn, {from: accounts[1]});

		await expect(GardenContractV2vJ01sWr.totalBedSupply.call(stringlCTwLR, uintWhZSq0S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspeoi0xh = accounts[2]
		const addressRQ9dlwJ = accounts[4]
		const addressullJfKd = accounts[3]
		const GardenContractV2i5EbKZK = await GardenContractV2.new(addresspeoi0xh, addressRQ9dlwJ, addressullJfKd, {from: accounts[4]});
		const addressVGWMQ3n = accounts[3]
		const stringjAPtvF6 = "174nUDPMO"
		const addressFe69Rv5 = accounts[3]
		const stringw3CCPpE = "3aO2VWxlOagR9DJGeoQYTDdczue7y"
		const addressBoQxUBx = await GardenContractV2i5EbKZK.renounceTokenOwner.call(addressVGWMQ3n, {from: accounts[0]});
		const uint256zqvPHSX = await GardenContractV2i5EbKZK.totalTLPGrowing.call(stringjAPtvF6, {from: accounts[3]});
		const address0PbaFA = await GardenContractV2i5EbKZK.changeBenefitiary.call(addressFe69Rv5, {from: accounts[4]});
		const uint256Eqt60Ye = await GardenContractV2i5EbKZK.totalTLPDecomposed.call(stringw3CCPpE, {from: accounts[0]});

		await expect(GardenContractV2i5EbKZK.renounceTokenOwner.call(addressVGWMQ3n, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressMSMb7kF = accounts[3]
		const addresspwOFx74 = accounts[4]
		const addressF9pXy0 = accounts[3]
		const GardenContractV2OJDDgxG = await GardenContractV2.new(addressMSMb7kF, addresspwOFx74, addressF9pXy0, {from: accounts[1]});
		const stringfhVskHy = "UP1yV67zx3tGBRYwfEf199eP5Vo1jM0BbMp8tfTOgbzeLyOiHCMWqOzApGMwdXVEXmUEuR433tii"
		const uinttKrjZqi = BigInt("98")
		const stringqPPZIOQ = "p3DRpTCeXgnC62Kjoj0SdZlEQDPQOh9DS50rJjRmPLjPnLVD4h3PYqb6LR7CPBWlInRn2Ybw5k1IV"
		const stringNQ7qyXr = await GardenContractV2OJDDgxG.harvestAllBeds.call(stringfhVskHy, {from: accounts[4]});
		const stringx73Fcbh = await GardenContractV2OJDDgxG.claimDecompose.call(stringqPPZIOQ, uinttKrjZqi, {from: accounts[4]});

		await expect(GardenContractV2OJDDgxG.harvestAllBeds.call(stringfhVskHy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscK2Zesd = accounts[3]
		const addressLKzVirs = "0x0000000000000000000000000000000000000001"
		const addressBdlp7Z = accounts[4]
		const GardenContractV2ZKO71Uz = await GardenContractV2.new(addresscK2Zesd, addressLKzVirs, addressBdlp7Z, {from: accounts[0]});
		const uintsbEQL6j = BigInt("1869")
		const uintykzsdsz = BigInt("17")
		const string3RtjV7 = "6jwjvUb9fSah92CllD7jLiTgwvcC9YJdcB5d4G6"
		const boolwr7BNW1 = true
		const uintPP8ODkl = BigInt("78")
		const stringkt8H4VI = "wpraveg2gXVHezUZcryJh0wApVNmtfuxO9IXwVPHG5YsUhweULwE1nW"
		const uintYzK7gqr = BigInt("1874")
		const uintqFvy1c = BigInt("2041")
		const uintmawI9GR = BigInt("72")
		const stringCTDwOU = "JPMqSdG2tDbnzl8id8aFfpKd6bXv5VckpYViyH"
		const addressax3tazC = accounts[0]
		const addressFU0Zaxm = accounts[2]
		const stringZdxPlDm = await GardenContractV2ZKO71Uz.decompose.call(string3RtjV7, uintykzsdsz, uintsbEQL6j, {from: accounts[2]});
		const uint256OwDVFxD = await GardenContractV2ZKO71Uz.plant.call(uintYzK7gqr, stringkt8H4VI, uintPP8ODkl, boolwr7BNW1, {from: accounts[1]});
		const stringGNsMkd3 = await GardenContractV2ZKO71Uz.decompose.call(stringCTDwOU, uintmawI9GR, uintqFvy1c, {from: accounts[3]});
		const addresspvbqs0Y = await GardenContractV2ZKO71Uz.changeOwner.call(addressax3tazC, {from: accounts[0]});
		const addressNEyqGh = await GardenContractV2ZKO71Uz.changeOwner.call(addressFU0Zaxm, {from: accounts[4]});

		await expect(GardenContractV2ZKO71Uz.decompose.call(string3RtjV7, uintykzsdsz, uintsbEQL6j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressUdoCpsB = accounts[4]
		const addressNIVcc9E = accounts[4]
		const addressiGnSYEJ = accounts[2]
		const GardenContractV2TDssmtJ = await GardenContractV2.new(addressUdoCpsB, addressNIVcc9E, addressiGnSYEJ, {from: accounts[2]});
		const stringMNsj6T1 = "jCN7B3kkNKBc1mO37MlK"
		const stringBfwTxo3 = "QU0"
		const uintIQWmoR = BigInt("55")
		const uintuXgbxc = BigInt("29")
		const addressRTxydV2 = accounts[0]
		const uintmoDO004 = BigInt("2")
		const uintJS3p6We = BigInt("202")
		const uint256n5DbIZt = await GardenContractV2TDssmtJ.totalTLPGrown.call(stringMNsj6T1, {from: accounts[3]});
		const uint256gGaDseF = await GardenContractV2TDssmtJ.totalTLPGrown.call(stringBfwTxo3, {from: accounts[2]});
		const uint8gFt2QHm = await GardenContractV2TDssmtJ.setTimeStamp.call(uintuXgbxc, uintIQWmoR, {from: accounts[0]});
		const addressLZOo71p = await GardenContractV2TDssmtJ.renounceTokenOwner.call(addressRTxydV2, {from: accounts[2]});
		const uint838Ju9O = await GardenContractV2TDssmtJ.setTimeStamp.call(uintJS3p6We, uintmoDO004, {from: accounts[0]});

		await expect(GardenContractV2TDssmtJ.totalTLPGrown.call(stringMNsj6T1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressaHWIXpu = "0x0000000000000000000000000000000000000001"
		const addressM9BxuF = accounts[0]
		const addressYgegiwg = accounts[2]
		const GardenContractV2PgWZxia = await GardenContractV2.new(addressaHWIXpu, addressM9BxuF, addressYgegiwg, {from: accounts[3]});
		const uintkM98Yq = BigInt("100")
		const stringLIZa5kQ = "shufxkOIAtLU81A7WwcDpXjzgXEyBYl3dxWbejBI4msxfBn9BI4HTp83kASIuFJmL0McogU49ftl"
		const addressQ1jhWkc = accounts[5]
		const uintqnH9M2 = BigInt("228")
		const uintvYjiI7X = BigInt("210")
		const stringkUttcY = "HVrnTxHjKqQcV6GVV9RLIdHHdcEbqzrdrSKTpE3Wq1eGMWQv98gJI12"
		const uintKSPwJM = BigInt("97")
		const stringqux35zL = "S0AfuUfgoJ4iqHXxugtBr1whMj9Mom"
		const uintDHpsAN5 = BigInt("131")
		const uintvMp7NbA = BigInt("165")
		const uint256rRXrssw = await GardenContractV2PgWZxia.growthRemaining.call(addressQ1jhWkc, stringLIZa5kQ, uintkM98Yq, {from: accounts[1]});
		const stringNlvTFZM = await GardenContractV2PgWZxia.decompose.call(stringkUttcY, uintvYjiI7X, uintqnH9M2, {from: accounts[1]});
		const uint256Ho62cyQ = await GardenContractV2PgWZxia.timeUntilNextTLP.call(stringqux35zL, uintKSPwJM, {from: accounts[5]});
		const uint8fYNpeix = await GardenContractV2PgWZxia.setTimeStamp.call(uintvMp7NbA, uintDHpsAN5, {from: accounts[1]});

		await expect(GardenContractV2PgWZxia.growthRemaining.call(addressQ1jhWkc, stringLIZa5kQ, uintkM98Yq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressgZGbRAz = "0x0000000000000000000000000000000000000001"
		const addressXm1cYjQ = accounts[0]
		const addressMRzWvMX = accounts[2]
		const GardenContractV2PgWZxia = await GardenContractV2.new(addressgZGbRAz, addressXm1cYjQ, addressMRzWvMX, {from: accounts[3]});
		const stringAIgwzPP = "9liMtOGmokWtBKIcK1tVtH6OxHpJd3EWb2ys7xAo8E3jR8Qt0KUmIH"
		const uintCJPNH00 = BigInt("308")
		const uintZfw55U = BigInt("210")
		const stringkUttcY = "HVrnTxHjKqQcV6GVV9RLIdHHdcEbqzrdrSKTpE3Wq1eGMWQv98gJI12"
		const boolfwt3dV = true
		const uintWBTrbOJ = BigInt("38")
		const stringu6k1Pu = "PV2d9WUYRJN2vXIHoQUT7RQsCfbVMYGD3lbRG7oHOU"
		const uintxG5hloo = BigInt("1741")
		const uintsLhnbCM = BigInt("131")
		const uintfhJXxf8 = BigInt("165")
		const uint256TzL6yQk = await GardenContractV2PgWZxia.totalTLPDecomposed.call(stringAIgwzPP, {from: accounts[1]});
		const stringNlvTFZM = await GardenContractV2PgWZxia.decompose.call(stringkUttcY, uintZfw55U, uintCJPNH00, {from: accounts[1]});
		const uint2561laNHY = await GardenContractV2PgWZxia.plant.call(uintxG5hloo, stringu6k1Pu, uintWBTrbOJ, boolfwt3dV, {from: accounts[4]});
		const uint8fYNpeix = await GardenContractV2PgWZxia.setTimeStamp.call(uintfhJXxf8, uintsLhnbCM, {from: accounts[1]});

		await expect(GardenContractV2PgWZxia.totalTLPDecomposed.call(stringAIgwzPP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address9UZFl4 = accounts[3]
		const addressJGviodG = accounts[4]
		const addressGwiLXP = accounts[3]
		const GardenContractV2OJDDgxG = await GardenContractV2.new(address9UZFl4, addressJGviodG, addressGwiLXP, {from: accounts[1]});
		const uintkdOtbhR = BigInt("98")
		const stringqPPZIOQ = "p3DRpTCeXgnC62Kjoj0SdZlEQDPQOh9DS50rJjRmPLjPnLVD4h3PYqb6LR7CPBWlInRn2Ybw5k1IV"
		const stringEyV4Mt4 = "K1Zs9v9OWRfkP020mfNHIQTWVHxMVZdqCDrQZk5Kn4NHMTVhsnkCkWn2keD2S47zio2xbkNxZg3QdRknwUmzSb"
		const stringx73Fcbh = await GardenContractV2OJDDgxG.claimDecompose.call(stringqPPZIOQ, uintkdOtbhR, {from: accounts[4]});
		const uint256pzJMROt = await GardenContractV2OJDDgxG.totalTLPBurnt.call(stringEyV4Mt4, {from: accounts[2]});

		await expect(GardenContractV2OJDDgxG.claimDecompose.call(stringqPPZIOQ, uintkdOtbhR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressT0FoIs7 = accounts[5]
		const addressq5NhhF9 = accounts[1]
		const addressukYo1i1 = accounts[4]
		const GardenContractV2hBrxZef = await GardenContractV2.new(addressT0FoIs7, addressq5NhhF9, addressukYo1i1, {from: "0x0000000000000000000000000000000000000001"});
		const stringPdsNZgK = "bmBc5NFlApmq"
		const addresszbzj6Dp = accounts[5]
		const uintiBAZj4U = BigInt("162")
		const uintoUaYAE = BigInt("184")
		const stringyXujSsv = "HeNXsoLM5gyX4EMebmbtizPVUDQH6zH9EJZw2qfng9jDlMN18SPraKM1repJlS5y3oQNmFqpQAFVTTLMh4JK2SqDOJANIf"
		const uintozsbaKq = BigInt("232")
		const uintCGQZdWA = BigInt("1")
		const stringEWinO9N = "jm40WNovCuUXNWUuDw1qfHVi7Ct87JjrDgmsYyYDnGqBU97axuIdlrDXDNrzuSUgq2MDt7Q5X9tvmzgb3S8vWafIbyEtwBN"
		const uint256Ey9xrAn = await GardenContractV2hBrxZef.balanceOf.call(addresszbzj6Dp, stringPdsNZgK, {from: accounts[2]});
		const uint256nRmvOOX = await GardenContractV2hBrxZef.getTotalrTLPHarvest.call(uintiBAZj4U, {from: accounts[1]});
		const uint256T2p7L0w = await GardenContractV2hBrxZef.timeUntilNextTLP.call(stringyXujSsv, uintoUaYAE, {from: accounts[2]});
		const uint8uq92pYd = await GardenContractV2hBrxZef.setTimeStamp.call(uintCGQZdWA, uintozsbaKq, {from: accounts[3]});
		const uint256pdTAzLw = await GardenContractV2hBrxZef.totalTLPGrowing.call(stringEWinO9N, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addressOEUgTAt = accounts[3]
		const addressTnYRWve = accounts[4]
		const addressVRqcqDg = accounts[3]
		const GardenContractV2OJDDgxG = await GardenContractV2.new(addressOEUgTAt, addressTnYRWve, addressVRqcqDg, {from: accounts[1]});
		const boolYGdlGzn = false
		const uintD3CNeeo = BigInt("86")
		const stringhnGIoyh = "SaRnzcekqgXrcR6pH1dSAzeGNKC5Gzcx115jd75bRBgbiuu"
		const uintfZMFQNp = BigInt("1599")
		const stringfhVskHy = "UP1yV67zx3tGBRYwfEf199eP5Vo1jM0BbMp8tfTOgbzeLyOiCMWqOzApGMwdXVEXmUEuR433tii"
		const addresstd9G8Mt = "0x0000000000000000000000000000000000000001"
		const addressNbgdg3J = accounts[2]
		const stringzEnaVCW = "pCQ9v036WfRcxjvWmx4CcepcYx7aEmECmPvHhTqbtO5cxeGJUf9gnkcR9hcnxEpbJtfHKh0epTV0St4"
		const uint256IamjKVj = await GardenContractV2OJDDgxG.plant.call(uintfZMFQNp, stringhnGIoyh, uintD3CNeeo, boolYGdlGzn, {from: accounts[3]});
		const stringNQ7qyXr = await GardenContractV2OJDDgxG.harvestAllBeds.call(stringfhVskHy, {from: accounts[4]});
		const addressyAfRjVR = await GardenContractV2OJDDgxG.addTokenOwner.call(addressNbgdg3J, addresstd9G8Mt, {from: accounts[0]});
		const stringfBaMVGw = await GardenContractV2OJDDgxG.harvestAllBeds.call(stringzEnaVCW, {from: accounts[4]});

		await expect(GardenContractV2OJDDgxG.plant.call(uintfZMFQNp, stringhnGIoyh, uintD3CNeeo, boolYGdlGzn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressRpuzuZr = accounts[3]
		const addressBa3FAJe = accounts[4]
		const addressXa5kD7U = accounts[3]
		const GardenContractV2OJDDgxG = await GardenContractV2.new(addressRpuzuZr, addressBa3FAJe, addressXa5kD7U, {from: accounts[1]});
		const uintdedsSQ = BigInt("229")
		const uintCW5Jqos = BigInt("147")
		const uinto5XVhaJ = BigInt("98")
		const stringqPPZIOQ = "p3DRpTCeXgnC62Kjoj0SdZlEQDPQOh9DS50rJjRmPLjPnLVD4h3PYqb6LR7CPBWlInRn2Ybw5k1IV"
		const stringEyV4Mt4 = "K1Zs9v9OWRfkP020mfNHIQTWVHxMVZdqCDrQZk5Kn4NHMTVhsnkCkWn2keD2S47zio2xbkNxZg3QdRknwUmzSb"
		const uint8n8Dr7bm = await GardenContractV2OJDDgxG.zeroHoldings.call(uintCW5Jqos, uintdedsSQ, {from: accounts[4]});
		const stringx73Fcbh = await GardenContractV2OJDDgxG.claimDecompose.call(stringqPPZIOQ, uinto5XVhaJ, {from: accounts[4]});
		const uint256pzJMROt = await GardenContractV2OJDDgxG.totalTLPBurnt.call(stringEyV4Mt4, {from: accounts[2]});

		await expect(GardenContractV2OJDDgxG.zeroHoldings.call(uintCW5Jqos, uintdedsSQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresssnjYqH6 = accounts[3]
		const addressFtR1HOr = accounts[4]
		const addressK9Pcimp = accounts[3]
		const GardenContractV2OJDDgxG = await GardenContractV2.new(addresssnjYqH6, addressFtR1HOr, addressK9Pcimp, {from: accounts[1]});
		const uintT4KsG8X = BigInt("248")
		const uintwCaxhKv = BigInt("239")
		const stringZHBa07v = "wNJ9sjKd5YmEtj1gG7FKk4LVW9SuGGHBcvwd4F0AmxwgICdOfPxMlrKpiDydye3uelBm3QpsEC2xqYbiTIJypM9Ebuixh"
		const stringfhVskHy = "UP1yV67zx3tGBRYwfEf199ePMVd1jM0BbMp8tfTOgbzeLyOiHCMWqOzApGMwdXVEXmUXuR433tii"
		const uint256kPTSZO = await GardenContractV2OJDDgxG.getTotalrTLPHarvest.call(uintT4KsG8X, {from: accounts[0]});
		const stringxJNJWB0 = await GardenContractV2OJDDgxG.harvest.call(stringZHBa07v, uintwCaxhKv, {from: accounts[0]});
		const stringNQ7qyXr = await GardenContractV2OJDDgxG.harvestAllBeds.call(stringfhVskHy, {from: accounts[4]});

		await expect(GardenContractV2OJDDgxG.getTotalrTLPHarvest.call(uintT4KsG8X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresst1OBck9 = accounts[3]
		const address4oShY5 = accounts[4]
		const addressryP6BV7 = accounts[3]
		const GardenContractV2OJDDgxG = await GardenContractV2.new(addresst1OBck9, address4oShY5, addressryP6BV7, {from: accounts[1]});
		const uintWXbJnzR = BigInt("117")
		const stringgZ7OBKe = "5LI1L2JGPbEKrR7PvKHfv1OdXTsh7siXadOxORL8vMhOE"
		const stringfhVskHy = "UP1yV67zx3tGBRYwfEf199ePZVo1jM0BbMp8tfTOgbzeLyOiHCMWqOzApGMwdXVEXmUXuR433tii"
		const addressIQYoKB1 = accounts[3]
		const stringeejZha = await GardenContractV2OJDDgxG.harvest.call(stringgZ7OBKe, uintWXbJnzR, {from: accounts[4]});
		const stringNQ7qyXr = await GardenContractV2OJDDgxG.harvestAllBeds.call(stringfhVskHy, {from: accounts[4]});
		const addressfi3dkdq = await GardenContractV2OJDDgxG.changeBenefitiary.call(addressIQYoKB1, {from: accounts[0]});

		await expect(GardenContractV2OJDDgxG.harvest.call(stringgZ7OBKe, uintWXbJnzR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscoRGPWX = accounts[3]
		const addressBrMLJC = accounts[4]
		const addressPP3FJVT = accounts[3]
		const GardenContractV2OJDDgxG = await GardenContractV2.new(addresscoRGPWX, addressBrMLJC, addressPP3FJVT, {from: accounts[1]});
		const addressdfSvZsC = "0x0000000000000000000000000000000000000001"
		const addressbiJHhBF = accounts[3]
		const stringfhVskHy = "UP1yV67zx3tGBRYwEf199ePMVo1jM0BbMp8tfTOgbzeLyOiHCMWqOzApGMwdXVEXmUXuR433tii"
		const addresseJVIlD = await GardenContractV2OJDDgxG.changeBenefitiary.call(addressdfSvZsC, {from: accounts[1]});
		const addressYkNOVmd = await GardenContractV2OJDDgxG.changeOwner.call(addressbiJHhBF, {from: accounts[0]});
		const stringNQ7qyXr = await GardenContractV2OJDDgxG.harvestAllBeds.call(stringfhVskHy, {from: accounts[4]});

		await expect(GardenContractV2OJDDgxG.changeOwner.call(addressbiJHhBF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressaWv9PYp = accounts[3]
		const addressUOkd79X = accounts[4]
		const addressrZQ5xO = accounts[3]
		const GardenContractV2OJDDgxG = await GardenContractV2.new(addressaWv9PYp, addressUOkd79X, addressrZQ5xO, {from: accounts[1]});
		const uintWnUfpr6 = BigInt("155")
		const stringfOGydd6 = "WMvL7uSkxjnn8RpKv8cOQJJWqgHz4onf01ePpw3SYykIiGXxZLmWE7o1Witl0991i2f31hpDy3uTAgb7JxQ45fd3HACbcTQ"
		const stringfhVskHy = "UP1yV67zx3tGBRYwfEf199ePMVo1j0BbMp8tfTOgbzeLyOiHCMWqOzApGMwdXVEXmUXuR433tii"
		const uint256DaEeSMK = await GardenContractV2OJDDgxG.timeUntilNextTLP.call(stringfOGydd6, uintWnUfpr6, {from: "0x0000000000000000000000000000000000000001"});
		const stringNQ7qyXr = await GardenContractV2OJDDgxG.harvestAllBeds.call(stringfhVskHy, {from: accounts[4]});

		await expect(GardenContractV2OJDDgxG.timeUntilNextTLP.call(stringfOGydd6, uintWnUfpr6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstPTC2P5 = accounts[2]
		const addressCEdUDo = "0x0000000000000000000000000000000000000001"
		const addresslRSgHXt = accounts[3]
		const GardenContractV2mHB76wm = await GardenContractV2.new(addresstPTC2P5, addressCEdUDo, addresslRSgHXt, {from: accounts[0]});
		const addresss5uOzjY = accounts[0]
		const uintUMTplSd = BigInt("185")
		const uinto1XLhb5 = BigInt("51")
		const stringUHmIbOX = "WTMIx7UeyUCiL8IUPAxDqFfDJ3RwK7BqG1HNyl7JpbrcYD12ctK3AL7I1wZa0cDxPkpJFKfvLG28Cnp5h4E5hkKIz1"
		const uintzz1wu1e = BigInt("1464")
		const uintHL6Tzd6 = BigInt("77")
		const uint4VGimu = BigInt("18")
		const uintopA6H2s = BigInt("53")
		const stringNmxp33v = "461dsI2KDmUdSYEulwEd2naS"
		const string1rCwee = "lXQ1pJuhUX1hXQYVzLpcCWmYmQdJLDEH9iYgiCvSNvjWjK6gD99QjpAv03Ff"
		const addressYo4DU64 = await GardenContractV2mHB76wm.changeOwner.call(addresss5uOzjY, {from: accounts[0]});
		const uint8zFFh8z = await GardenContractV2mHB76wm.setTimeStamp.call(uinto1XLhb5, uintUMTplSd, {from: accounts[1]});
		const uint256DfwnDai = await GardenContractV2mHB76wm.totalTLPGrowing.call(stringUHmIbOX, {from: accounts[3]});
		const uint8xBrEziM = await GardenContractV2mHB76wm.operationBurnMint.call(uint4VGimu, uintHL6Tzd6, uintzz1wu1e, {from: accounts[0]});
		const uint256x9J1hkt = await GardenContractV2mHB76wm.timeUntilNextTLP.call(stringNmxp33v, uintopA6H2s, {from: accounts[1]});
		const uint256xBYsBPx = await GardenContractV2mHB76wm.totalTLPGrowing.call(string1rCwee, {from: accounts[3]});

		await expect(GardenContractV2mHB76wm.setTimeStamp.call(uinto1XLhb5, uintUMTplSd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresshsAuI0 = accounts[0]
		const addressEvefM4 = accounts[1]
		const addressu41S9te = accounts[1]
		const GardenContractV2NhBNWwp = await GardenContractV2.new(addresshsAuI0, addressEvefM4, addressu41S9te, {from: accounts[2]});
		const stringEtedEn3 = "zf"
		const stringubOYNQy = "QnIgRTH8p2ff7Qa8tiSrWWjmZ5RRoDChpQRKNFy"
		const uintB3OeeHW = BigInt("248")
		const uint256BYmni6D = await GardenContractV2NhBNWwp.totalTLPBurnt.call(stringEtedEn3, {from: accounts[0]});
		const stringsRXS11p = await GardenContractV2NhBNWwp.harvestAllBeds.call(stringubOYNQy, {from: accounts[4]});
		const uint256liVSNWt = await GardenContractV2NhBNWwp.getTotalsTLPHarvest.call(uintB3OeeHW, {from: accounts[3]});

		await expect(GardenContractV2NhBNWwp.totalTLPBurnt.call(stringEtedEn3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressAnJ1FBa = accounts[3]
		const addressu3YeuQN = accounts[4]
		const addressFQAuKVm = accounts[3]
		const GardenContractV2OJDDgxG = await GardenContractV2.new(addressAnJ1FBa, addressu3YeuQN, addressFQAuKVm, {from: accounts[1]});
		const uintjE3K2qf = BigInt("68")
		const stringfhVskHy = "UP1yV67zx3tGBRYwfEf199ePMVm1j0BbMp8tfTOgbzeLyOiHCMWqOzApGMwdXVEXmUYuR433tii"
		const uint7VVEBO = BigInt("136")
		const uintQJcEfoy = BigInt("253")
		const uint256WDAU0vT = await GardenContractV2OJDDgxG.getTotalsTLPHarvest.call(uintjE3K2qf, {from: accounts[5]});
		const stringNQ7qyXr = await GardenContractV2OJDDgxG.harvestAllBeds.call(stringfhVskHy, {from: accounts[4]});
		const uint8rkfjwTi = await GardenContractV2OJDDgxG.zeroHoldings.call(uintQJcEfoy, uint7VVEBO, {from: accounts[5]});

		await expect(GardenContractV2OJDDgxG.getTotalsTLPHarvest.call(uintjE3K2qf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressSddRgdx = accounts[1]
		const addressEybrVJP = accounts[4]
		const addressFgGxpY4 = accounts[1]
		const GardenContractV2RKjBq1I = await GardenContractV2.new(addressSddRgdx, addressEybrVJP, addressFgGxpY4, {from: accounts[1]});
		const uintDXu29Qf = BigInt("126")
		const stringqkMf7Yl = "m1mY2z92BwsA8nUJ1bWv7lojjpq1urJDRxXP9bQsPvCoF5yJz7E0cUxTfyR8P723o4WlOlamaUuub"
		const boolrkLTs5k = false
		const uintRx8qPKu = BigInt("186")
		const strings82Nn2K = "jx2DoH8vg3ySOz6ExWONoHI3qAgx99Ec63vsg7hAEJ1CiMBAxQw3Sm95uXgIpySRroup2hmwpFnVoCN1BYi7pxR6aYcAMS"
		const uintWWx2IXH = BigInt("127")
		const uintTimkkvK = BigInt("149")
		const uintaG8nnH = BigInt("93")
		const stringGcH6I9q = "w1KUUzQ"
		const uintszJgzlb = BigInt("111")
		const string8maMFm = await GardenContractV2RKjBq1I.withdraw.call(stringqkMf7Yl, uintDXu29Qf, {from: accounts[2]});
		const uint256JlJ71KF = await GardenContractV2RKjBq1I.plant.call(uintWWx2IXH, strings82Nn2K, uintRx8qPKu, boolrkLTs5k, {from: accounts[0]});
		const uint8xnavCMW = await GardenContractV2RKjBq1I.setTimeStamp.call(uintaG8nnH, uintTimkkvK, {from: accounts[1]});
		const uint256RgPwoge = await GardenContractV2RKjBq1I.totalTLPGrown.call(stringGcH6I9q, {from: accounts[2]});
		const uint256DodWAjJ = await GardenContractV2RKjBq1I.getTotalsTLPHarvest.call(uintszJgzlb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2RKjBq1I.withdraw.call(stringqkMf7Yl, uintDXu29Qf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressqleUjIU = accounts[3]
		const addressKQd3CGl = accounts[4]
		const addressQubyCVD = accounts[3]
		const GardenContractV2OJDDgxG = await GardenContractV2.new(addressqleUjIU, addressKQd3CGl, addressQubyCVD, {from: accounts[1]});
		const addressOPrjQez = accounts[4]
		const addresseKOFfxD = accounts[0]
		const uintDfTGH0 = BigInt("71")
		const uintggsoiS6 = BigInt("27")
		const uintlg1KnkQ = BigInt("54")
		const booljKSEYd9 = false
		const uintB4806wJ = BigInt("202")
		const stringqfXstW8 = "0y5xoNtiFoXBa54T1ACUECUI45UNeQuovNfOILWDbL8bJeLZNwhzoTcRGO4jQjVRLj"
		const uintzzntXa2 = BigInt("2014")
		const addressS2SShvd = await GardenContractV2OJDDgxG.addTokenOwner.call(addresseKOFfxD, addressOPrjQez, {from: accounts[1]});
		const uint8IUIyUS3 = await GardenContractV2OJDDgxG.zeroHoldings.call(uintggsoiS6, uintDfTGH0, {from: accounts[5]});
		const uint256kPTSZO = await GardenContractV2OJDDgxG.getTotalrTLPHarvest.call(uintlg1KnkQ, {from: accounts[0]});
		const uint256PfwFiav = await GardenContractV2OJDDgxG.plant.call(uintzzntXa2, stringqfXstW8, uintB4806wJ, booljKSEYd9, {from: accounts[1]});

		await expect(GardenContractV2OJDDgxG.addTokenOwner.call(addresseKOFfxD, addressOPrjQez, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressyTQTge = accounts[3]
		const addressNFz7Zlt = accounts[4]
		const addressjK4KfEq = accounts[3]
		const GardenContractV2OJDDgxG = await GardenContractV2.new(addressyTQTge, addressNFz7Zlt, addressjK4KfEq, {from: accounts[1]});
		const addressEzYjgev = accounts[0]
		const uintbbmddaw = BigInt("17")
		const addressTvHPOjC = accounts[3]
		const uintemdqXtq = BigInt("168")
		const stringwqvuz20 = "3N8NcwpwsEy0881mnxPBDSLum19VWjwpoKikkzyZyHk7YavOyaK4CVcbPhImXqwAawPmhlkh3aHYxyfESaw0KhnIzDjG"
		const addressNNz30TW = await GardenContractV2OJDDgxG.renounceTokenOwner.call(addressEzYjgev, {from: accounts[1]});
		const uint256kPTSZO = await GardenContractV2OJDDgxG.getTotalrTLPHarvest.call(uintbbmddaw, {from: accounts[0]});
		const addresst1LqZoo = await GardenContractV2OJDDgxG.renounceTokenOwner.call(addressTvHPOjC, {from: accounts[0]});
		const stringpmEiVCb = await GardenContractV2OJDDgxG.claimDecompose.call(stringwqvuz20, uintemdqXtq, {from: accounts[0]});

		await expect(GardenContractV2OJDDgxG.renounceTokenOwner.call(addressEzYjgev, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressRCj8hq = accounts[3]
		const addressrvrFEDI = accounts[4]
		const addressboY7kAg = accounts[3]
		const GardenContractV2OJDDgxG = await GardenContractV2.new(addressRCj8hq, addressrvrFEDI, addressboY7kAg, {from: accounts[1]});
		const stringQxLTrir = "oKGFhfunJu8EfSySjLDD1abavUcY3Sh8IJmQQVWxK9"
		const addressH6Byx9t = accounts[2]
		const uintEjPcXtD = BigInt("231")
		const stringUR4K9QG = "nvxz941S2Yw4a1mYHswg8qPktaCee5eJpqdSXOxGWbUNzH8cHr8xsr"
		const stringjutKJ9I = "VjCB6klJ12MukHUAWSf7Sq3fiaXOb"
		const boolCPkPIhH = false
		const uintHWiF066 = BigInt("138")
		const stringKtvNJ5 = "zNISokttiw94NVGd7Gcwf27D1riRBMYUxf1v3TiSUvncdxrTMnleaVUCAfcEyNv"
		const uintvgDkvZW = BigInt("1716")
		const uint256ewErQZE = await GardenContractV2OJDDgxG.balanceOf.call(addressH6Byx9t, stringQxLTrir, {from: accounts[5]});
		await GardenContractV2OJDDgxG.totalBedSupply.call(stringUR4K9QG, uintEjPcXtD, {from: accounts[1]});
		const stringpTv8Ddx = await GardenContractV2OJDDgxG.harvestAllBeds.call(stringjutKJ9I, {from: accounts[1]});
		const uint256XkGUfrM = await GardenContractV2OJDDgxG.plant.call(uintvgDkvZW, stringKtvNJ5, uintHWiF066, boolCPkPIhH, {from: accounts[3]});

		await expect(GardenContractV2OJDDgxG.balanceOf.call(addressH6Byx9t, stringQxLTrir, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressckudG5v = accounts[3]
		const addressh0lSzl9 = accounts[4]
		const addresscfzGq7G = accounts[3]
		const GardenContractV2OJDDgxG = await GardenContractV2.new(addressckudG5v, addressh0lSzl9, addresscfzGq7G, {from: accounts[1]});
		const uintTzM2eQz = BigInt("4")
		const uintDEn1lfm = BigInt("85")
		const stringbqoJYsK = "jlhiRVAnQkYFLSDFkrl8rL"
		const uint256kPTSZO = await GardenContractV2OJDDgxG.getTotalrTLPHarvest.call(uintTzM2eQz, {from: accounts[0]});
		const string9c02HV = await GardenContractV2OJDDgxG.withdraw.call(stringbqoJYsK, uintDEn1lfm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2OJDDgxG.getTotalrTLPHarvest.call(uintTzM2eQz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWfbVGAL = accounts[5]
		const addressxWMkkut = accounts[0]
		const addressGsgnaP9 = accounts[3]
		const GardenContractV2Zn9NCAQ = await GardenContractV2.new(addressWfbVGAL, addressxWMkkut, addressGsgnaP9, {from: accounts[3]});
		const stringUoD5Ggg = "o45A43oVdo81hIWSdM1km8Q5Dr1LyMPW35WDfnCtvq8umVKfNbcQxbRFw6vC2JAyr6yz9nrwQATH0dco2"
		const booll09Y2p6 = false
		const uintpG0tPXH = BigInt("144")
		const stringLm3Tcnh = "03UiKMOh0oZt9UnJ8KyNQC517tdE9SIm9u0hO1LXFSBvvGoWA5rejMKBy74CG931"
		const uintLGkGxpF = BigInt("1826")
		const uintCFgJDJj = BigInt("117")
		const uintzRHO9iN = BigInt("214")
		const stringt0gzfpS = "l4JxeIeCVD48PFDzDguoFIxo1JrO8Hi4HFoXVswO23jdxkQNNGqB4xchrGnlLiwaGWNEJjQrEfo8"
		const addressyH91WPd = accounts[2]
		const stringr0H594t = "O9aEyZUYx32saLgK"
		const uint256dh1Fh5y = await GardenContractV2Zn9NCAQ.totalGardenSupply.call(stringUoD5Ggg, {from: accounts[3]});
		const uint256JSJLo9 = await GardenContractV2Zn9NCAQ.plant.call(uintLGkGxpF, stringLm3Tcnh, uintpG0tPXH, booll09Y2p6, {from: accounts[1]});
		const uint256EaHl12n = await GardenContractV2Zn9NCAQ.getTotalsTLPHarvest.call(uintCFgJDJj, {from: accounts[3]});
		const uint256zWTkveX = await GardenContractV2Zn9NCAQ.growthRemaining.call(addressyH91WPd, stringt0gzfpS, uintzRHO9iN, {from: accounts[3]});
		const uint256y0pAzAB = await GardenContractV2Zn9NCAQ.totalTLPDecomposed.call(stringr0H594t, {from: accounts[5]});

		await expect(GardenContractV2Zn9NCAQ.totalGardenSupply.call(stringUoD5Ggg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresskqn2VPh = accounts[3]
		const addresslvuRHuB = accounts[4]
		const addressdgvMgUr = accounts[3]
		const GardenContractV2OJDDgxG = await GardenContractV2.new(addresskqn2VPh, addresslvuRHuB, addressdgvMgUr, {from: accounts[1]});
		const stringIYZK2SC = "oYrI4RkvHPnG6IlhAI7pMthTfCm6Wh2roMRScQyjef9eTZWIVGd0NozjfPRba5BsNlG68RwIRqQbiL7PjKzvM5I18hE5"
		const uintdHiIcwu = BigInt("70")
		const stringqPPZIOQ = "p3DRpTCeXgnC62Kjoj0SdZlEQDPQOh9DS50rJjRmPLjPnLVD4h3PYqb6LR7CPBWlInRn2Ybw5k1IV"
		const uintm5npeXV = BigInt("101")
		const stringOQIMWL3 = "d6lqsTSqBSG2NadmbF5Nzdfia9pAQHIvPbFn8SYyr0KQRU83DfXDKCSRNwngt5EuNPhvFfVe5"
		const uint256RifAN6U = await GardenContractV2OJDDgxG.totalTLPGrowing.call(stringIYZK2SC, {from: accounts[3]});
		const stringx73Fcbh = await GardenContractV2OJDDgxG.claimDecompose.call(stringqPPZIOQ, uintdHiIcwu, {from: accounts[4]});
		const stringqbHj8BC = await GardenContractV2OJDDgxG.claimDecompose.call(stringOQIMWL3, uintm5npeXV, {from: accounts[4]});

		await expect(GardenContractV2OJDDgxG.totalTLPGrowing.call(stringIYZK2SC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})