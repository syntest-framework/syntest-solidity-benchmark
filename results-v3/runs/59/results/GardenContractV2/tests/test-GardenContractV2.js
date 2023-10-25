const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressIZgJqTa = accounts[4]
		const addressJMcpL0l = accounts[4]
		const addressiJtQw1s = accounts[0]
		const GardenContractV2stuXat5 = await GardenContractV2.new(addressIZgJqTa, addressJMcpL0l, addressiJtQw1s, {from: accounts[2]});
		const uintkB3rQeG = BigInt("189")
		const uintUPWuxXr = BigInt("224")
		const uintv8KSKM = BigInt("21")
		const uintznHoNl1 = BigInt("191")
		const stringHnj37Rd = "DysBWx5nqxcsm1V3v7BnekjAbbDNDQGDHqbtafeWx9B5S7KARl8vEluVYDk5sBR9dJroXUkUpZRghqfhg4zW"
		const addressCqWdhI = accounts[4]
		const uintuWl7Aa = BigInt("173")
		const stringRDhc54y = "tuV54fNnja8z2Rp5R3D5H7UX5ADnsUmPwG3yfH2d25LyGyVaANDzRaKVAgyKvwJzsLII3MtG3"
		const uint8WvafQlL = await GardenContractV2stuXat5.operationBurnMint.call(uintv8KSKM, uintUPWuxXr, uintkB3rQeG, {from: accounts[1]});
		const uint256taNibXd = await GardenContractV2stuXat5.growthRemaining.call(addressCqWdhI, stringHnj37Rd, uintznHoNl1, {from: accounts[2]});
		const uint256MaymPHS = await GardenContractV2stuXat5.timeUntilNextTLP.call(stringRDhc54y, uintuWl7Aa, {from: accounts[2]});

		await expect(GardenContractV2stuXat5.operationBurnMint.call(uintv8KSKM, uintUPWuxXr, uintkB3rQeG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressMLbXAIX = "0x0000000000000000000000000000000000000001"
		const addressTAWOZKr = accounts[5]
		const addressTwg4l11 = accounts[4]
		const GardenContractV2a4YUCba = await GardenContractV2.new(addressMLbXAIX, addressTAWOZKr, addressTwg4l11, {from: accounts[5]});
		const uintQazUfs = BigInt("106")
		const stringIIWZZl = "umIwshmYxvLTpIpG8qbYygcLlVvXMxrkU6ye4xIlP9xlfOQv3MJ4sOAOQxHq14PzS5lmbeDzTyJgiDbUaEGEWD"
		const uintYnKPoM2 = BigInt("183")
		const stringESPdJDF = "KIJk1POqmMOOQGy6y0ynBi90iWz9dLiVE2bU8dZnuImsl5Yxlszj"
		const uintmnTygKK = BigInt("3")
		const stringreX7iSp = "XO4YcNn9r5uhEJabirY3ApR3eg6i6hVX3IVE6x42FaLGKDE77BY6b3CTusJqza"
		const uintxNjxlXR = BigInt("200")
		await GardenContractV2a4YUCba.totalBedSupply.call(stringIIWZZl, uintQazUfs, {from: accounts[3]});
		const stringhZoW9Zc = await GardenContractV2a4YUCba.harvest.call(stringESPdJDF, uintYnKPoM2, {from: accounts[1]});
		const uint256eMPDPyO = await GardenContractV2a4YUCba.timeUntilNextTLP.call(stringreX7iSp, uintmnTygKK, {from: accounts[0]});
		const uint256fcQgrPp = await GardenContractV2a4YUCba.getTotalrTLPHarvest.call(uintxNjxlXR, {from: accounts[3]});

		await expect(GardenContractV2a4YUCba.totalBedSupply.call(stringIIWZZl, uintQazUfs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressD6U4d3U = accounts[0]
		const addressENXemcO = accounts[5]
		const addressoKfKMcR = accounts[2]
		const GardenContractV2V87psDW = await GardenContractV2.new(addressD6U4d3U, addressENXemcO, addressoKfKMcR, {from: accounts[1]});
		const uintkUZoGwv = BigInt("206")
		const uintMHdtUlq = BigInt("1701")
		const uint8WR08r = BigInt("177")
		const stringL63lk2I = "HkfFnZ4cdzD7tpyXQOS9obta7MO9TgA7auJ67cfqEH4FC6fZ6fj2L23xPIv5LeZ8xWNuWp7QYw1GGDlgJuKUYJ"
		const stringQnSkA8 = "NWubfbw5MBzlCAiXm88ys4Jv6qvdwR5TGJznGTBm8QxAMLylLkTN5V6JJFkMaNYH2"
		const uint256McTq6JR = await GardenContractV2V87psDW.getTotalsTLPHarvest.call(uintkUZoGwv, {from: "0x0000000000000000000000000000000000000001"});
		const stringPOh8dX8 = await GardenContractV2V87psDW.decompose.call(stringL63lk2I, uint8WR08r, uintMHdtUlq, {from: accounts[2]});
		const uint256rMnuMZY = await GardenContractV2V87psDW.totalGardenSupply.call(stringQnSkA8, {from: accounts[0]});

		await expect(GardenContractV2V87psDW.getTotalsTLPHarvest.call(uintkUZoGwv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressviwteuJ = accounts[3]
		const addressbW0RnU3 = accounts[3]
		const addressJCBHROV = accounts[1]
		const GardenContractV2hPw8n23 = await GardenContractV2.new(addressviwteuJ, addressbW0RnU3, addressJCBHROV, {from: accounts[3]});
		const uintVYzv0sf = BigInt("242")
		const stringCKeJt8i = "EnwBrdDbJ150HK1O2A6GQSfb2te"
		const addressKDGrfSR = accounts[0]
		const addressHLswyvx = accounts[4]
		const uintqE4T8Zu = BigInt("7")
		const stringmI2KuW = "Qo6GHTrJuy1nRnZ8lm7wHAa"
		const uintWratDYZ = BigInt("192")
		const stringyBaDgO9 = "j5sA6AVnyCKTWwArNzfarmEIq3nle1M3uJGN"
		const stringEduPuK6 = await GardenContractV2hPw8n23.withdraw.call(stringCKeJt8i, uintVYzv0sf, {from: accounts[4]});
		const addressMGHcUo = await GardenContractV2hPw8n23.addTokenOwner.call(addressHLswyvx, addressKDGrfSR, {from: accounts[0]});
		const uint256fd1qo2N = await GardenContractV2hPw8n23.getTotalrTLPHarvest.call(uintqE4T8Zu, {from: accounts[2]});
		const uint256oEMXXt1 = await GardenContractV2hPw8n23.totalTLPDecomposed.call(stringmI2KuW, {from: accounts[0]});
		const uint256vt0zO7p = await GardenContractV2hPw8n23.timeUntilNextTLP.call(stringyBaDgO9, uintWratDYZ, {from: accounts[5]});

		await expect(GardenContractV2hPw8n23.withdraw.call(stringCKeJt8i, uintVYzv0sf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressq48rit = accounts[4]
		const addressPdF32T = accounts[2]
		const addressCBw7gKH = accounts[4]
		const GardenContractV2fgc8GzL = await GardenContractV2.new(addressq48rit, addressPdF32T, addressCBw7gKH, {from: accounts[0]});
		const stringE4FmWhJ = "cPnqzJGRYtj6YPjM1zxQ6ugEAtpIAOuRGZ2S65JLgkjFnP1fJIKH7BiqM9RKdD2uJmAnP4Fa1pw27d"
		const uint3lrtzb = BigInt("209")
		const string7cU34h = "v0pvbKfjv3fjxnIxvLoL5R6qJMKTSZNP7s"
		const uintdqJXrYr = BigInt("205")
		const uinti7BBv2 = BigInt("18")
		const uint256tvdpkU = await GardenContractV2fgc8GzL.totalTLPBurnt.call(stringE4FmWhJ, {from: accounts[2]});
		const stringjd07FYX = await GardenContractV2fgc8GzL.withdraw.call(string7cU34h, uint3lrtzb, {from: accounts[1]});
		const uint8LoMjZxz = await GardenContractV2fgc8GzL.setTimeStamp.call(uinti7BBv2, uintdqJXrYr, {from: accounts[2]});

		await expect(GardenContractV2fgc8GzL.totalTLPBurnt.call(stringE4FmWhJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressgJRXuqV = accounts[1]
		const addressSlcqHk = accounts[0]
		const addressMmSwL3F = "0x0000000000000000000000000000000000000001"
		const GardenContractV2W11XL6P = await GardenContractV2.new(addressgJRXuqV, addressSlcqHk, addressMmSwL3F, {from: accounts[1]});
		const addressHrgAFK = accounts[5]
		const addresstRfSNG0 = accounts[3]
		const uintZNcrbRc = BigInt("222")
		const stringyZM4cY = "vdSrgblYOMCibwWQvCs1U7"
		const stringeoWyZIT = "s3dQGzrVQaeUDD"
		const stringBVojBOX = "PSjls3bG4WmU1gcJqTd8cicSlOBTZFzTkeuOoLM8FD6mqFcMjWsP1jkwlJYC7xFKa4rUQuCYDfjjhhj1xq8a"
		const addressRfS0JLg = accounts[4]
		const uintEuxMJWL = BigInt("105")
		const stringv4mBOXP = "iDPAuCrwEJmdXSWO1wv9F2w7hUzpJWPK5botGQ8"
		const addresszp3sQOi = await GardenContractV2W11XL6P.addTokenOwner.call(addresstRfSNG0, addressHrgAFK, {from: "0x0000000000000000000000000000000000000001"});
		const stringrW2wxDF = await GardenContractV2W11XL6P.claimDecompose.call(stringyZM4cY, uintZNcrbRc, {from: accounts[2]});
		const uint256gUKHlaT = await GardenContractV2W11XL6P.totalGardenSupply.call(stringeoWyZIT, {from: accounts[2]});
		const uint256MOBXfva = await GardenContractV2W11XL6P.balanceOf.call(addressRfS0JLg, stringBVojBOX, {from: accounts[3]});
		const uint256Seplu9g = await GardenContractV2W11XL6P.timeUntilNextTLP.call(stringv4mBOXP, uintEuxMJWL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2W11XL6P.addTokenOwner.call(addresstRfSNG0, addressHrgAFK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressiiSGpHZ = accounts[2]
		const addressKov1xIe = accounts[4]
		const addressguMBvBh = accounts[0]
		const GardenContractV2WsHOeT7 = await GardenContractV2.new(addressiiSGpHZ, addressKov1xIe, addressguMBvBh, {from: accounts[1]});
		const stringkjI5btg = "kjbNQ9ZHmRXS3QwOnyaS497Y8OPakbPFLGpFgq5ONRVp8ymJfQXXDSUhRR2Dyw88FzbgJByJ8D88TlwugKTLI7UEjRo"
		const addressV4mh2em = accounts[4]
		const uintk1kMbIc = BigInt("217")
		const stringcFYa1AY = "EcxfG8eXcP3i"
		const uintxu4odgH = BigInt("826")
		const uintpzcbD3d = BigInt("133")
		const stringhLg4UGD = "9Td"
		const stringIYCjtiS = "OnBKCFU8Q3A4"
		const addressf5tvyCI = accounts[4]
		const uint256tYj1fRK = await GardenContractV2WsHOeT7.balanceOf.call(addressV4mh2em, stringkjI5btg, {from: accounts[0]});
		const stringtj2lfAK = await GardenContractV2WsHOeT7.harvest.call(stringcFYa1AY, uintk1kMbIc, {from: "0x0000000000000000000000000000000000000001"});
		const stringcbvuKkV = await GardenContractV2WsHOeT7.decompose.call(stringhLg4UGD, uintpzcbD3d, uintxu4odgH, {from: accounts[5]});
		const uint256Bc9dGQ = await GardenContractV2WsHOeT7.totalTLPBurnt.call(stringIYCjtiS, {from: accounts[1]});
		const addressNMJcSa = await GardenContractV2WsHOeT7.changeBenefitiary.call(addressf5tvyCI, {from: accounts[0]});

		await expect(GardenContractV2WsHOeT7.balanceOf.call(addressV4mh2em, stringkjI5btg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressmkNSU2w = accounts[3]
		const addressKNd9hFX = accounts[1]
		const addressgv0zc6l = accounts[4]
		const GardenContractV2Q9U0wDC = await GardenContractV2.new(addressmkNSU2w, addressKNd9hFX, addressgv0zc6l, {from: accounts[0]});
		const uintlK0Pc9o = BigInt("158")
		const stringyLY0wf5 = "PM4EKVOFzPEho7acikwN4F0g3SP39Hgz7st78fbI"
		const stringlZRWa5G = "Ys1O1lY06OL6IvCVHc3sjqpyLcUXelrJjmaHylz"
		const stringuLrihA = await GardenContractV2Q9U0wDC.claimDecompose.call(stringyLY0wf5, uintlK0Pc9o, {from: accounts[3]});
		const uint256yooY4y5 = await GardenContractV2Q9U0wDC.totalTLPGrowing.call(stringlZRWa5G, {from: accounts[1]});

		await expect(GardenContractV2Q9U0wDC.claimDecompose.call(stringyLY0wf5, uintlK0Pc9o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressAa7kdhC = accounts[0]
		const addressD9w9d5F = accounts[3]
		const addressHiWt6mb = accounts[4]
		const GardenContractV2w8CdG3H = await GardenContractV2.new(addressAa7kdhC, addressD9w9d5F, addressHiWt6mb, {from: accounts[2]});
		const uintd1gN5Qy = BigInt("198")
		const stringBjzZ7E = "IlnTtvcPFEgg1tlIgmFxMOVOzyT72ONNZisXDhVoBNVbbm1Rm7ac9zwTCslkwITElVJQwBvCoIuWBZ"
		const uintYm6bjdO = BigInt("236")
		const uintXBzj29A = BigInt("230")
		const string26XlLT = await GardenContractV2w8CdG3H.harvest.call(stringBjzZ7E, uintd1gN5Qy, {from: accounts[4]});
		const uint8orD9j6L = await GardenContractV2w8CdG3H.zeroHoldings.call(uintXBzj29A, uintYm6bjdO, {from: accounts[5]});

		await expect(GardenContractV2w8CdG3H.harvest.call(stringBjzZ7E, uintd1gN5Qy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressMSHkJ3K = accounts[0]
		const addressTtAyfH6 = accounts[3]
		const addresspIPQsV = accounts[4]
		const GardenContractV2w8CdG3H = await GardenContractV2.new(addressMSHkJ3K, addressTtAyfH6, addresspIPQsV, {from: accounts[2]});
		const uintbU5Mqjx = BigInt("280")
		const uintOvcSsqx = BigInt("121")
		const stringNyOHnLC = "4ULraBROM6hutnPhPBOAtOeEnreoWuLHWM9m8"
		const stringfrMN4m7 = "9atbwPL3Q87Rf1ICs55eghEREe7xbhnmk1U"
		const stringkFduCfW = "2st2IqotoWGZqRzOGpm8GYdWFWmw1TGR5L3ZMO1PBNRvJBe6QH4lYWtpoCEzPtfnl3fGyGX8jPm"
		const addressHwM6Jj4 = accounts[4]
		const addressgNtPMcz = accounts[2]
		const uintnTgGGgP = BigInt("219")
		const uintaNNACoa = BigInt("246")
		const stringzGt3q7t = await GardenContractV2w8CdG3H.decompose.call(stringNyOHnLC, uintOvcSsqx, uintbU5Mqjx, {from: accounts[2]});
		const uint256jlSZHVp = await GardenContractV2w8CdG3H.totalTLPGrown.call(stringfrMN4m7, {from: accounts[5]});
		const uint256RFfVDkh = await GardenContractV2w8CdG3H.balanceOf.call(addressHwM6Jj4, stringkFduCfW, {from: accounts[0]});
		const addressVJO1Ks0 = await GardenContractV2w8CdG3H.changeBenefitiary.call(addressgNtPMcz, {from: "0x0000000000000000000000000000000000000001"});
		const uint8orD9j6L = await GardenContractV2w8CdG3H.zeroHoldings.call(uintaNNACoa, uintnTgGGgP, {from: accounts[5]});

		await expect(GardenContractV2w8CdG3H.decompose.call(stringNyOHnLC, uintOvcSsqx, uintbU5Mqjx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressqHEiTh9 = accounts[3]
		const addressYO44gK5 = accounts[1]
		const addressoToteGR = accounts[4]
		const GardenContractV2Q9U0wDC = await GardenContractV2.new(addressqHEiTh9, addressYO44gK5, addressoToteGR, {from: accounts[0]});
		const stringRa8mtuS = "LuqFrZ"
		const stringlZRWa5G = "Ys1O1lY06OL6IvCVHc3sjqpyLcUXelrJjmaHylz"
		const stringogxrKM = await GardenContractV2Q9U0wDC.harvestAllBeds.call(stringRa8mtuS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yooY4y5 = await GardenContractV2Q9U0wDC.totalTLPGrowing.call(stringlZRWa5G, {from: accounts[1]});

		await expect(GardenContractV2Q9U0wDC.harvestAllBeds.call(stringRa8mtuS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressdKTf2hi = accounts[3]
		const addressSNoiKu2 = accounts[1]
		const addresseAg9MU7 = accounts[4]
		const GardenContractV2Q9U0wDC = await GardenContractV2.new(addressdKTf2hi, addressSNoiKu2, addresseAg9MU7, {from: accounts[0]});
		const addressalg1R8b = accounts[3]
		const uintSHAQO12 = BigInt("70")
		const stringsbYd2hA = "JPBoqumUpjseCXTDTdLw8abOxMtEGLrrk92DjG"
		const addressFDVqsmq = "0x0000000000000000000000000000000000000001"
		const uintFp4yzz = BigInt("158")
		const stringyLY0wf5 = "PM4EKVOFzPEho7acikwN4F0g3SP39Hgz7st78fbI"
		const stringlZRWa5G = "Ys1O1lY06OL6IvCVHc3sjqpyLcUXelrJjmaHylz"
		const addressgyMbw14 = await GardenContractV2Q9U0wDC.changeBenefitiary.call(addressalg1R8b, {from: accounts[0]});
		const uint256nNFL7Mt = await GardenContractV2Q9U0wDC.growthRemaining.call(addressFDVqsmq, stringsbYd2hA, uintSHAQO12, {from: accounts[1]});
		const stringuLrihA = await GardenContractV2Q9U0wDC.claimDecompose.call(stringyLY0wf5, uintFp4yzz, {from: accounts[3]});
		const uint256yooY4y5 = await GardenContractV2Q9U0wDC.totalTLPGrowing.call(stringlZRWa5G, {from: accounts[1]});

		await expect(GardenContractV2Q9U0wDC.growthRemaining.call(addressFDVqsmq, stringsbYd2hA, uintSHAQO12, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressRZfug31 = accounts[3]
		const addressvGf4vE9 = accounts[1]
		const addressnnLq3E7 = accounts[4]
		const GardenContractV2Q9U0wDC = await GardenContractV2.new(addressRZfug31, addressvGf4vE9, addressnnLq3E7, {from: accounts[0]});
		const stringlZRWa5G = "Ys1O1lY06OL6IvCVHc3sjqpyLcUXelrJjmaHylz"
		const uint256yooY4y5 = await GardenContractV2Q9U0wDC.totalTLPGrowing.call(stringlZRWa5G, {from: accounts[1]});

		await expect(GardenContractV2Q9U0wDC.totalTLPGrowing.call(stringlZRWa5G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscuS0qqA = accounts[0]
		const addressts1ozLu = accounts[3]
		const addressZuLpour = accounts[4]
		const GardenContractV2w8CdG3H = await GardenContractV2.new(addresscuS0qqA, addressts1ozLu, addressZuLpour, {from: accounts[2]});
		const addressCvb0WI8 = accounts[4]
		const uintuTPSBpy = BigInt("216")
		const uintWgQQDWr = BigInt("230")
		const addresszjGaQVT = await GardenContractV2w8CdG3H.changeOwner.call(addressCvb0WI8, {from: accounts[2]});
		const uint8orD9j6L = await GardenContractV2w8CdG3H.zeroHoldings.call(uintWgQQDWr, uintuTPSBpy, {from: accounts[5]});

		await expect(GardenContractV2w8CdG3H.zeroHoldings.call(uintWgQQDWr, uintuTPSBpy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresshiYn0ga = accounts[3]
		const addressPxNAVJN = accounts[1]
		const addressuoRrxl9 = accounts[4]
		const GardenContractV2Q9U0wDC = await GardenContractV2.new(addresshiYn0ga, addressPxNAVJN, addressuoRrxl9, {from: accounts[0]});
		const stringKJWHxP = "4wlh"
		const uintgllLU5L = BigInt("158")
		const stringyLY0wf5 = "PM4EKVOFzPEho7acikwN4F0g3SP39Hgz7st78fbI"
		const uint256GWjMOq3 = await GardenContractV2Q9U0wDC.totalTLPDecomposed.call(stringKJWHxP, {from: accounts[3]});
		const stringuLrihA = await GardenContractV2Q9U0wDC.claimDecompose.call(stringyLY0wf5, uintgllLU5L, {from: accounts[3]});

		await expect(GardenContractV2Q9U0wDC.totalTLPDecomposed.call(stringKJWHxP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresseim4H95 = accounts[0]
		const addresskO5Pj5X = accounts[3]
		const addressqLXM3Xo = accounts[3]
		const GardenContractV2YKwYsxb = await GardenContractV2.new(addresseim4H95, addresskO5Pj5X, addressqLXM3Xo, {from: "0x0000000000000000000000000000000000000001"});
		const addressM3MRuYY = accounts[0]
		const addressoU7HxwY = accounts[4]
		const addressnzhN9Zz = accounts[2]
		const uintRGc9DKL = BigInt("204")
		const stringJjs6i6x = "4IbM2sd89S26Sz2OTie0nd3eOQBnmTI9VO"
		const stringU7GoG1 = "7IMrE4RFmXae4"
		const addressRkA6X9E = await GardenContractV2YKwYsxb.changeOwner.call(addressM3MRuYY, {from: accounts[2]});
		const addressuDNqMSG = await GardenContractV2YKwYsxb.addTokenOwner.call(addressnzhN9Zz, addressoU7HxwY, {from: accounts[3]});
		const uint256dsbULc = await GardenContractV2YKwYsxb.timeUntilNextTLP.call(stringJjs6i6x, uintRGc9DKL, {from: accounts[2]});
		const uint256M1HSrB = await GardenContractV2YKwYsxb.totalTLPBurnt.call(stringU7GoG1, {from: accounts[3]});
	});

	it('test for GardenContractV2', async () => {
		const addressghiGoSj = accounts[3]
		const addressrAC6IOZ = accounts[3]
		const addressGaYEDG = accounts[1]
		const GardenContractV2hPw8n23 = await GardenContractV2.new(addressghiGoSj, addressrAC6IOZ, addressGaYEDG, {from: accounts[3]});
		const uintKPTuixe = BigInt("1")
		const stringmI2KuW = "Qo6GHTrJuy1nRnZ8lm7wHAa"
		const uint256fd1qo2N = await GardenContractV2hPw8n23.getTotalrTLPHarvest.call(uintKPTuixe, {from: accounts[2]});
		const uint256oEMXXt1 = await GardenContractV2hPw8n23.totalTLPDecomposed.call(stringmI2KuW, {from: accounts[0]});

		await expect(GardenContractV2hPw8n23.getTotalrTLPHarvest.call(uintKPTuixe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressgKiui8 = accounts[3]
		const addressznYpliW = accounts[3]
		const addressCN6SiZ6 = accounts[1]
		const GardenContractV2hPw8n23 = await GardenContractV2.new(addressgKiui8, addressznYpliW, addressCN6SiZ6, {from: accounts[3]});
		const uintGUPfoMw = BigInt("28")
		const uint256fd1qo2N = await GardenContractV2hPw8n23.getTotalrTLPHarvest.call(uintGUPfoMw, {from: accounts[2]});

		await expect(GardenContractV2hPw8n23.getTotalrTLPHarvest.call(uintGUPfoMw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresskxnkIiA = accounts[3]
		const addressEMvUp0c = accounts[3]
		const addressEp69VPc = accounts[1]
		const GardenContractV2hPw8n23 = await GardenContractV2.new(addresskxnkIiA, addressEMvUp0c, addressEp69VPc, {from: accounts[3]});
		const stringtubnTkq = "29IUGoj8QtmPvwVcraCIqtL7IxnuYoWcCmJqDB3dbF6HcPfNV7QNiVhUPQnQFOAoswmePvQOZoa6"
		const uintgUO8Ved = BigInt("242")
		const stringCKeJt8i = "EnwBrdDbJ150HK1O2A6GQSfb2te"
		const uintcAcaJJw = BigInt("0")
		const stringmI2KuW = "Qo6GHTrJuy1nRnZ8lm7wHAa"
		const uint256DKbCwZ7 = await GardenContractV2hPw8n23.totalGardenSupply.call(stringtubnTkq, {from: accounts[5]});
		const stringEduPuK6 = await GardenContractV2hPw8n23.withdraw.call(stringCKeJt8i, uintgUO8Ved, {from: accounts[4]});
		const uint256fd1qo2N = await GardenContractV2hPw8n23.getTotalrTLPHarvest.call(uintcAcaJJw, {from: accounts[2]});
		const uint256oEMXXt1 = await GardenContractV2hPw8n23.totalTLPDecomposed.call(stringmI2KuW, {from: accounts[0]});

		await expect(GardenContractV2hPw8n23.totalGardenSupply.call(stringtubnTkq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressh5LPTiQ = accounts[3]
		const addressE0rlfjS = accounts[3]
		const addressygytJOW = accounts[1]
		const GardenContractV2hPw8n23 = await GardenContractV2.new(addressh5LPTiQ, addressE0rlfjS, addressygytJOW, {from: accounts[3]});
		const addressM2HPlh9 = accounts[4]
		const stringoha6tiH = "Og7E"
		const uintL84GBS4 = BigInt("28")
		const addresseTkzyc0 = await GardenContractV2hPw8n23.renounceTokenOwner.call(addressM2HPlh9, {from: accounts[3]});
		const stringnAIB1Ab = await GardenContractV2hPw8n23.harvestAllBeds.call(stringoha6tiH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fd1qo2N = await GardenContractV2hPw8n23.getTotalrTLPHarvest.call(uintL84GBS4, {from: accounts[2]});

		await expect(GardenContractV2hPw8n23.renounceTokenOwner.call(addressM2HPlh9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressMsUD9CN = accounts[3]
		const addressJmG9KCm = accounts[1]
		const addressGoEPSq = accounts[4]
		const GardenContractV2Q9U0wDC = await GardenContractV2.new(addressMsUD9CN, addressJmG9KCm, addressGoEPSq, {from: accounts[0]});
		const uintrzimo4k = BigInt("170")
		const stringayFSwaJ = "1AX27wB9IDxJ4FK5l17ohu625rjdo2GDtME7NFa588nMphuhCWUPwwfoRsBqDxfQN"
		const stringRa8mtuS = "LuqFrZ"
		const stringlZRWa5G = "Ys1O1lY06OL6IvCVHc3sjqpyLcUXelrJjmaHylz"
		const uint256Jv0IYyu = await GardenContractV2Q9U0wDC.timeUntilNextTLP.call(stringayFSwaJ, uintrzimo4k, {from: "0x0000000000000000000000000000000000000001"});
		const stringogxrKM = await GardenContractV2Q9U0wDC.harvestAllBeds.call(stringRa8mtuS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yooY4y5 = await GardenContractV2Q9U0wDC.totalTLPGrowing.call(stringlZRWa5G, {from: accounts[1]});

		await expect(GardenContractV2Q9U0wDC.timeUntilNextTLP.call(stringayFSwaJ, uintrzimo4k, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresszHGS0J6 = accounts[4]
		const addressongrFSz = accounts[1]
		const addressldQkEL = accounts[4]
		const GardenContractV2hJlXAG8 = await GardenContractV2.new(addresszHGS0J6, addressongrFSz, addressldQkEL, {from: accounts[3]});
		const stringjzAbU8G = "wUu1uCgDQ3aUFjrJUWihPfrdWdDbRbJBiMLCgTdfr17KxafHweDDcX"
		const boolamB3WQb = false
		const uintiyDpFeA = BigInt("149")
		const stringL9o1m6 = "Z8xYiJatEjkhae8zPAyueuWNDBBrOJfnnjpo528AzNzHWBvzzrZ6XgGTnNEn4fXhm4Voaj3eY"
		const uintKLMw8L = BigInt("22")
		const uintE0c5H3 = BigInt("212")
		const stringvS5TJKq = "onEiBuqn9NKaGiTmGVJhLTFc9QGASaiugMwWj3nM4u2WRwEvsKav3HiT"
		const addressk4w23W4 = accounts[0]
		const stringyEVAVRd = "w4UuGb1DulCrMeGkig7"
		const stringuQKg0RR = "o2O7sFS9lY6XH"
		const addressQnqoCCQ = "0x0000000000000000000000000000000000000001"
		const addresscWjig2q = accounts[4]
		const uint256jwFsXw9 = await GardenContractV2hJlXAG8.totalTLPGrown.call(stringjzAbU8G, {from: accounts[4]});
		const uint256sHDRQVm = await GardenContractV2hJlXAG8.plant.call(uintKLMw8L, stringL9o1m6, uintiyDpFeA, boolamB3WQb, {from: accounts[3]});
		const uint256yxj2ZqF = await GardenContractV2hJlXAG8.growthRemaining.call(addressk4w23W4, stringvS5TJKq, uintE0c5H3, {from: accounts[5]});
		const uint256FTAzINY = await GardenContractV2hJlXAG8.totalTLPBurnt.call(stringyEVAVRd, {from: accounts[4]});
		const uint256hXV1Hj = await GardenContractV2hJlXAG8.totalTLPGrowing.call(stringuQKg0RR, {from: accounts[1]});
		const addressRhJoOdQ = await GardenContractV2hJlXAG8.addTokenOwner.call(addresscWjig2q, addressQnqoCCQ, {from: accounts[3]});

		await expect(GardenContractV2hJlXAG8.totalTLPGrown.call(stringjzAbU8G, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressGn7cqG = accounts[3]
		const addressOwTlBun = accounts[1]
		const addressiqaOeTs = accounts[4]
		const GardenContractV2Q9U0wDC = await GardenContractV2.new(addressGn7cqG, addressOwTlBun, addressiqaOeTs, {from: accounts[0]});
		const addressWs437tT = accounts[4]
		const addressmm4Q8s5 = accounts[1]
		const uintNCxXioc = BigInt("151")
		const stringyLY0wf5 = "PM4EKVOFzPEho7acikwN4F0g3SP39Hgz7st78fbI"
		const uinthHNdgWq = BigInt("240")
		const stringRCpxSi0 = "TywVXuGhQiA9KxycIwvS4SQDiwDj6xspSUUIvFRK9mgVcCSItL5l67v2uE5rdNSPgN5V"
		const addresskxQE3Th = await GardenContractV2Q9U0wDC.addTokenOwner.call(addressmm4Q8s5, addressWs437tT, {from: accounts[0]});
		const stringuLrihA = await GardenContractV2Q9U0wDC.claimDecompose.call(stringyLY0wf5, uintNCxXioc, {from: accounts[3]});
		const stringEmwkvMF = await GardenContractV2Q9U0wDC.harvest.call(stringRCpxSi0, uinthHNdgWq, {from: accounts[4]});

		await expect(GardenContractV2Q9U0wDC.addTokenOwner.call(addressmm4Q8s5, addressWs437tT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressm2gAaZ8 = accounts[3]
		const addressvRLJBK2 = accounts[1]
		const addressVRyMB4e = accounts[4]
		const GardenContractV2Q9U0wDC = await GardenContractV2.new(addressm2gAaZ8, addressvRLJBK2, addressVRyMB4e, {from: accounts[0]});
		const booloWdAqie = true
		const uintCS6reRb = BigInt("172")
		const stringqEuUtJa = "ImQk3MzSAYgqrMVCIC6kCTBe746UWkvFNHojFXaLSohmzCYXp8LzHffqMzMRMgp"
		const uintOZ5VuQJ = BigInt("774")
		const stringRa8mtuS = "Lu2FrZ"
		const stringW9pct9e = ""
		const addressEYol3nk = accounts[2]
		const stringlZRWa5G = "Ys1O1lY06OL6IvCVHc3sjqpyLcUXelrJjmaHylz"
		const uint256zKiZOs8 = await GardenContractV2Q9U0wDC.plant.call(uintOZ5VuQJ, stringqEuUtJa, uintCS6reRb, booloWdAqie, {from: accounts[0]});
		const stringogxrKM = await GardenContractV2Q9U0wDC.harvestAllBeds.call(stringRa8mtuS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tmdcZNx = await GardenContractV2Q9U0wDC.totalTLPGrowing.call(stringW9pct9e, {from: accounts[4]});
		const addressx2Iw2ec = await GardenContractV2Q9U0wDC.changeOwner.call(addressEYol3nk, {from: accounts[0]});
		const uint256yooY4y5 = await GardenContractV2Q9U0wDC.totalTLPGrowing.call(stringlZRWa5G, {from: accounts[1]});

		await expect(GardenContractV2Q9U0wDC.plant.call(uintOZ5VuQJ, stringqEuUtJa, uintCS6reRb, booloWdAqie, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})