const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringbSjhga2 = "jVGYafcJMKdbYiKu5VlBv3A7QHG4s8DY4csdl6GbNO37D8ih"
		const stringgP84Xe5 = "0dtHW9a1KGxIA3zCjbYFIG2wDgDDdgjq184LiulExJO8M21ynkwMmkPgxlQN11PgXAutamaTArHTC1Ql"
		const uintJdR0EFf = BigInt("1997")
		const WheatFarmp5u0a7 = await WheatFarm.new(stringbSjhga2, stringgP84Xe5, uintJdR0EFf, {from: accounts[3]});
		const uintEi6T46x = BigInt("584")
		const addressEMQgkbo = "0x0000000000000000000000000000000000000001"
		const addressC2XkhsN = accounts[1]
		const uintst30rCI = BigInt("99")
		const addressJe7Vd0S = accounts[1]
		const uintPQcz2JH = BigInt("1621")
		const addressOFYIQBN = accounts[0]
		const addressPYtbvT1 = accounts[1]
//		const boolyDWxVwS = await WheatFarmp5u0a7.increaseAllowance.call(addressEMQgkbo, uintEi6T46x, {from: accounts[3]});
//		const uintVZIoPNj = await WheatFarmp5u0a7.balanceOf.call(addressC2XkhsN, {from: accounts[4]});
//		const uintvNlPcue = await WheatFarmp5u0a7.totalSupply.call({from: accounts[2]});
//		const boolAK4YMnj = await WheatFarmp5u0a7.approveAndCall.call(addressJe7Vd0S, uintst30rCI, {from: accounts[4]});
//		const boolQcxyq73 = await WheatFarmp5u0a7.transferFrom.call(addressPYtbvT1, addressOFYIQBN, uintPQcz2JH, {from: accounts[2]});

		await expect(WheatFarmp5u0a7.increaseAllowance.call(addressEMQgkbo, uintEi6T46x, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const string9d1CHT = "IIwBYakoqBvkXVDFg6egp7yMNDvOwCrr6DF8pTbs4kU6MVMa31ve2e3yJjFrNMylIsB3TBGNlcJLo2MdQ"
		const stringOAPNR7d = "VXjSDguNIR32oWcohNiM70GwL9AV9Mi9xL2MXQ9KMpiKPPEBumzWntq71Grg1CKArVXUGWH"
		const uinty2H7dL = BigInt("79")
		const WheatFarmjWLeBCU = await WheatFarm.new(string9d1CHT, stringOAPNR7d, uinty2H7dL, {from: accounts[0]});
		const uintv69nvlB = BigInt("1465")
		const address9AAkWG = accounts[2]
		const addressP8znP16 = "0x0000000000000000000000000000000000000001"
//		const boolf5LVR7A = await WheatFarmjWLeBCU.transferFrom.call(addressP8znP16, address9AAkWG, uintv69nvlB, {from: accounts[0]});
//		const stringeD4xaK5 = await WheatFarmjWLeBCU.name.call({from: accounts[4]});

		await expect(WheatFarmjWLeBCU.transferFrom.call(addressP8znP16, address9AAkWG, uintv69nvlB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringDu6LIT = "7LrosCEFN5JRRYbAMJCRcRTmK7LWsdV7uCTQaIEt7Udry8BQTvHN8Ncj"
		const stringS2h1DsE = "94PYfi1T7Ed9CMfxlaumUPzW4wJKL3rLrqIIuyN67XBHDrvefcTxaRTkib2DIuSlK1ykOdZGaO"
		const uintpiUIQCR = BigInt("152")
		const WheatFarmgqXGGR7 = await WheatFarm.new(stringDu6LIT, stringS2h1DsE, uintpiUIQCR, {from: "0x0000000000000000000000000000000000000001"});
		const addressgkA20QN = accounts[1]
		const addresseIrS7Gk = accounts[1]
		const uint8fJsMwEI = await WheatFarmgqXGGR7.decimals.call({from: accounts[1]});
		const uintaKpKwVe = await WheatFarmgqXGGR7.allowance.call(addresseIrS7Gk, addressgkA20QN, {from: accounts[2]});
		const stringG13GoI9 = await WheatFarmgqXGGR7.name.call({from: accounts[5]});
		const stringqNb0SCQ = await WheatFarmgqXGGR7.name.call({from: accounts[4]});
	});

	it('test for WheatFarm', async () => {
		const stringv4PuE64 = "PUehvqhcjVCE1A1jU42bpBQqQYG1J2czAA4SYEPOCrQOux44ORlRzg15BYnvgfERzSuK0Qv7rnDHq90hu6PGvmUPNWH"
		const stringUT6tOT2 = "gCjjzdRKFn2u2STJSlTaOr3gHlcNL49SAAE4JFzWemNuihlm"
		const uintQZR8i0z = BigInt("337")
		const WheatFarmEOj3ioJ = await WheatFarm.new(stringv4PuE64, stringUT6tOT2, uintQZR8i0z, {from: accounts[0]});
		const uintD1w88l8 = BigInt("902")
		const addresshWEHvSL = "0x0000000000000000000000000000000000000001"
//		const boolR8Xfult = await WheatFarmEOj3ioJ.approveAndCall.call(addresshWEHvSL, uintD1w88l8, {from: "0x0000000000000000000000000000000000000001"});
//		const strings2sysjF = await WheatFarmEOj3ioJ.name.call({from: accounts[0]});
//		const uintv1uZWlA = await WheatFarmEOj3ioJ.totalSupply.call({from: accounts[2]});

		await expect(WheatFarmEOj3ioJ.approveAndCall.call(addresshWEHvSL, uintD1w88l8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringg5ljQS0 = "hwBPSgPLtZxmIbDm9K89hH3fcFFxaY"
		const stringp726jbG = "Shn9wnXhDiKRxFAtkEBF1xsaoI6WYOpIILvJrBYmlsGl9AyD5NwFhBlfmTn848xvTq3oEsEk31Q"
		const uintZzsuyz = BigInt("234")
		const WheatFarmiel32p9 = await WheatFarm.new(stringg5ljQS0, stringp726jbG, uintZzsuyz, {from: accounts[4]});
		const addressHh13g9J = accounts[1]
		const addressAKFtCjE = accounts[5]
		const addressen9hwxL = accounts[0]
		const uintVvtY89 = BigInt("1132")
		const addressSA4VuTB = "0x0000000000000000000000000000000000000001"
		const addressDiqeHnS = accounts[4]
//		const boolWj64hPy = await WheatFarmiel32p9.transferownership.call(addressHh13g9J, {from: accounts[3]});
//		const uint8pf55i7J = await WheatFarmiel32p9.decimals.call({from: accounts[1]});
//		const uintzTnw2ht = await WheatFarmiel32p9.allowance.call(addressen9hwxL, addressAKFtCjE, {from: accounts[3]});
//		const boolEY8Qs56 = await WheatFarmiel32p9.approve.call(addressSA4VuTB, uintVvtY89, {from: accounts[1]});
//		const boolPGZBvXL = await WheatFarmiel32p9.transferownership.call(addressDiqeHnS, {from: accounts[2]});

		await expect(WheatFarmiel32p9.transferownership.call(addressHh13g9J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringkjhnSo = "vxRGtrvMqmqk"
		const stringnfaSfde = "ndFD4P5ro1rqIAOEdrq482ex"
		const uintOIMAfrI = BigInt("51")
		const WheatFarmfbAifmc = await WheatFarm.new(stringkjhnSo, stringnfaSfde, uintOIMAfrI, {from: accounts[1]});
		const uintZSSpVVW = BigInt("33")
		const addressavRiAT = accounts[5]
		const uint8ASBh0Uu = await WheatFarmfbAifmc.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8k9cv8pR = await WheatFarmfbAifmc.decimals.call({from: accounts[3]});
		const boolhglmLYX = await WheatFarmfbAifmc.approve.call(addressavRiAT, uintZSSpVVW, {from: accounts[1]});

		assert.equal(boolhglmLYX, true)
		assert.equal(uint8ASBh0Uu, BigInt("18"))
		assert.equal(uint8k9cv8pR, BigInt("18"))
	});

	it('test for WheatFarm', async () => {
		const stringDSL4Lsg = "HoP8AQMCV9EFAy2jzDOI8exvxI6Jwt9SJZtYKrYmj4nWTpzsmJ2yjh4ORvI2r86FD7LIWGdJpGOCcFAMXSZlWEYATWP2"
		const stringmad23e = "hh7RIfYFDNvAOFlzb93R9tv5HIZeIlqfsS3izkLtGzwkr9Ns2yiLWJxHwtX0IapGl6l0cCMnkbBv4AbhUE7"
		const uintOSXbA0F = BigInt("74")
		const WheatFarmtWAZBjF = await WheatFarm.new(stringDSL4Lsg, stringmad23e, uintOSXbA0F, {from: accounts[1]});
		const uinttBxYCDh = BigInt("789")
		const addressLypSzFF = accounts[5]
		const addressIdO4rnT = accounts[2]
		const uintUysQUI8 = BigInt("1106")
		const addressqo3AwH = accounts[0]
		const addressEjMgiFf = accounts[0]
//		const boolLAjyFl4 = await WheatFarmtWAZBjF.transfer.call(addressLypSzFF, uinttBxYCDh, {from: accounts[0]});
//		const uintRvPwZs0 = await WheatFarmtWAZBjF.balanceOf.call(addressIdO4rnT, {from: accounts[4]});
//		const booldM21ZxH = await WheatFarmtWAZBjF.approve.call(addressqo3AwH, uintUysQUI8, {from: accounts[3]});
//		const uintXbIclP2 = await WheatFarmtWAZBjF.balanceOf.call(addressEjMgiFf, {from: accounts[1]});
//		const stringe6Fjwna = await WheatFarmtWAZBjF.symbol.call({from: accounts[2]});

		await expect(WheatFarmtWAZBjF.transfer.call(addressLypSzFF, uinttBxYCDh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringDSL4Lsg = "HoP8AQMCV9EFAy2jzDOI8exvxI6Jwt9SJZtYKrYmj4nWTpzsmJ2yjh4ORvI2r86FD7LIWGdJpGOCcFAMXSZlWEYATWP2"
		const stringmad23e = "hh7RIfYFDNvAOFlzb93R9tv5HIZeIlqfsS3izkLtGzwkr9Ns2yiLWJxHwtX0IapGl6l0cCMnkbBv4AbhUE7"
		const uintCVCQA7 = BigInt("74")
		const WheatFarmtWAZBjF = await WheatFarm.new(stringDSL4Lsg, stringmad23e, uintCVCQA7, {from: accounts[1]});
		const uintUnjiWEa = BigInt("53")
		const addressHWMObnu = accounts[2]
		const uintxjDGZu3 = BigInt("789")
		const addresscz3hNsI = accounts[5]
		const uintAUrDPZ = BigInt("1106")
		const addressZVXJMKa = accounts[0]
		const uinttaW3tY0 = BigInt("1222")
		const addressf63EluJ = accounts[3]
		const addressP9KYeB = accounts[0]
		const booljqG2PF0 = await WheatFarmtWAZBjF.transfer.call(addressHWMObnu, uintUnjiWEa, {from: accounts[1]});
//		const boolLAjyFl4 = await WheatFarmtWAZBjF.transfer.call(addresscz3hNsI, uintxjDGZu3, {from: accounts[0]});
//		const booldM21ZxH = await WheatFarmtWAZBjF.approve.call(addressZVXJMKa, uintAUrDPZ, {from: accounts[3]});
//		const booluVOgOP = await WheatFarmtWAZBjF.approveAndCall.call(addressf63EluJ, uinttaW3tY0, {from: accounts[1]});
//		const uintXbIclP2 = await WheatFarmtWAZBjF.balanceOf.call(addressP9KYeB, {from: accounts[1]});
//		const stringe6Fjwna = await WheatFarmtWAZBjF.symbol.call({from: accounts[2]});

		assert.equal(booljqG2PF0, true)
		await expect(WheatFarmtWAZBjF.transfer.call(addresscz3hNsI, uintxjDGZu3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringDSL4Lsg = "HoP8AQMCV9EFAy2jzDOI8exvxI6Jwt9SJZtYKrYmj4nWTpzsmJ2yjh4ORvI2r86FD7LIWGdJpGOCcFAMXSZlWEYATWP2"
		const stringmad23e = "hh7RIfYFDNvAOFlzb93R9tv5HIZeIlqfsS3izkLtGzwkr9Ns2yiLWJxHwtX0IapGl6l0cCMnkbBv4AbhUE7"
		const uintzf1UmTe = BigInt("74")
		const WheatFarmtWAZBjF = await WheatFarm.new(stringDSL4Lsg, stringmad23e, uintzf1UmTe, {from: accounts[1]});
		const uinteSaJezC = BigInt("53")
		const addresswAYyvAd = accounts[2]
		const uint8JrkSu = BigInt("1222")
		const addressGZhqBLt = accounts[3]
		const addressBalBUB = accounts[0]
		const booljqG2PF0 = await WheatFarmtWAZBjF.transfer.call(addresswAYyvAd, uinteSaJezC, {from: accounts[1]});
		const booluVOgOP = await WheatFarmtWAZBjF.approveAndCall.call(addressGZhqBLt, uint8JrkSu, {from: accounts[1]});
		const uintXbIclP2 = await WheatFarmtWAZBjF.balanceOf.call(addressBalBUB, {from: accounts[1]});
		const stringe6Fjwna = await WheatFarmtWAZBjF.symbol.call({from: accounts[2]});

		assert.equal(booljqG2PF0, true)
		assert.equal(booluVOgOP, true)
		assert.equal(stringe6Fjwna, "hh7RIfYFDNvAOFlzb93R9tv5HIZeIlqfsS3izkLtGzwkr9Ns2yiLWJxHwtX0IapGl6l0cCMnkbBv4AbhUE7")
		assert.equal(uintXbIclP2, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const string9d1CHT = "IIwBYakoqBvkXVDFg6egp7yMNDvOwCrr6DF8pTbs4kU6MVMa31ve2e3yJjFrNMylIsB3TBGNlcJLo2MdQ"
		const stringOAPNR7d = "VXjSDguNIR32oWcohNiM70GwL9AV9Mi9xL2MXQ9KMpiKPPEBumzWntq71Grg1CKArVXUGWH"
		const uintwDF0SOp = BigInt("79")
		const WheatFarmjWLeBCU = await WheatFarm.new(string9d1CHT, stringOAPNR7d, uintwDF0SOp, {from: accounts[0]});
		const uintYQKPsE5 = BigInt("0")
		const addressWJHiNfX = accounts[1]
		const boolWwkMUB9 = await WheatFarmjWLeBCU.transfer.call(addressWJHiNfX, uintYQKPsE5, {from: accounts[2]});

		assert.equal(boolWwkMUB9, true)
	});
})