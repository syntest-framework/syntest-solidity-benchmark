const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressY5HaPcV = "0x0000000000000000000000000000000000000001"
		const address6GWaIZ = accounts[4]
		const addressD14zqS = "0x0000000000000000000000000000000000000001"
		const GardenContractV2XHx0QHI = await GardenContractV2.new(addressY5HaPcV, address6GWaIZ, addressD14zqS, {from: accounts[3]});
		const boolzOlz7Nn = false
		const uintaDQaDeE = BigInt("85")
		const stringCoWPHVU = "DMZnQhD3i8ROLWreifwLknuq1E4OETIRwLz3iVdh3AM6y6MNLFnwB5YgNXvqpV"
		const uintwxQbt5U = BigInt("426")
		const addressIysk3uk = accounts[2]
		const uintadrTejQ = BigInt("81")
		const uintvuLFWe = BigInt("254")
		const uint256KFDgpyT = await GardenContractV2XHx0QHI.plant.call(uintwxQbt5U, stringCoWPHVU, uintaDQaDeE, boolzOlz7Nn, {from: accounts[1]});
		const addressgKy9e4S = await GardenContractV2XHx0QHI.renounceTokenOwner.call(addressIysk3uk, {from: accounts[1]});
		const uint8cY1jkL = await GardenContractV2XHx0QHI.setTimeStamp.call(uintvuLFWe, uintadrTejQ, {from: accounts[4]});

		await expect(GardenContractV2XHx0QHI.plant.call(uintwxQbt5U, stringCoWPHVU, uintaDQaDeE, boolzOlz7Nn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressxX0WQ9X = accounts[2]
		const addressRZ1JDhr = accounts[0]
		const addressaV2aKaI = accounts[3]
		const GardenContractV2ezy91sM = await GardenContractV2.new(addressxX0WQ9X, addressRZ1JDhr, addressaV2aKaI, {from: accounts[0]});
		const uintaALEgZs = BigInt("138")
		const uintG0UHkA = BigInt("195")
		const stringS2pHEbG = "DqqZD46Xu0K6PMdJrm6a7ypER9lQjrBZce0PzjNNq0mrYNuDn39TtQ3XbN2efFVGl7vpt6W4i7NHFDAfA86KNboiZ"
		const stringPBWwzQV = "Jj9iiXp1a"
		const uint256dE6mo1q = await GardenContractV2ezy91sM.getTotalsTLPHarvest.call(uintaALEgZs, {from: accounts[0]});
		const uint256L72lUPW = await GardenContractV2ezy91sM.getTotalrTLPHarvest.call(uintG0UHkA, {from: accounts[5]});
		const uint256XxlpQQK = await GardenContractV2ezy91sM.totalTLPGrown.call(stringS2pHEbG, {from: accounts[2]});
		const uint256uU0ISzn = await GardenContractV2ezy91sM.totalTLPGrown.call(stringPBWwzQV, {from: accounts[5]});

		await expect(GardenContractV2ezy91sM.getTotalsTLPHarvest.call(uintaALEgZs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswECZ4gC = "0x0000000000000000000000000000000000000001"
		const addressyVFiqik = accounts[3]
		const addressZswvy8q = accounts[0]
		const GardenContractV2njUlZB4 = await GardenContractV2.new(addresswECZ4gC, addressyVFiqik, addressZswvy8q, {from: accounts[3]});
		const uintG8aDv0 = BigInt("181")
		const stringWdc2EwK = "he4HbgOHEJty5gHI6bFJbeY"
		const stringfahOE0p = "Xg3Cia9mX5BMro9244IJTikRLZ1kzldJBP76C1aebaOeDFiZNrGXK2FMiuXHVHXEFaJ7fGLinHomUIMXzPacD1"
		const uintNmfAisB = BigInt("209")
		const stringfZdvfO3 = "0qacGTNat97efEIWt3TxHfhc8PPM6rymPFfnpZmUVpqmndnf5pEAttt21qMTv8YNtzar5k51FmAqHoOJTE"
		await GardenContractV2njUlZB4.totalBedSupply.call(stringWdc2EwK, uintG8aDv0, {from: accounts[0]});
		const uint256n6YF9xX = await GardenContractV2njUlZB4.totalTLPBurnt.call(stringfahOE0p, {from: accounts[1]});
		const string8g77nC = await GardenContractV2njUlZB4.withdraw.call(stringfZdvfO3, uintNmfAisB, {from: accounts[5]});

		await expect(GardenContractV2njUlZB4.totalBedSupply.call(stringWdc2EwK, uintG8aDv0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressFVLXLAr = "0x0000000000000000000000000000000000000001"
		const addressFctGMrq = accounts[5]
		const addressgXfGcFo = accounts[4]
		const GardenContractV2Wr1zXJV = await GardenContractV2.new(addressFVLXLAr, addressFctGMrq, addressgXfGcFo, {from: "0x0000000000000000000000000000000000000001"});
		const addressiLwWb8e = accounts[0]
		const addressug7RJXx = accounts[3]
		const addressBjzkPhB = accounts[2]
		const stringHwGYk5e = "Pzj3ACeehwhCLA2qyB84ocfoxpgECxvlhKSVsyzBPG7UGY1p0kWmMIQzh4pRYDzT6"
		const addressKOsgej4 = await GardenContractV2Wr1zXJV.changeOwner.call(addressiLwWb8e, {from: accounts[1]});
		const addressMzD9fKs = await GardenContractV2Wr1zXJV.addTokenOwner.call(addressBjzkPhB, addressug7RJXx, {from: accounts[2]});
		const uint256juPGJ9h = await GardenContractV2Wr1zXJV.totalTLPBurnt.call(stringHwGYk5e, {from: accounts[2]});
	});

	it('test for GardenContractV2', async () => {
		const addresslIRFD06 = accounts[2]
		const addressC7vKNoQ = accounts[2]
		const addressgwDfG66 = accounts[2]
		const GardenContractV2fcEkDY0 = await GardenContractV2.new(addresslIRFD06, addressC7vKNoQ, addressgwDfG66, {from: accounts[2]});
		const addressviimzAv = accounts[1]
		const stringAZy95Zo = "oErAB"
		const addressT5CMPq = await GardenContractV2fcEkDY0.renounceTokenOwner.call(addressviimzAv, {from: accounts[1]});
		const uint256Nsmce5d = await GardenContractV2fcEkDY0.totalTLPGrowing.call(stringAZy95Zo, {from: accounts[1]});

		await expect(GardenContractV2fcEkDY0.renounceTokenOwner.call(addressviimzAv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswjnzvEs = "0x0000000000000000000000000000000000000001"
		const addressq6NbDS = accounts[4]
		const addressIZWse2A = "0x0000000000000000000000000000000000000001"
		const GardenContractV2XHx0QHI = await GardenContractV2.new(addresswjnzvEs, addressq6NbDS, addressIZWse2A, {from: accounts[3]});
		const uinto2XSdXq = BigInt("319")
		const uintbinURHE = BigInt("20")
		const stringfo4aP2O = "JzVzsdVOx8EjchqJqAsEorN2aCfcbtF4FEYPORxss7G9Z8OmonklCHM"
		const boolzOlz7Nn = false
		const uintdKgz0KP = BigInt("85")
		const stringCoWPHVU = "DMZnQhD3i8ROLWreifwLknuq1E4OETIRwLz3iVdh3AM6y6MNLFnwB5YgNXvqpV"
		const uintWdyJIm8 = BigInt("426")
		const uintyT5uFv7 = BigInt("210")
		const stringYkCreV = "9IjDvusX6Rkm8qpmG4XOkxghV7QVa5eCnnmE7mxiRBXYpjgKAkKxlY1K1Now6h6GBTCKDo"
		const addressoKHJkCc = accounts[4]
		const address9YOF3F = accounts[2]
		const addressOacJuOs = "0x0000000000000000000000000000000000000001"
		const addressTZWxvHn = accounts[4]
		const uintIQAfAVk = BigInt("81")
		const uinto6951pN = BigInt("255")
		const stringOSoRefY = await GardenContractV2XHx0QHI.decompose.call(stringfo4aP2O, uintbinURHE, uinto2XSdXq, {from: accounts[2]});
		const uint256KFDgpyT = await GardenContractV2XHx0QHI.plant.call(uintWdyJIm8, stringCoWPHVU, uintdKgz0KP, boolzOlz7Nn, {from: accounts[1]});
		const uint256HCQSgkL = await GardenContractV2XHx0QHI.growthRemaining.call(addressoKHJkCc, stringYkCreV, uintyT5uFv7, {from: accounts[4]});
		const addressgKy9e4S = await GardenContractV2XHx0QHI.renounceTokenOwner.call(address9YOF3F, {from: accounts[1]});
		const addressKXzK4Qy = await GardenContractV2XHx0QHI.addTokenOwner.call(addressTZWxvHn, addressOacJuOs, {from: accounts[3]});
		const uint8cY1jkL = await GardenContractV2XHx0QHI.setTimeStamp.call(uinto6951pN, uintIQAfAVk, {from: accounts[4]});

		await expect(GardenContractV2XHx0QHI.decompose.call(stringfo4aP2O, uintbinURHE, uinto2XSdXq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressTxBNYQ = accounts[2]
		const addressEzMhnpF = accounts[2]
		const addressIkrsMzB = accounts[2]
		const GardenContractV2fcEkDY0 = await GardenContractV2.new(addressTxBNYQ, addressEzMhnpF, addressIkrsMzB, {from: accounts[2]});
		const stringAZy95Zo = "oEr3AB"
		const uint256Nsmce5d = await GardenContractV2fcEkDY0.totalTLPGrowing.call(stringAZy95Zo, {from: accounts[1]});

		await expect(GardenContractV2fcEkDY0.totalTLPGrowing.call(stringAZy95Zo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressOgaJKf2 = "0x0000000000000000000000000000000000000001"
		const addressYWQlFlp = accounts[4]
		const addressLAUGTwB = "0x0000000000000000000000000000000000000001"
		const GardenContractV2XHx0QHI = await GardenContractV2.new(addressOgaJKf2, addressYWQlFlp, addressLAUGTwB, {from: accounts[3]});
		const uintsmUc1s4 = BigInt("55")
		const uintCkWHvck = BigInt("31")
		const addressZQuleAG = accounts[4]
		const boolzOlz7Nn = false
		const uintu7suozW = BigInt("85")
		const stringCoWPHVU = "DMZnQhD3i8ROLWreifwLknuq1E4OETIRwLz3iVdh3AM6y6MNLFnwB5YgNXvqpV"
		const uintVHvgzAY = BigInt("426")
		const addressYS4Ii27 = accounts[2]
		const uint8vbKjBWN = await GardenContractV2XHx0QHI.zeroHoldings.call(uintCkWHvck, uintsmUc1s4, {from: accounts[5]});
		const addresse1V0cm0 = await GardenContractV2XHx0QHI.renounceTokenOwner.call(addressZQuleAG, {from: accounts[2]});
		const uint256KFDgpyT = await GardenContractV2XHx0QHI.plant.call(uintVHvgzAY, stringCoWPHVU, uintu7suozW, boolzOlz7Nn, {from: accounts[1]});
		const addressgKy9e4S = await GardenContractV2XHx0QHI.renounceTokenOwner.call(addressYS4Ii27, {from: accounts[1]});

		await expect(GardenContractV2XHx0QHI.zeroHoldings.call(uintCkWHvck, uintsmUc1s4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressVIAS6I1 = accounts[0]
		const addresswj3PWHT = accounts[0]
		const addressoE2VNw = accounts[1]
		const GardenContractV2lLw6T6F = await GardenContractV2.new(addressVIAS6I1, addresswj3PWHT, addressoE2VNw, {from: accounts[1]});
		const uintxHtHKa = BigInt("200")
		const stringG3onAto = "NJoQmnAopi68yEkVMG82kDIh11rXzqSJLEEfc3X5rN8zhm7hUzVm7FFiq3JgyyfEHbhzH2p"
		const addressFicz3dY = accounts[0]
		const uints036YT = BigInt("1077")
		const uintNKuwsrt = BigInt("95")
		const stringLdmZOR = "WE8usVKkAo7ASO2lXa2qxwilRocTwErtawQ3imV5olf8VmubEngRGctauIL2y6Q87T6kVAMUN0Ge7DF11ztjDjpcGouva"
		const stringZrvew17 = "HlQ6q5C2Y4DYe5L86iJSvkTJJV6gnNHuAF"
		const addressAWfGvQL = accounts[3]
		const uint256cW1yZRD = await GardenContractV2lLw6T6F.growthRemaining.call(addressFicz3dY, stringG3onAto, uintxHtHKa, {from: accounts[1]});
		const stringt32nPE = await GardenContractV2lLw6T6F.decompose.call(stringLdmZOR, uintNKuwsrt, uints036YT, {from: accounts[2]});
		const uint256mdC0Unq = await GardenContractV2lLw6T6F.balanceOf.call(addressAWfGvQL, stringZrvew17, {from: accounts[1]});

		await expect(GardenContractV2lLw6T6F.growthRemaining.call(addressFicz3dY, stringG3onAto, uintxHtHKa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresssE7obbA = accounts[2]
		const addressHTMraLP = accounts[2]
		const addressxEP3hs6 = accounts[2]
		const GardenContractV2fcEkDY0 = await GardenContractV2.new(addresssE7obbA, addressHTMraLP, addressxEP3hs6, {from: accounts[2]});
		const addressUpjcnxX = accounts[4]
		const stringZ9J6OV = "HPsC5nMxUPjNzaISqJoOpAWOPWBzD07ZMZTXX4sCSbcPWXvWRIJAgGcxJlTT4W73"
		const stringAZy95Zo = "oEG3AB"
		const addressFcuQRtf = await GardenContractV2fcEkDY0.changeOwner.call(addressUpjcnxX, {from: accounts[2]});
		const stringKkV8JY3 = await GardenContractV2fcEkDY0.harvestAllBeds.call(stringZ9J6OV, {from: accounts[4]});
		const uint256Nsmce5d = await GardenContractV2fcEkDY0.totalTLPGrowing.call(stringAZy95Zo, {from: accounts[1]});

		await expect(GardenContractV2fcEkDY0.harvestAllBeds.call(stringZ9J6OV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address1kIhXo = "0x0000000000000000000000000000000000000001"
		const addressibCNNzs = accounts[1]
		const addressMh2oagV = accounts[5]
		const GardenContractV2vApjRdj = await GardenContractV2.new(address1kIhXo, addressibCNNzs, addressMh2oagV, {from: accounts[1]});
		const stringbEJlhc6 = "eTyT4vH4nLW3pQgXG3QAawpghWIILxAUFGT5gYLCh1g2Ih9DfkhIh19zDiSAvwqAxPRuZjzrt5kD8vbijnl8x4sXK3JTxxtmqHM"
		const addressJ00N1Wi = accounts[2]
		const addressQp8bLvO = accounts[3]
		const uintWeRLiMq = BigInt("202")
		const stringa6vNBoj = "k7rawXAoBUj3NX5wCihSNwownwSD6YaQZ6lN1ZacVTm4X1LXJYQYineRkq40dGzdHVYPqmzsxzujFaDSGniUx2HVr"
		const uintS7yTfe = BigInt("137")
		const uint256VznLsj = await GardenContractV2vApjRdj.balanceOf.call(addressJ00N1Wi, stringbEJlhc6, {from: accounts[3]});
		const addressJASsUvz = await GardenContractV2vApjRdj.renounceTokenOwner.call(addressQp8bLvO, {from: accounts[4]});
		const uint256fafsFWj = await GardenContractV2vApjRdj.timeUntilNextTLP.call(stringa6vNBoj, uintWeRLiMq, {from: accounts[4]});
		const uint256XvOBK7v = await GardenContractV2vApjRdj.getTotalrTLPHarvest.call(uintS7yTfe, {from: accounts[4]});

		await expect(GardenContractV2vApjRdj.balanceOf.call(addressJ00N1Wi, stringbEJlhc6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressxfph7GJ = accounts[2]
		const addressxRXkFlF = accounts[2]
		const addressyYD8VVQ = accounts[2]
		const GardenContractV2fcEkDY0 = await GardenContractV2.new(addressxfph7GJ, addressxRXkFlF, addressyYD8VVQ, {from: accounts[2]});
		const addressfkL6mS4 = accounts[3]
		const uintcvNRXzA = BigInt("239")
		const stringY4oBbLF = "n6ehGYHSpTMqGrKR5yWpeDa09TcBKo5m1ThM5SEpHrk2"
		const uintF83rUAZ = BigInt("148")
		const stringHXbcvm9 = "S8carAAfzUWHV754zTJgfxfX8SRUrZCKgFBQkkXsbOkStl6C3VHquVItWwy0D0P34"
		const stringZ9J6OV = "HPsC5nMxUPjNzaISqJoOpAWOPWBzD07ZMZTXX4sCSbcPWXvWRIJAgGcxJlTT4W73"
		const addressFcuQRtf = await GardenContractV2fcEkDY0.changeOwner.call(addressfkL6mS4, {from: accounts[2]});
		const stringk3FlgWF = await GardenContractV2fcEkDY0.withdraw.call(stringY4oBbLF, uintcvNRXzA, {from: accounts[5]});
		const uint256luaoHVU = await GardenContractV2fcEkDY0.timeUntilNextTLP.call(stringHXbcvm9, uintF83rUAZ, {from: accounts[0]});
		const stringKkV8JY3 = await GardenContractV2fcEkDY0.harvestAllBeds.call(stringZ9J6OV, {from: accounts[4]});

		await expect(GardenContractV2fcEkDY0.withdraw.call(stringY4oBbLF, uintcvNRXzA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressGP8covV = accounts[3]
		const addressoBLZxRe = accounts[5]
		const addressA315Hhv = accounts[5]
		const GardenContractV2FXDqZPw = await GardenContractV2.new(addressGP8covV, addressoBLZxRe, addressA315Hhv, {from: accounts[4]});
		const stringXbzYNB2 = "RxWsejLdtBIBEUwyomxkEMrz65LapJwPCw7WSCiXs"
		const stringylkopJ = "8wsvEkIoQtVOEM84vn9c8vYEbayimMQcvqmLXeSHXL5LdDQvFPkEo6zSxzDGehqcY7trAHnexhOWukEXMVR1"
		const uint256BB3iEgH = await GardenContractV2FXDqZPw.totalTLPGrown.call(stringXbzYNB2, {from: accounts[2]});
		const stringBTlcRxW = await GardenContractV2FXDqZPw.harvestAllBeds.call(stringylkopJ, {from: accounts[1]});

		await expect(GardenContractV2FXDqZPw.totalTLPGrown.call(stringXbzYNB2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressfGDu6jn = accounts[2]
		const addressAyQ42eb = accounts[2]
		const addressLSOLwnO = accounts[2]
		const GardenContractV2fcEkDY0 = await GardenContractV2.new(addressfGDu6jn, addressAyQ42eb, addressLSOLwnO, {from: accounts[2]});
		const addressCxerfSh = accounts[3]
		const uintwMjqnkl = BigInt("148")
		const stringHXbcvm9 = "S8carAAfzUWHV754zTJgfxfX8SRUrZCKgFBQkkXsbOkStl6C3VHquVItWwy0D0P34"
		const stringZ9J6OV = "HPsC5nMxUPjNzaISqJoOpAWOPWBzD07ZMZTXX4sCSbcPWXvWRIJAgGcxJlTT4W73"
		const addressFcuQRtf = await GardenContractV2fcEkDY0.changeOwner.call(addressCxerfSh, {from: accounts[2]});
		const uint256luaoHVU = await GardenContractV2fcEkDY0.timeUntilNextTLP.call(stringHXbcvm9, uintwMjqnkl, {from: accounts[0]});
		const stringKkV8JY3 = await GardenContractV2fcEkDY0.harvestAllBeds.call(stringZ9J6OV, {from: accounts[4]});

		await expect(GardenContractV2fcEkDY0.timeUntilNextTLP.call(stringHXbcvm9, uintwMjqnkl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressBCQksis = accounts[2]
		const addresslOrvCr = accounts[2]
		const addressR23W3GJ = accounts[2]
		const GardenContractV2fcEkDY0 = await GardenContractV2.new(addressBCQksis, addresslOrvCr, addressR23W3GJ, {from: accounts[2]});
		const uintW0Ck7Lp = BigInt("215")
		const stringQ5A9BA = "Myzb9ervjniqOAV7k1yXD5lAy11WOOWKGNvDpw4gBF3HjLZ3VqPhsfyqEgoMgxpmukx5t1ewCiBbRprGeijfRsjQi84cpul"
		const stringZ9J6OV = "HPsC5nMxUPjNzaISqJoOpAWOPWBzD07ZXZTXX4sCSbcPWXvWRIJAgGcxJlTT4W73"
		const stringBHfI4aq = await GardenContractV2fcEkDY0.harvest.call(stringQ5A9BA, uintW0Ck7Lp, {from: accounts[3]});
		const stringKkV8JY3 = await GardenContractV2fcEkDY0.harvestAllBeds.call(stringZ9J6OV, {from: accounts[4]});

		await expect(GardenContractV2fcEkDY0.harvest.call(stringQ5A9BA, uintW0Ck7Lp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressdVaexYm = accounts[1]
		const addressO1pEJhs = accounts[3]
		const addressMxABcx = accounts[1]
		const GardenContractV2OO1EhsH = await GardenContractV2.new(addressdVaexYm, addressO1pEJhs, addressMxABcx, {from: accounts[2]});
		const stringRvvabgm = "zfMiXB1hJeSDNpzq9fJ6yaXsXpWphXo6bg4RDOXq8P"
		const stringEApYase = "FhJK7ISr22DtIywsKhzb2PRXMAxbzpi1oVdapWieFhNb"
		const uintFE8XvuK = BigInt("136")
		const stringOWTejJj = "fKCERTdiJEOnTdtpc4GMA4IUc8N6ky"
		const stringkjvrsTR = "WdFxWk6TV"
		const uint256AazEzoP = await GardenContractV2OO1EhsH.totalGardenSupply.call(stringRvvabgm, {from: accounts[2]});
		const uint256Fv4mwPI = await GardenContractV2OO1EhsH.totalTLPGrown.call(stringEApYase, {from: accounts[1]});
		const stringld4pYiN = await GardenContractV2OO1EhsH.claimDecompose.call(stringOWTejJj, uintFE8XvuK, {from: accounts[2]});
		const stringQVbQ9m = await GardenContractV2OO1EhsH.harvestAllBeds.call(stringkjvrsTR, {from: accounts[1]});

		await expect(GardenContractV2OO1EhsH.totalGardenSupply.call(stringRvvabgm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressDCpoIvi = accounts[2]
		const addressq0K0F1H = accounts[2]
		const addresszcSZIQ = accounts[2]
		const GardenContractV2fcEkDY0 = await GardenContractV2.new(addressDCpoIvi, addressq0K0F1H, addresszcSZIQ, {from: accounts[2]});
		const uintn62liC = BigInt("35")
		const stringtklmY5O = "QBQKB4SWhvlyAfI9p49wrqF"
		const uintAgGmsVo = BigInt("158")
		const stringXUs03g = "LAsPvpFEDSK2lO8teHXv3uJPIPe3L"
		const uintBnlv1as = BigInt("67")
		const stringBWSDWU1 = "v6afi22j1gtSCCBO0foIXUEQuGe0h9BHc1Qt"
		const stringsdp4ZB = await GardenContractV2fcEkDY0.claimDecompose.call(stringtklmY5O, uintn62liC, {from: accounts[1]});
		const stringEzZXY0a = await GardenContractV2fcEkDY0.claimDecompose.call(stringXUs03g, uintAgGmsVo, {from: accounts[5]});
		const string2AXaEX = await GardenContractV2fcEkDY0.withdraw.call(stringBWSDWU1, uintBnlv1as, {from: accounts[2]});

		await expect(GardenContractV2fcEkDY0.claimDecompose.call(stringtklmY5O, uintn62liC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressikOeVbs = accounts[2]
		const addressFDiBrP0 = accounts[2]
		const addresscfZgKeD = accounts[2]
		const GardenContractV2fcEkDY0 = await GardenContractV2.new(addressikOeVbs, addressFDiBrP0, addresscfZgKeD, {from: accounts[2]});
		const uintEoat6ED = BigInt("168")
		const stringZ9J6OV = "HPsC5nMxUPjNzaISqJoOpAWOPWBzD07ZMZTXX4CSbcPWXvWRIJAgGcxJlTT4W73"
		const stringnNVTF06 = "feVWXrWGpyS0LvVbfSXk3dtVyPgev1wEzcMNAiSibWc9HceiuxPFymTDS1ou446rVHsho6HkOI762KVxCd"
		const uint256yFzOnfr = await GardenContractV2fcEkDY0.getTotalrTLPHarvest.call(uintEoat6ED, {from: accounts[2]});
		const stringKkV8JY3 = await GardenContractV2fcEkDY0.harvestAllBeds.call(stringZ9J6OV, {from: accounts[4]});
		const stringmKpJvpT = await GardenContractV2fcEkDY0.harvestAllBeds.call(stringnNVTF06, {from: accounts[0]});

		await expect(GardenContractV2fcEkDY0.getTotalrTLPHarvest.call(uintEoat6ED, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressfA7ZSUc = accounts[2]
		const addressFktUyu9 = accounts[4]
		const addresspI6OuaK = accounts[2]
		const GardenContractV2KU35cN = await GardenContractV2.new(addressfA7ZSUc, addressFktUyu9, addresspI6OuaK, {from: accounts[2]});
		const stringN0PsHYN = "Xabu2pSCXHPTbXIkPVFaD9KNxmK6QVKvPbQA5DqPOXCpIwQfcDwQCvB4wbYwPdfWuDQzCAXrIHtE71oo"
		const stringBsbvFUQ = "rHxQ7uG"
		const stringyX0sEct = "vLVby"
		const uintCAWWvlH = BigInt("73")
		const stringIIYEFbn = "7p65XFSivSY5ApEgEva9FhX7OAzWbYsnRA37hEDme"
		const uint256s65eUbo = await GardenContractV2KU35cN.totalTLPDecomposed.call(stringN0PsHYN, {from: accounts[4]});
		const uint256agoGI4x = await GardenContractV2KU35cN.totalTLPGrowing.call(stringBsbvFUQ, {from: accounts[5]});
		const uint256pUQjG6H = await GardenContractV2KU35cN.totalTLPGrown.call(stringyX0sEct, {from: accounts[2]});
		await GardenContractV2KU35cN.totalBedSupply.call(stringIIYEFbn, uintCAWWvlH, {from: accounts[0]});

		await expect(GardenContractV2KU35cN.totalTLPDecomposed.call(stringN0PsHYN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressZ5xepor = "0x0000000000000000000000000000000000000001"
		const addressMwegLVr = accounts[4]
		const addressTwajokk = "0x0000000000000000000000000000000000000001"
		const GardenContractV2XHx0QHI = await GardenContractV2.new(addressZ5xepor, addressMwegLVr, addressTwajokk, {from: accounts[3]});
		const stringy99I5M = "n3lGEoF1CHnLR8OYO3HVuUyztccD2wBTKucnDjx2LS1klhI8eTXCLJSwEawTARP1sBb1pOffTfjhb6GWwi6UsugicTAzu"
		const uint0KpqP2 = BigInt("319")
		const uintYnHrzUN = BigInt("20")
		const stringfo4aP2O = "JzVzsdVOx8EjchqJqAsEorN2aCfcbtF4FEYPORxss7G9Z8OmonklCLM"
		const uintHigYmd4 = BigInt("1838")
		const uintXvvuOL = BigInt("238")
		const stringBogbWT = "YK5ah5dk1wxBjuWuIX2luxPKH3lmnwjHspn8Y62TbAJKgS4U7sXXFY4Ld"
		const boolgNOtOny = false
		const uintCIaqF4Q = BigInt("1")
		const stringv4QiQ8 = "qPvNoe3UBNjBG7HMNF8ot7XpuA32aymID6WQ5OVEXiGtUwN50iAiKhIVBAB"
		const uintc7Qs2Rd = BigInt("57")
		const uint256WXfMauH = await GardenContractV2XHx0QHI.totalTLPBurnt.call(stringy99I5M, {from: accounts[4]});
		const stringOSoRefY = await GardenContractV2XHx0QHI.decompose.call(stringfo4aP2O, uintYnHrzUN, uint0KpqP2, {from: accounts[2]});
		const stringPR7IyNt = await GardenContractV2XHx0QHI.decompose.call(stringBogbWT, uintXvvuOL, uintHigYmd4, {from: accounts[3]});
		const uint256qyl5VDR = await GardenContractV2XHx0QHI.plant.call(uintc7Qs2Rd, stringv4QiQ8, uintCIaqF4Q, boolgNOtOny, {from: accounts[0]});

		await expect(GardenContractV2XHx0QHI.totalTLPBurnt.call(stringy99I5M, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressX4EoV7R = accounts[2]
		const addressyQLdBF = accounts[2]
		const addressSoRpb5b = accounts[2]
		const GardenContractV2fcEkDY0 = await GardenContractV2.new(addressX4EoV7R, addressyQLdBF, addressSoRpb5b, {from: accounts[2]});
		const addressOHRvhcO = accounts[0]
		const addressA5cAqAi = "0x0000000000000000000000000000000000000001"
		const boolJNtA5M6 = true
		const uintLgr3fKM = BigInt("113")
		const stringGHRenZD = "jGhZX89olz5W6XugHZVgXyQHkTZ3t3ZQzp7sDMTSuqMsoVgPxJ9vTY64A"
		const uintaYJLgri = BigInt("1031")
		const addressIDCuO6 = await GardenContractV2fcEkDY0.addTokenOwner.call(addressA5cAqAi, addressOHRvhcO, {from: accounts[2]});
		const uint256IuULiz8 = await GardenContractV2fcEkDY0.plant.call(uintaYJLgri, stringGHRenZD, uintLgr3fKM, boolJNtA5M6, {from: accounts[5]});

		await expect(GardenContractV2fcEkDY0.addTokenOwner.call(addressA5cAqAi, addressOHRvhcO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresslbD5xAs = accounts[2]
		const addressbUkku0C = accounts[2]
		const addressB7qjCb = accounts[2]
		const GardenContractV2fcEkDY0 = await GardenContractV2.new(addresslbD5xAs, addressbUkku0C, addressB7qjCb, {from: accounts[2]});
		const addressqOG1NVX = accounts[4]
		const boolJNtA5M6 = false
		const uintvjQ0u1U = BigInt("113")
		const stringGHRenZD = "jGhZX89olz5W6XugHZVgXyQHkTZ3t3ZQzp7sDMTSuqMsoVgPxJ9vTY64A"
		const uintS4mSPjB = BigInt("1031")
		const addressCCktNbz = accounts[3]
		const uintF5fozOm = BigInt("62")
		const string3Bsxv9 = "vIHoFLSa5GI4lEkMsq3qsXfQToEBLbsIrCVUbZXZkKJkM2WUY2JGtmOkkU5WOjLLcJuNEgse9y12v"
		const addressVS3Vxq3 = await GardenContractV2fcEkDY0.changeBenefitiary.call(addressqOG1NVX, {from: accounts[2]});
		const uint256IuULiz8 = await GardenContractV2fcEkDY0.plant.call(uintS4mSPjB, stringGHRenZD, uintvjQ0u1U, boolJNtA5M6, {from: accounts[5]});
		const addressVqjYLzT = await GardenContractV2fcEkDY0.changeBenefitiary.call(addressCCktNbz, {from: accounts[0]});
		const stringe6g202X = await GardenContractV2fcEkDY0.harvest.call(string3Bsxv9, uintF5fozOm, {from: accounts[3]});

		await expect(GardenContractV2fcEkDY0.plant.call(uintS4mSPjB, stringGHRenZD, uintvjQ0u1U, boolJNtA5M6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressShlG8p3 = accounts[2]
		const addressIwgJ17 = accounts[2]
		const addresscc8ZuUb = accounts[2]
		const GardenContractV2fcEkDY0 = await GardenContractV2.new(addressShlG8p3, addressIwgJ17, addresscc8ZuUb, {from: accounts[2]});
		const uintUaAPpLV = BigInt("0")
		const uint256yFzOnfr = await GardenContractV2fcEkDY0.getTotalrTLPHarvest.call(uintUaAPpLV, {from: accounts[2]});

		await expect(GardenContractV2fcEkDY0.getTotalrTLPHarvest.call(uintUaAPpLV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQzwBIrX = accounts[1]
		const addressSSoXh4u = accounts[2]
		const address2L2KmL = accounts[4]
		const GardenContractV2d8j9F19 = await GardenContractV2.new(addressQzwBIrX, addressSSoXh4u, address2L2KmL, {from: accounts[0]});
		const addressw7sPlU = "0x0000000000000000000000000000000000000001"
		const stringSyXIJwO = "KJT1jxmVetn"
		const uintguIjeox = BigInt("152")
		const stringK8puIVh = "oX9UCNEEtLj5w4dhDkhhnc5tutcc"
		const addressYZyiy1 = accounts[4]
		const addressfpThFp1 = accounts[1]
		const uintU52EAzf = BigInt("44")
		const stringioWv1SG = "zqtq392HEkhmqGizziWLxjnpvDcSBVvb9Un7AoWlOdUFnDy5mqvOcQMB8i1xfG4"
		const addresss2VqCPz = await GardenContractV2d8j9F19.renounceTokenOwner.call(addressw7sPlU, {from: accounts[0]});
		const stringH7mDTMx = await GardenContractV2d8j9F19.harvestAllBeds.call(stringSyXIJwO, {from: accounts[1]});
		const stringO9WGHgg = await GardenContractV2d8j9F19.harvest.call(stringK8puIVh, uintguIjeox, {from: accounts[2]});
		const addressZkvOe6E = await GardenContractV2d8j9F19.addTokenOwner.call(addressfpThFp1, addressYZyiy1, {from: accounts[4]});
		const stringNY8qeZr = await GardenContractV2d8j9F19.claimDecompose.call(stringioWv1SG, uintU52EAzf, {from: accounts[0]});

		await expect(GardenContractV2d8j9F19.renounceTokenOwner.call(addressw7sPlU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})