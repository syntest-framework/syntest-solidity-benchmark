const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressvGyUdbX = accounts[0]
		const addressggTpKeS = accounts[4]
		const addressZNciBRA = accounts[0]
		const GardenContractV2qsrEwD8 = await GardenContractV2.new(addressvGyUdbX, addressggTpKeS, addressZNciBRA, {from: accounts[1]});
		const stringyf5e1V9 = "2ng7"
		const boolD9jW4If = false
		const uintZcaG8ER = BigInt("59")
		const stringxnYjlVa = "IPIt8ZNMCYNjTpCvRUNLj"
		const uintGMlDys3 = BigInt("1178")
		const uintyEehims = BigInt("98")
		const uint256KzX9GMO = await GardenContractV2qsrEwD8.totalGardenSupply.call(stringyf5e1V9, {from: accounts[0]});
		const uint256taHErAP = await GardenContractV2qsrEwD8.plant.call(uintGMlDys3, stringxnYjlVa, uintZcaG8ER, boolD9jW4If, {from: accounts[2]});
		const uint256uCRpcg0 = await GardenContractV2qsrEwD8.getTotalrTLPHarvest.call(uintyEehims, {from: accounts[1]});

		await expect(GardenContractV2qsrEwD8.totalGardenSupply.call(stringyf5e1V9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressY6WvNa = accounts[4]
		const address71HX6Q = accounts[1]
		const addressUdII0TZ = accounts[1]
		const GardenContractV2NRkzqik = await GardenContractV2.new(addressY6WvNa, address71HX6Q, addressUdII0TZ, {from: accounts[4]});
		const uintyvCHZQ2 = BigInt("1819")
		const uintTXmwuXb = BigInt("39")
		const stringxKzzUXM = "sctvpySsPDmVmvdtqTzzzhH7afISd98tmiEsosM2aZPMup4SvNQGlO8MseBh5lb8rafhduIUv9y9BND"
		const addressIrDE4m = accounts[3]
		const addressgEARDk = accounts[2]
		const booloD1sEv = false
		const uintFidAkbC = BigInt("110")
		const stringW0LP7Ju = "D5gdrxmMng28kIF6fY8kVW9kzeCt1VPY15uppSre24bIUYCXjHwuAprGqKgRBqUhY7c6SqBlUtPnAN8bacVzWarCBAvadT0R8w"
		const uint4vqYl9 = BigInt("1881")
		const stringmCIpdXA = await GardenContractV2NRkzqik.decompose.call(stringxKzzUXM, uintTXmwuXb, uintyvCHZQ2, {from: accounts[1]});
		const addressQrmIDPu = await GardenContractV2NRkzqik.addTokenOwner.call(addressgEARDk, addressIrDE4m, {from: accounts[5]});
		const uint256LsMz3Xa = await GardenContractV2NRkzqik.plant.call(uint4vqYl9, stringW0LP7Ju, uintFidAkbC, booloD1sEv, {from: accounts[3]});

		await expect(GardenContractV2NRkzqik.decompose.call(stringxKzzUXM, uintTXmwuXb, uintyvCHZQ2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQyEbqHm = accounts[2]
		const addresslvVYuDq = accounts[0]
		const addressCliGwE = accounts[0]
		const GardenContractV2W8kDUpR = await GardenContractV2.new(addressQyEbqHm, addresslvVYuDq, addressCliGwE, {from: accounts[5]});
		const stringdAOlVVI = "o6vYP5UAd9gqyRhWGyJdZbQGc44u2Ky9GGsH3es3QGMgByllMQkk3mnQj06nhqrWgJ75Fz45xzgOu7Enfjzcu"
		const uintkXrqcyH = BigInt("151")
		const stringnS1xcx5 = "f0VspImOsUR6DTGNVyPuxRSEAKnXpIFoiJVmzsvgszvUNSeeibPOnyAocvMjeKOy2ozuK1wy1llAcP1M5madU"
		const addressIoQU2bC = accounts[1]
		const stringxOL0CVF = "DJlW"
		const uintpyUh6eu = BigInt("1014")
		const uinttvuVnhw = BigInt("56")
		const stringb2pC5Sm = "xWRVTXwlld6puR4KQ6nE6m1cRBPJSQx9n7NoGddryCb7f5D98Vtd9TNN8v1qBQnPKQ1yphyPxHtOcyt"
		const uint256BZR5kz = await GardenContractV2W8kDUpR.totalTLPGrowing.call(stringdAOlVVI, {from: accounts[2]});
		await GardenContractV2W8kDUpR.totalBedSupply.call(stringnS1xcx5, uintkXrqcyH, {from: "0x0000000000000000000000000000000000000001"});
		const addressfPr7Rat = await GardenContractV2W8kDUpR.changeOwner.call(addressIoQU2bC, {from: accounts[3]});
		const uint256ZCU2yJ5 = await GardenContractV2W8kDUpR.totalTLPBurnt.call(stringxOL0CVF, {from: accounts[1]});
		const stringD9b7GrX = await GardenContractV2W8kDUpR.decompose.call(stringb2pC5Sm, uinttvuVnhw, uintpyUh6eu, {from: accounts[4]});

		await expect(GardenContractV2W8kDUpR.totalTLPGrowing.call(stringdAOlVVI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspT4r50n = accounts[1]
		const addressIWdF7PF = accounts[5]
		const addressOMY5o5c = accounts[5]
		const GardenContractV2INSKbEr = await GardenContractV2.new(addresspT4r50n, addressIWdF7PF, addressOMY5o5c, {from: accounts[3]});
		const uintznjgc7G = BigInt("230")
		const uintxm5t6UK = BigInt("17")
		const boolZ4Nsmym = false
		const uintZMF7fw4 = BigInt("244")
		const stringwB8Q8e8 = "HlY9qrI6Q4Umtjnv3hxpnWeOfopjBK1bH1YCmORyOE4CCWShUbpKzV5kzDEvVZRkopJuiPO13uUIoPjaf7"
		const uintrNwEyOZ = BigInt("1374")
		const addressYyPpuly = accounts[0]
		const addressZxv86NH = accounts[2]
		const uint8PiLxN3T = await GardenContractV2INSKbEr.zeroHoldings.call(uintxm5t6UK, uintznjgc7G, {from: accounts[5]});
		const uint256aen4WIr = await GardenContractV2INSKbEr.plant.call(uintrNwEyOZ, stringwB8Q8e8, uintZMF7fw4, boolZ4Nsmym, {from: accounts[0]});
		const addresslfi9Wg2 = await GardenContractV2INSKbEr.addTokenOwner.call(addressZxv86NH, addressYyPpuly, {from: accounts[0]});

		await expect(GardenContractV2INSKbEr.zeroHoldings.call(uintxm5t6UK, uintznjgc7G, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressGqW3qy = accounts[5]
		const addressguoMQZO = accounts[0]
		const addressnS7n7H9 = accounts[0]
		const GardenContractV2yG3bcgT = await GardenContractV2.new(addressGqW3qy, addressguoMQZO, addressnS7n7H9, {from: accounts[1]});
		const addressXL2qz1P = accounts[3]
		const addressxfpTEPX = accounts[3]
		const booljexELR7 = true
		const uintYWmvHwa = BigInt("160")
		const stringKzvbpR1 = "8z9cigKKX79uWSVBapKhDEFvWGdQIAdEGHYR8OIPriIWBwXIjjqmhnVh"
		const uintbzyIc9L = BigInt("1768")
		const stringGwlg3E5 = "ay5RO"
		const uintIoxftWs = BigInt("6")
		const uintAxIZ4eQ = BigInt("74")
		const uintmOwjSpT = BigInt("31")
		const stringsPoiiWD = "xRCLVnc6P7ZA77NLIsjag6erwf3lyCuGrCzIkLJc2vF7ezgcVrBh8vUraOsMd"
		const addresscjKa1Eu = await GardenContractV2yG3bcgT.changeOwner.call(addressXL2qz1P, {from: accounts[3]});
		const addressLL2OtXq = await GardenContractV2yG3bcgT.changeOwner.call(addressxfpTEPX, {from: accounts[3]});
		const uint256FYOfTOp = await GardenContractV2yG3bcgT.plant.call(uintbzyIc9L, stringKzvbpR1, uintYWmvHwa, booljexELR7, {from: accounts[0]});
		const uint256DKnOnKL = await GardenContractV2yG3bcgT.totalTLPBurnt.call(stringGwlg3E5, {from: accounts[4]});
		const uint8d2PgTWF = await GardenContractV2yG3bcgT.setTimeStamp.call(uintAxIZ4eQ, uintIoxftWs, {from: accounts[4]});
		const stringZsOMR4U = await GardenContractV2yG3bcgT.withdraw.call(stringsPoiiWD, uintmOwjSpT, {from: accounts[0]});

		await expect(GardenContractV2yG3bcgT.changeOwner.call(addressXL2qz1P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressSz2OOQM = accounts[4]
		const addressZKAcwC = accounts[2]
		const addresswx8u9BE = accounts[1]
		const GardenContractV2swE2jbM = await GardenContractV2.new(addressSz2OOQM, addressZKAcwC, addresswx8u9BE, {from: "0x0000000000000000000000000000000000000001"});
		const stringe10Rg1h = "W1ItMDsRoJ4goQwaOZSi"
		const addresse9ljIgn = accounts[3]
		const stringisRPK67 = "W5oHNoWaw3CW7XKAJINoj2V1ctsUeUR4UzcHyQ2gPskJpxtUQCj1wKH47dyHasPmE9B"
		const uint256GxsoIff = await GardenContractV2swE2jbM.balanceOf.call(addresse9ljIgn, stringe10Rg1h, {from: accounts[2]});
		const uint256XKK5DV = await GardenContractV2swE2jbM.totalTLPGrown.call(stringisRPK67, {from: accounts[0]});
	});

	it('test for GardenContractV2', async () => {
		const addresseAXgKLa = accounts[0]
		const addressfRI8Xmo = accounts[4]
		const addresseQAIHg = accounts[3]
		const GardenContractV2rl5jRuq = await GardenContractV2.new(addresseAXgKLa, addressfRI8Xmo, addresseQAIHg, {from: accounts[5]});
		const uintHTmHeNz = BigInt("152")
		const stringaqVQSNH = "2CcN4JFiN42yVfQRE8FgG2BSSboK6S"
		const boolcByISAb = true
		const uintGVhLbSh = BigInt("206")
		const stringdPEs4Ps = "SeXEMHy5fwWoPqGS61fY7vtjCsWNmIa4x92qd5qbknSRe5o3aZ"
		const uintYWMd9va = BigInt("1542")
		const stringDgURvf4 = "ADOORfC2yMEVf1Cxgfa2P8su83kg6z7b5wacGQafTh9uRIM"
		const addressoJoGmVq = accounts[4]
		const uintxMTUUvE = BigInt("1955")
		const uintKZmdeXX = BigInt("30")
		const stringZGvgHFL = "bQSE0kviGaYKRKqmGLafcRY1SGWBmqVGfRUf67UETrev"
		await GardenContractV2rl5jRuq.totalBedSupply.call(stringaqVQSNH, uintHTmHeNz, {from: accounts[3]});
		const uint256bXbldn = await GardenContractV2rl5jRuq.plant.call(uintYWMd9va, stringdPEs4Ps, uintGVhLbSh, boolcByISAb, {from: accounts[3]});
		const uint256CoEiNUx = await GardenContractV2rl5jRuq.balanceOf.call(addressoJoGmVq, stringDgURvf4, {from: accounts[4]});
		const stringlTvI50z = await GardenContractV2rl5jRuq.decompose.call(stringZGvgHFL, uintKZmdeXX, uintxMTUUvE, {from: accounts[4]});

		await expect(GardenContractV2rl5jRuq.totalBedSupply.call(stringaqVQSNH, uintHTmHeNz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressYrF6dC = accounts[2]
		const addressDDDU8I7 = accounts[3]
		const addressWaYuVnl = accounts[2]
		const GardenContractV2vnETO3O = await GardenContractV2.new(addressYrF6dC, addressDDDU8I7, addressWaYuVnl, {from: accounts[0]});
		const stringHvrDW2D = "OqqsE6sndUfy0MkjTimMTlcT6pmDFY6jGeei3"
		const uintOJojGTy = BigInt("128")
		const stringY8MDuVJ = "T0rR8czwb"
		const uintaFGKXL2 = BigInt("101")
		const stringJnza4ag = "t8AUCAkujThYyWyOcSh7VX9S7t"
		const addressuRNNZ6G = "0x0000000000000000000000000000000000000001"
		const uint256p3SlKTk = await GardenContractV2vnETO3O.totalTLPDecomposed.call(stringHvrDW2D, {from: accounts[0]});
		const stringfz0CJC3 = await GardenContractV2vnETO3O.withdraw.call(stringY8MDuVJ, uintOJojGTy, {from: accounts[4]});
		const stringjwEKJ0 = await GardenContractV2vnETO3O.harvest.call(stringJnza4ag, uintaFGKXL2, {from: "0x0000000000000000000000000000000000000001"});
		const addressvXKy3Ef = await GardenContractV2vnETO3O.renounceTokenOwner.call(addressuRNNZ6G, {from: accounts[4]});

		await expect(GardenContractV2vnETO3O.totalTLPDecomposed.call(stringHvrDW2D, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressb1mXNt6 = accounts[4]
		const addresspOW2XP3 = accounts[4]
		const addressIdhjqVw = accounts[1]
		const GardenContractV2mJDSiAL = await GardenContractV2.new(addressb1mXNt6, addresspOW2XP3, addressIdhjqVw, {from: accounts[4]});
		const boolmXC0a4L = true
		const uintIy0qgbB = BigInt("4")
		const stringpUyvcrI = "zDJlq1tomULKMBlFhpO6Mq4xsQzVIsjMDFujIoxCcIO4xRuErh7RvzNxix3YM2VaMkTQ5JYA5pQihH4I4Cn3FkfLI"
		const uintm8SpAsE = BigInt("1838")
		const stringuyglAKg = "JCccZlWmn7"
		const uintN72S6gI = BigInt("69")
		const uint256NLLBG5 = await GardenContractV2mJDSiAL.plant.call(uintm8SpAsE, stringpUyvcrI, uintIy0qgbB, boolmXC0a4L, {from: accounts[1]});
		const uint256biiF8Dv = await GardenContractV2mJDSiAL.totalTLPDecomposed.call(stringuyglAKg, {from: accounts[0]});
		const uint256gV6NFVa = await GardenContractV2mJDSiAL.getTotalsTLPHarvest.call(uintN72S6gI, {from: accounts[0]});

		await expect(GardenContractV2mJDSiAL.plant.call(uintm8SpAsE, stringpUyvcrI, uintIy0qgbB, boolmXC0a4L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressrZZBkWN = accounts[4]
		const addressMz4Q6qf = accounts[4]
		const addressLEHFBu1 = accounts[1]
		const GardenContractV2mJDSiAL = await GardenContractV2.new(addressrZZBkWN, addressMz4Q6qf, addressLEHFBu1, {from: accounts[4]});
		const stringQyVzmfC = "j9U5dZsB4ocbPybNQE5vAw3K3EToLK8RArPHHF8YcXz"
		const boolmXC0a4L = true
		const uintWeNQTL6 = BigInt("0")
		const stringpUyvcrI = "zDJlq1tomULKMBlFhpO6Mq4xsQzVIsjMDFujIoxCcIO4xRuErh7RvzNxix3YM2VaMkTQ5JYA5pQihH4I4Cn3FkfLI"
		const uintkmklZHQ = BigInt("1838")
		const stringuyglAKg = "JCccZlWmn7"
		const uintwNpjZTq = BigInt("49")
		const string8m9xdE = "1JrUsegsHXLNjrc9Oq4Ih39H4GzzqIUJRs"
		const uintRs7LxUX = BigInt("69")
		const uint256QOF04E = await GardenContractV2mJDSiAL.totalTLPBurnt.call(stringQyVzmfC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NLLBG5 = await GardenContractV2mJDSiAL.plant.call(uintkmklZHQ, stringpUyvcrI, uintWeNQTL6, boolmXC0a4L, {from: accounts[1]});
		const uint256biiF8Dv = await GardenContractV2mJDSiAL.totalTLPDecomposed.call(stringuyglAKg, {from: accounts[0]});
		const stringV9d468L = await GardenContractV2mJDSiAL.withdraw.call(string8m9xdE, uintwNpjZTq, {from: accounts[0]});
		const uint256gV6NFVa = await GardenContractV2mJDSiAL.getTotalsTLPHarvest.call(uintRs7LxUX, {from: accounts[0]});

		await expect(GardenContractV2mJDSiAL.totalTLPBurnt.call(stringQyVzmfC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressKCy7w8X = accounts[2]
		const addressjfredOh = accounts[1]
		const addressdcYcREf = accounts[1]
		const GardenContractV2FvRQjKQ = await GardenContractV2.new(addressKCy7w8X, addressjfredOh, addressdcYcREf, {from: accounts[1]});
		const stringb19yjxO = "63yDX4adbb5tPvRud18nz3NdhMf9te61marM7UmUj28W5wunqG9f22cXbN8gPvsn9Vhg7WpXx5b2MEg9wvEywvOxQ1729RhY"
		const addresswFpznys = accounts[5]
		const stringnbSS3oM = "SEqoxO2txByMLH8aazSCSmftLsUfWa8CupTT11dtXjUYfo1td"
		const addressyIyg0lq = "0x0000000000000000000000000000000000000001"
		const uintjmsWcF = BigInt("96")
		const uintUPI65lk = BigInt("141")
		const addressNUMbWpA = accounts[3]
		const addressW4L0p7T = accounts[2]
		const uint256c7JrMmM = await GardenContractV2FvRQjKQ.balanceOf.call(addresswFpznys, stringb19yjxO, {from: accounts[0]});
		const uint256x6yRUR = await GardenContractV2FvRQjKQ.balanceOf.call(addressyIyg0lq, stringnbSS3oM, {from: accounts[0]});
		const uint8qNRHcv = await GardenContractV2FvRQjKQ.zeroHoldings.call(uintUPI65lk, uintjmsWcF, {from: accounts[4]});
		const addressfsAldgh = await GardenContractV2FvRQjKQ.changeOwner.call(addressNUMbWpA, {from: accounts[4]});
		const addressJPkBfgL = await GardenContractV2FvRQjKQ.changeBenefitiary.call(addressW4L0p7T, {from: accounts[4]});

		await expect(GardenContractV2FvRQjKQ.balanceOf.call(addresswFpznys, stringb19yjxO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresska8FWQ = "0x0000000000000000000000000000000000000001"
		const addressvCwd4as = accounts[2]
		const addressucRj12C = accounts[2]
		const GardenContractV2DUcW9N0 = await GardenContractV2.new(addresska8FWQ, addressvCwd4as, addressucRj12C, {from: accounts[0]});
		const uintgMf1iL1 = BigInt("104")
		const addressUt8qwsL = "0x0000000000000000000000000000000000000001"
		const uintDlfSd7Q = BigInt("162")
		const stringNRlSJ6g = "3yT9YscYE2dNnsn5o5cTkWmtEifY"
		const stringnZcYPjE = "RSdA6HaBI46bodVWksje4lKf5IABPmweISIvzsfr9rYMrr1ZChm6V5ymeN7OoDyya4GxAujaG0"
		const uint256O5X6lfm = await GardenContractV2DUcW9N0.getTotalrTLPHarvest.call(uintgMf1iL1, {from: accounts[2]});
		const addressLiQT0el = await GardenContractV2DUcW9N0.changeOwner.call(addressUt8qwsL, {from: accounts[1]});
		const stringINKYyYQ = await GardenContractV2DUcW9N0.withdraw.call(stringNRlSJ6g, uintDlfSd7Q, {from: accounts[0]});
		const stringNWi3k35 = await GardenContractV2DUcW9N0.harvestAllBeds.call(stringnZcYPjE, {from: accounts[5]});

		await expect(GardenContractV2DUcW9N0.getTotalrTLPHarvest.call(uintgMf1iL1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressEZ11Sod = accounts[2]
		const addressu6GHRTq = accounts[1]
		const addressMcNbKGx = accounts[1]
		const GardenContractV2FvRQjKQ = await GardenContractV2.new(addressEZ11Sod, addressu6GHRTq, addressMcNbKGx, {from: accounts[1]});
		const uinteIfoRlm = BigInt("49")
		const stringJW9lcaR = "aRFCPvh"
		const addressNOVHvAs = accounts[0]
		const stringb19yjxO = "63yDX4adbb5tPvRud18nz3NdhMf9te61marM7UmUj28W5wunqG9f22cXbN8gPvsn9Vhg7WpXx5b2MEg9wvEywvOxQ1729RhY"
		const addressgUodbF4 = accounts[5]
		const addresszTg1eDu = "0x0000000000000000000000000000000000000001"
		const stringnbSS3oM = "SEqoxO2txByMLH8aazSCSmftLsUfWa8CupTT11dtXjUYfo1td"
		const addressVMAT62q = accounts[4]
		const address1u5xDh = accounts[2]
		const addressxLLEkW6 = accounts[5]
		const addressFr63Mud = accounts[2]
		const uint2569GufyG = await GardenContractV2FvRQjKQ.growthRemaining.call(addressNOVHvAs, stringJW9lcaR, uinteIfoRlm, {from: accounts[2]});
		const uint256c7JrMmM = await GardenContractV2FvRQjKQ.balanceOf.call(addressgUodbF4, stringb19yjxO, {from: accounts[0]});
		const addresscMLq0ni = await GardenContractV2FvRQjKQ.changeOwner.call(addresszTg1eDu, {from: accounts[4]});
		const uint256x6yRUR = await GardenContractV2FvRQjKQ.balanceOf.call(addressVMAT62q, stringnbSS3oM, {from: accounts[0]});
		const addressmXGijl8 = await GardenContractV2FvRQjKQ.changeBenefitiary.call(address1u5xDh, {from: accounts[1]});
		const addressfsAldgh = await GardenContractV2FvRQjKQ.changeOwner.call(addressxLLEkW6, {from: accounts[4]});
		const addressJPkBfgL = await GardenContractV2FvRQjKQ.changeBenefitiary.call(addressFr63Mud, {from: accounts[4]});

		await expect(GardenContractV2FvRQjKQ.growthRemaining.call(addressNOVHvAs, stringJW9lcaR, uinteIfoRlm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressF7FnZ3e = accounts[0]
		const addressXeiXOA = accounts[1]
		const addresshxCSsKG = accounts[2]
		const GardenContractV28E5oJz = await GardenContractV2.new(addressF7FnZ3e, addressXeiXOA, addresshxCSsKG, {from: accounts[1]});
		const uintiictwhf = BigInt("167")
		const stringRt693nq = "zwoeYdD52cqOFknDeEphFuHthE67ZUIlVChBseoJPU5VeGdz3P7mnuxCxgn8hhyBrfdPyK8kRStKkCWawmQQuaC0j6fIw9re"
		const uintWUbSwCa = BigInt("186")
		const stringErqbMsP = "nSqE7gW3u70H6e2924wwNfudTiTlS9ZJ6lOOyJywDqfog"
		const uintWMzsGyc = BigInt("153")
		const uintSxnKdVv = BigInt("51")
		const stringWZxs36E = "BxOG9wJBaXy7m4MNQ58XlSsuySwhU"
		const stringmHGTlSp = await GardenContractV28E5oJz.harvest.call(stringRt693nq, uintiictwhf, {from: accounts[1]});
		const stringm7JDDxH = await GardenContractV28E5oJz.claimDecompose.call(stringErqbMsP, uintWUbSwCa, {from: accounts[0]});
		const uint8iHRHKj2 = await GardenContractV28E5oJz.zeroHoldings.call(uintSxnKdVv, uintWMzsGyc, {from: accounts[5]});
		const uint256xZMRYES = await GardenContractV28E5oJz.totalTLPDecomposed.call(stringWZxs36E, {from: accounts[2]});

		await expect(GardenContractV28E5oJz.harvest.call(stringRt693nq, uintiictwhf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressUx5qziI = "0x0000000000000000000000000000000000000001"
		const addresse2k8XZq = accounts[2]
		const addressqqjV2tZ = accounts[2]
		const GardenContractV2DUcW9N0 = await GardenContractV2.new(addressUx5qziI, addresse2k8XZq, addressqqjV2tZ, {from: accounts[0]});
		const addresssRtrHDJ = accounts[3]
		const addressDr07A0h = accounts[2]
		const uintYRUoHKE = BigInt("104")
		const uintNkHjJRw = BigInt("237")
		const stringKLYhHqa = "NtDMQ556i4sd5sa29LXtHClH6vikhVODUKNl25va6xz9"
		const addresszeBCjru = accounts[2]
		const addressYir1dna = "0x0000000000000000000000000000000000000001"
		const uintpKJbjqU = BigInt("178")
		const stringNRlSJ6g = "3yT9YscYE2dNnsn5o5cTkWmtEifY"
		const string2Z9ZSW = "4JL00LkRWdqGKIy5bYkDvdUiQlNf55"
		const addressFYcQvXY = accounts[0]
		const addressfTVz6kL = await GardenContractV2DUcW9N0.addTokenOwner.call(addressDr07A0h, addresssRtrHDJ, {from: accounts[0]});
		const uint256O5X6lfm = await GardenContractV2DUcW9N0.getTotalrTLPHarvest.call(uintYRUoHKE, {from: accounts[2]});
		const uint256nUicsuq = await GardenContractV2DUcW9N0.growthRemaining.call(addresszeBCjru, stringKLYhHqa, uintNkHjJRw, {from: accounts[3]});
		const addressLiQT0el = await GardenContractV2DUcW9N0.changeOwner.call(addressYir1dna, {from: accounts[1]});
		const stringINKYyYQ = await GardenContractV2DUcW9N0.withdraw.call(stringNRlSJ6g, uintpKJbjqU, {from: accounts[0]});
		const uint256sKANTyg = await GardenContractV2DUcW9N0.balanceOf.call(addressFYcQvXY, string2Z9ZSW, {from: accounts[3]});

		await expect(GardenContractV2DUcW9N0.addTokenOwner.call(addressDr07A0h, addresssRtrHDJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressqJo8Nyi = "0x0000000000000000000000000000000000000001"
		const addressgwHLoJx = accounts[2]
		const addressIrf1apa = accounts[2]
		const GardenContractV2DUcW9N0 = await GardenContractV2.new(addressqJo8Nyi, addressgwHLoJx, addressIrf1apa, {from: accounts[0]});
		const uintnZ9TL3e = BigInt("142")
		const stringyS4rSHM = "SLzBuj8dHRWX4gbxRSTrkZTdNPoxJ6XLKB1c"
		const uintYXUZU6Z = BigInt("104")
		const uintab6mETg = BigInt("165")
		const stringNRlSJ6g = "3yT9YscYE2dNnsn5o5cTkWmtEifY"
		const stringuwBad6t = await GardenContractV2DUcW9N0.claimDecompose.call(stringyS4rSHM, uintnZ9TL3e, {from: accounts[0]});
		const uint256O5X6lfm = await GardenContractV2DUcW9N0.getTotalrTLPHarvest.call(uintYXUZU6Z, {from: accounts[2]});
		const stringINKYyYQ = await GardenContractV2DUcW9N0.withdraw.call(stringNRlSJ6g, uintab6mETg, {from: accounts[0]});

		await expect(GardenContractV2DUcW9N0.claimDecompose.call(stringyS4rSHM, uintnZ9TL3e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressxg9aB6N = "0x0000000000000000000000000000000000000001"
		const addressGui3f47 = accounts[2]
		const addressZrL2rlh = accounts[2]
		const GardenContractV2DUcW9N0 = await GardenContractV2.new(addressxg9aB6N, addressGui3f47, addressZrL2rlh, {from: accounts[0]});
		const uintNwS2EDv = BigInt("154")
		const stringNRlSJ6g = "3yT9YIcYE2dNnsn5o5cTkWmtEifY"
		const stringINKYyYQ = await GardenContractV2DUcW9N0.withdraw.call(stringNRlSJ6g, uintNwS2EDv, {from: accounts[0]});

		await expect(GardenContractV2DUcW9N0.withdraw.call(stringNRlSJ6g, uintNwS2EDv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressczlDIFj = "0x0000000000000000000000000000000000000001"
		const addresstgljbkk = accounts[2]
		const addressc7EsXaB = accounts[2]
		const GardenContractV2DUcW9N0 = await GardenContractV2.new(addressczlDIFj, addresstgljbkk, addressc7EsXaB, {from: accounts[0]});
		const uintYEe6Hkt = BigInt("88")
		const addressqH0myY9 = accounts[0]
		const uintc0qCtgS = BigInt("41")
		const uintoCJNDcV = BigInt("162")
		const stringNRlSJ6g = "3yT9YIcYE2dNnsn5o5cTkWmtEifY"
		const uint256MAeEnn = await GardenContractV2DUcW9N0.getTotalsTLPHarvest.call(uintYEe6Hkt, {from: accounts[2]});
		const addressgqdqIlj = await GardenContractV2DUcW9N0.renounceTokenOwner.call(addressqH0myY9, {from: accounts[5]});
		const uint256O5X6lfm = await GardenContractV2DUcW9N0.getTotalrTLPHarvest.call(uintc0qCtgS, {from: accounts[2]});
		const stringINKYyYQ = await GardenContractV2DUcW9N0.withdraw.call(stringNRlSJ6g, uintoCJNDcV, {from: accounts[0]});

		await expect(GardenContractV2DUcW9N0.getTotalsTLPHarvest.call(uintYEe6Hkt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressy7pULzG = accounts[2]
		const addressICQVdi = accounts[1]
		const addressFkXi3HB = accounts[1]
		const GardenContractV2FvRQjKQ = await GardenContractV2.new(addressy7pULzG, addressICQVdi, addressFkXi3HB, {from: accounts[1]});
		const stringBHT1nUO = "tsW67TwrtvZcAOTJiWnuHEax1P53AfajwG1Ti1ng4daGVRNsCLKwFAuPzKOKKXv3M5w8A"
		const stringb19yjxO = "63yDX4adbb5tPvRud18nz3NdhMf9te61marM7UmUj28W5wunqG9f22cXbN8gPvsn9Vhg7WpXx5b2MEg9wvEywvOxQ1729RhY"
		const addressYMMOLjC = accounts[1]
		const stringnbSS3oM = "SEqoxO2txByMLH8aazSCSmftLsUfWa8CupTT11dtXjUYfp1td"
		const addressqdCHzeS = accounts[4]
		const address0CZdjy = accounts[2]
		const uint256ijlcJd = await GardenContractV2FvRQjKQ.totalTLPGrown.call(stringBHT1nUO, {from: accounts[1]});
		const uint256c7JrMmM = await GardenContractV2FvRQjKQ.balanceOf.call(addressYMMOLjC, stringb19yjxO, {from: accounts[0]});
		const uint256x6yRUR = await GardenContractV2FvRQjKQ.balanceOf.call(addressqdCHzeS, stringnbSS3oM, {from: accounts[0]});
		const addressfsAldgh = await GardenContractV2FvRQjKQ.changeOwner.call(address0CZdjy, {from: accounts[4]});

		await expect(GardenContractV2FvRQjKQ.totalTLPGrown.call(stringBHT1nUO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressj1DoboA = accounts[2]
		const addressG4G4bxS = accounts[1]
		const addressvRZ8Yeu = accounts[1]
		const GardenContractV2FvRQjKQ = await GardenContractV2.new(addressj1DoboA, addressG4G4bxS, addressvRZ8Yeu, {from: accounts[1]});
		const uintCucdpK = BigInt("13")
		const stringyWOQoOl = "bRqnDsWxxoJfWqz5tujGWUenyrC9rSummYYpvx46A3HCpjxhPJtcTcAr5xMCxsBUJ0mIFAhUrbJN7zERRUKEBghP42p"
		const stringb19yjxO = "63yDX4adbb5tPvRud18nz3NdhMf9te61marM7UmUj28W5wunqG9f22cXbN8gPvsn9Vhg7WpXx5b2MEg9wvEywvOxQ1729RhY"
		const addressKsncegq = accounts[5]
		const addressNgF49CZ = accounts[3]
		const uint256fo3iCY = await GardenContractV2FvRQjKQ.timeUntilNextTLP.call(stringyWOQoOl, uintCucdpK, {from: accounts[5]});
		const uint256c7JrMmM = await GardenContractV2FvRQjKQ.balanceOf.call(addressKsncegq, stringb19yjxO, {from: accounts[0]});
		const addressfsAldgh = await GardenContractV2FvRQjKQ.changeOwner.call(addressNgF49CZ, {from: accounts[4]});

		await expect(GardenContractV2FvRQjKQ.timeUntilNextTLP.call(stringyWOQoOl, uintCucdpK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressA1WPTgw = "0x0000000000000000000000000000000000000001"
		const addressgXKB4jY = accounts[2]
		const addressWQA1MhL = accounts[2]
		const GardenContractV2DUcW9N0 = await GardenContractV2.new(addressA1WPTgw, addressgXKB4jY, addressWQA1MhL, {from: accounts[0]});
		const uints2J2XIJ = BigInt("8")
		const uint256O5X6lfm = await GardenContractV2DUcW9N0.getTotalrTLPHarvest.call(uints2J2XIJ, {from: accounts[2]});

		await expect(GardenContractV2DUcW9N0.getTotalrTLPHarvest.call(uints2J2XIJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressXIJ6i9r = accounts[3]
		const addressyXXZc9A = accounts[5]
		const addressBd7GzGh = accounts[3]
		const GardenContractV2NZVggd6 = await GardenContractV2.new(addressXIJ6i9r, addressyXXZc9A, addressBd7GzGh, {from: accounts[1]});
		const stringgJs6BRg = "OSg7NKFFUMc0AYijKukggTLTWavedinuh3tuxJaAUNBbQ9FFbVd744"
		const uintiSKdOZu = BigInt("43")
		const uintX11PbS = BigInt("47")
		const stringBkWDYsY = "FLyI"
		const stringd8PVZWR = "PYiY1NARwjjTYh0NbhP2o0rFL2FEGagn87UnxVAHYLHoxKVYsgwh6lyeRT0R4Zlrdz6dX0cGyKB3QzmdUazeTNG"
		const stringGeMLBSi = "zCtvbE7W6vYgVXimA"
		const uintgvmj1ri = BigInt("594")
		const uintkAO50Bh = BigInt("8")
		const stringLrAUrHf = "zqhHnNuBdJigieaW3xSFnyXQBmbPdIlNdI7WHCKpIxNJLuVk"
		const stringwm0dLTE = await GardenContractV2NZVggd6.harvestAllBeds.call(stringgJs6BRg, {from: accounts[2]});
		const uint8yaYPlUy = await GardenContractV2NZVggd6.setTimeStamp.call(uintX11PbS, uintiSKdOZu, {from: accounts[0]});
		const uint256TVr7CId = await GardenContractV2NZVggd6.totalTLPGrowing.call(stringBkWDYsY, {from: "0x0000000000000000000000000000000000000001"});
		const stringtYRlSKi = await GardenContractV2NZVggd6.harvestAllBeds.call(stringd8PVZWR, {from: "0x0000000000000000000000000000000000000001"});
		const stringZfC3arp = await GardenContractV2NZVggd6.harvestAllBeds.call(stringGeMLBSi, {from: accounts[3]});
		const stringoF3vI1w = await GardenContractV2NZVggd6.decompose.call(stringLrAUrHf, uintkAO50Bh, uintgvmj1ri, {from: accounts[4]});

		await expect(GardenContractV2NZVggd6.harvestAllBeds.call(stringgJs6BRg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresskzQYbZv = "0x0000000000000000000000000000000000000001"
		const addressZYURHRm = accounts[2]
		const addresspsFhzp7 = accounts[2]
		const GardenContractV2DUcW9N0 = await GardenContractV2.new(addresskzQYbZv, addressZYURHRm, addresspsFhzp7, {from: accounts[0]});
		const addressPIb022c = "0x0000000000000000000000000000000000000001"
		const uintN79vgSY = BigInt("1133")
		const uintbD3wbJZ = BigInt("31")
		const stringTxXWp7I = "isMBLrIpDbm2NeS8ENdBmzQHQCv3zDCz94JqsogYBNX619G7wI"
		const uintdujqN8H = BigInt("23")
		const addressjW4t6Xm = await GardenContractV2DUcW9N0.renounceTokenOwner.call(addressPIb022c, {from: accounts[0]});
		const stringkmQqFus = await GardenContractV2DUcW9N0.decompose.call(stringTxXWp7I, uintbD3wbJZ, uintN79vgSY, {from: accounts[1]});
		const uint256O5X6lfm = await GardenContractV2DUcW9N0.getTotalrTLPHarvest.call(uintdujqN8H, {from: accounts[2]});

		await expect(GardenContractV2DUcW9N0.renounceTokenOwner.call(addressPIb022c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressHbHLJPW = "0x0000000000000000000000000000000000000001"
		const addressWarpsm = accounts[2]
		const addressKr3nMJR = accounts[2]
		const GardenContractV2DUcW9N0 = await GardenContractV2.new(addressHbHLJPW, addressWarpsm, addressKr3nMJR, {from: accounts[0]});
		const addressILxt63H = accounts[1]
		const uintTk7sVir = BigInt("206")
		const stringBI42Yl = "VKD"
		const stringfK4aJDt = "52DclIKGE1Oi5FXNI3ynMunfPY3xkpgY2RI5rbFt6DjShwslzjVKiQI1xMk"
		const uintii9e8fs = BigInt("41")
		const uintnZY5OiD = BigInt("191")
		const addressD9zo1Ee = await GardenContractV2DUcW9N0.changeBenefitiary.call(addressILxt63H, {from: accounts[0]});
		const stringztEqTxq = await GardenContractV2DUcW9N0.withdraw.call(stringBI42Yl, uintTk7sVir, {from: accounts[4]});
		const stringNTUsivG = await GardenContractV2DUcW9N0.harvestAllBeds.call(stringfK4aJDt, {from: accounts[1]});
		const uint8qBdq2d = await GardenContractV2DUcW9N0.zeroHoldings.call(uintnZY5OiD, uintii9e8fs, {from: accounts[0]});

		await expect(GardenContractV2DUcW9N0.withdraw.call(stringBI42Yl, uintTk7sVir, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresss3DjZ0W = "0x0000000000000000000000000000000000000001"
		const addressqKArLCf = accounts[2]
		const addressCg9a9Kv = accounts[2]
		const GardenContractV2DUcW9N0 = await GardenContractV2.new(addresss3DjZ0W, addressqKArLCf, addressCg9a9Kv, {from: accounts[0]});
		const addressMyBSW32 = accounts[1]
		const uintN78QhlC = BigInt("1133")
		const uintj5KA8sY = BigInt("0")
		const stringTxXWp7I = "isMBLrIpDbm2NeS8ENdBmzQHQCv3zDCz94JqsogYBNX619G7wI"
		const uintSLSkVFb = BigInt("170")
		const uintCmfM4v3 = BigInt("185")
		const addressghr3UAB = await GardenContractV2DUcW9N0.changeOwner.call(addressMyBSW32, {from: accounts[0]});
		const stringkmQqFus = await GardenContractV2DUcW9N0.decompose.call(stringTxXWp7I, uintj5KA8sY, uintN78QhlC, {from: accounts[1]});
		const uint8xTqUr3g = await GardenContractV2DUcW9N0.setTimeStamp.call(uintCmfM4v3, uintSLSkVFb, {from: accounts[1]});

		await expect(GardenContractV2DUcW9N0.decompose.call(stringTxXWp7I, uintj5KA8sY, uintN78QhlC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})