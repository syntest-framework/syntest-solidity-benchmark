const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringErBLTBZ = "Mto3zCtbQh4Zbn1v"
		const stringJQ4Uvkc = "N6m3nCmqawbS8Kif5LsZF6ASRD26e43ieDBglWmk1QGIeQvywCNlo1IeG8MZqlDrU2UtdYiqAh8koJrHhAwAjl"
		const uintwIkToGQ = BigInt("1539")
		const WheatFarmejTWkj5 = await WheatFarm.new(stringErBLTBZ, stringJQ4Uvkc, uintwIkToGQ, {from: accounts[0]});
		const uintua1Jjmr = BigInt("1058")
		const addresscl4QjBT = accounts[0]
		const uintKD5wtDb = BigInt("1946")
		const addressLDRUgjT = accounts[0]
		const stringn8nZxB = await WheatFarmejTWkj5.name.call({from: accounts[2]});
		const booluxK3D7i = await WheatFarmejTWkj5.decreaseAllowance.call(addresscl4QjBT, uintua1Jjmr, {from: accounts[0]});
		const boolUs2w7IY = await WheatFarmejTWkj5.transfer.call(addressLDRUgjT, uintKD5wtDb, {from: accounts[0]});
		const uint8TS3B6HL = await WheatFarmejTWkj5.decimals.call({from: accounts[3]});

		assert.equal(stringn8nZxB, "Mto3zCtbQh4Zbn1v")
		await expect(WheatFarmejTWkj5.decreaseAllowance.call(addresscl4QjBT, uintua1Jjmr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringLSEptuP = "nupvXHjctnGAOBQaLmoaVDOFfMAZAah0EME5Nh4uWiO3CU1NfeK7LKK6CNK6tvYuAUHsaiOozO"
		const stringhVyx08E = "Uslm5uyKgyrRSW4JDuiKiE94yuslexQAMFtyFAnrlbnDaU0xYtGoroiK6VbdOx0VdgrD7WJODwpEbEO"
		const uintOhHOtTb = BigInt("1648")
		const WheatFarmrzzTxBy = await WheatFarm.new(stringLSEptuP, stringhVyx08E, uintOhHOtTb, {from: accounts[3]});
		const uintV7N5QL7 = BigInt("294")
		const addressPGnAijN = accounts[3]
		const uintgFmVLJP = BigInt("825")
		const addressfX1DAcY = accounts[0]
		const addressMV93wb6 = accounts[3]
		const boolUKy817O = await WheatFarmrzzTxBy.approve.call(addressPGnAijN, uintV7N5QL7, {from: accounts[3]});
		const boolJ6JPb5T = await WheatFarmrzzTxBy.transfer.call(addressfX1DAcY, uintgFmVLJP, {from: accounts[3]});
		const uintNbCQaPP = await WheatFarmrzzTxBy.balanceOf.call(addressMV93wb6, {from: accounts[1]});

		assert.equal(boolJ6JPb5T, true)
		assert.equal(boolUKy817O, true)
		assert.equal(uintNbCQaPP, BigInt("1648000000000000000000"))
	});

	it('test for WheatFarm', async () => {
		const stringAXqtgDB = "3wzWACd8"
		const stringGReomj3 = "Kgw9RAaakR5qSuoak7ynwZ6p6mPmqfAEsybDPaTliwLk"
		const uintTE0Lq2V = BigInt("1334")
		const WheatFarmwldM7dl = await WheatFarm.new(stringAXqtgDB, stringGReomj3, uintTE0Lq2V, {from: accounts[3]});
		const uintm1JGEzV = BigInt("1024")
		const addressofgH94R = accounts[1]
		const addressNZEXka = accounts[1]
		const uintpV0kjzC = BigInt("1973")
		const addressag5zqpj = accounts[2]
		const boolANvaWP = await WheatFarmwldM7dl.transferFrom.call(addressNZEXka, addressofgH94R, uintm1JGEzV, {from: accounts[0]});
		const stringHNUEpAZ = await WheatFarmwldM7dl.name.call({from: accounts[1]});
		const booluPccLXM = await WheatFarmwldM7dl.approve.call(addressag5zqpj, uintpV0kjzC, {from: accounts[3]});

		await expect(WheatFarmwldM7dl.transferFrom.call(addressNZEXka, addressofgH94R, uintm1JGEzV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringB9pmob3 = "eFNmLN72"
		const stringNmJpIle = "6O1ij7H7id2IO8oROzCpyGL7hqZhSqQL4PtBzqkxyQvuNJqJGQojOgbQTq2Age"
		const uinthRVcxXj = BigInt("1410")
		const WheatFarmJOX5bcF = await WheatFarm.new(stringB9pmob3, stringNmJpIle, uinthRVcxXj, {from: accounts[0]});
		const uintmhl7fgJ = BigInt("814")
		const addressgImcB0D = accounts[3]
		const uintOeiiNlf = BigInt("1705")
		const addressoyo1mj = accounts[1]
		const booll6jZoNa = await WheatFarmJOX5bcF.transfer.call(addressgImcB0D, uintmhl7fgJ, {from: accounts[4]});
		const boolUBIWJbJ = await WheatFarmJOX5bcF.transfer.call(addressoyo1mj, uintOeiiNlf, {from: accounts[1]});

		await expect(WheatFarmJOX5bcF.transfer.call(addressgImcB0D, uintmhl7fgJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringwcL16AT = "9fhG3SxM7oVRHbbCgloVmnlFAvLzoHYr1bFT9o6mWduFAayOgn2JRvVVCAit0n"
		const stringPXfY0ga = "qmuphYdz5"
		const uintlCdZx3 = BigInt("113")
		const WheatFarmNXNw4M7 = await WheatFarm.new(stringwcL16AT, stringPXfY0ga, uintlCdZx3, {from: accounts[3]});
		const uintqAsVQV = BigInt("1864")
		const addressR477Wmv = accounts[2]
		const uintqCYThRP = BigInt("1125")
		const addressn0jrxif = accounts[2]
		const uintz3XMNbe = BigInt("1102")
		const addressceWDE92 = "0x0000000000000000000000000000000000000001"
		const addressmsBqGl = accounts[2]
		const addressAM1wkB1 = accounts[4]
		const addressCiJ2hDH = accounts[1]
		const uintcbG99UF = BigInt("1891")
		const addressWkjuIkZ = accounts[4]
		const stringIPR1b3 = await WheatFarmNXNw4M7.name.call({from: accounts[4]});
		const boolfPb6pUQ = await WheatFarmNXNw4M7.approve.call(addressR477Wmv, uintqAsVQV, {from: accounts[4]});
		const boolHFHazMl = await WheatFarmNXNw4M7.approveAndCall.call(addressn0jrxif, uintqCYThRP, {from: accounts[4]});
		const boolaSIpasw = await WheatFarmNXNw4M7.transferFrom.call(addressmsBqGl, addressceWDE92, uintz3XMNbe, {from: accounts[3]});
		const uintosK8BiN = await WheatFarmNXNw4M7.allowance.call(addressCiJ2hDH, addressAM1wkB1, {from: accounts[1]});
		const bool93JZuY = await WheatFarmNXNw4M7.approve.call(addressWkjuIkZ, uintcbG99UF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfPb6pUQ, true)
		assert.equal(stringIPR1b3, "9fhG3SxM7oVRHbbCgloVmnlFAvLzoHYr1bFT9o6mWduFAayOgn2JRvVVCAit0n")
		await expect(WheatFarmNXNw4M7.approveAndCall.call(addressn0jrxif, uintqCYThRP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVGiuwgc = "cvFI"
		const stringPeHG8nk = "2k8VwMl3lB2jLVIelfFYcL6DDOcPKudhYPWcuC8KKkSMa7ZrMCNyUZiF26HEaBra5nPbEin4J4FSdHmpES8iwqU8S"
		const uintINT9dEf = BigInt("214")
		const WheatFarmvN7CyT4 = await WheatFarm.new(stringVGiuwgc, stringPeHG8nk, uintINT9dEf, {from: accounts[3]});
		const addressWdyEt1u = accounts[4]
		const addressmGjPycV = accounts[3]
		const addressxpdzJYj = accounts[0]
		const addressMvT3Wsw = accounts[0]
		const uintRB3o5rt = BigInt("260")
		const addresssOz5JFY = accounts[4]
		const uintPEnGvfH = BigInt("1412")
		const addressgj6j66N = accounts[1]
		const uintox99vns = await WheatFarmvN7CyT4.balanceOf.call(addressWdyEt1u, {from: "0x0000000000000000000000000000000000000001"});
		const uintyuThYXK = await WheatFarmvN7CyT4.allowance.call(addressxpdzJYj, addressmGjPycV, {from: accounts[3]});
		const boolnZMf0lV = await WheatFarmvN7CyT4.transferownership.call(addressMvT3Wsw, {from: accounts[0]});
		const boolwGzp9lS = await WheatFarmvN7CyT4.approve.call(addresssOz5JFY, uintRB3o5rt, {from: accounts[2]});
		const boolDemaeed = await WheatFarmvN7CyT4.decreaseAllowance.call(addressgj6j66N, uintPEnGvfH, {from: accounts[4]});

		assert.equal(uintox99vns, BigInt("0"))
		assert.equal(uintyuThYXK, BigInt("0"))
		await expect(WheatFarmvN7CyT4.transferownership.call(addressMvT3Wsw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringB9pmob3 = "eFNmLN72"
		const stringNmJpIle = "6O1ij7H7id2IO8oROzCpyGL7hqZhSqQL4PtBzqkxyQvuNJqJGQojOgbQTq2Age"
		const uintR9lDII9 = BigInt("1410")
		const WheatFarmJOX5bcF = await WheatFarm.new(stringB9pmob3, stringNmJpIle, uintR9lDII9, {from: accounts[0]});
		const addressJBmfeXS = accounts[4]
		const uintkCvDAPR = BigInt("0")
		const addressgrdbzj0 = "0x0000000000000000000000000000000000000001"
		const addressnJdqzBl = accounts[6]
		const uintf7ak4Hc = await WheatFarmJOX5bcF.balanceOf.call(addressJBmfeXS, {from: accounts[1]});
		const boolSTSNmON = await WheatFarmJOX5bcF.transferFrom.call(addressnJdqzBl, addressgrdbzj0, uintkCvDAPR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolSTSNmON, true)
		assert.equal(uintf7ak4Hc, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringB9pmob3 = "eFNmLN72"
		const stringNmJpIle = "6O1ij7H7id2IO8oROzCpyGL7hqZhSqQL4PtBzqkxyQvuNJqJGQojOgbQTq2Age"
		const uintrQcyq4g = BigInt("1410")
		const WheatFarmJOX5bcF = await WheatFarm.new(stringB9pmob3, stringNmJpIle, uintrQcyq4g, {from: accounts[0]});
		const uintSFsdRN7 = BigInt("1333")
		const addressJM53sLg = "0x0000000000000000000000000000000000000001"
		const uintJv4dmv = BigInt("814")
		const addressP3eB9XX = accounts[3]
		const boolPAsJnSJ = await WheatFarmJOX5bcF.approveAndCall.call(addressJM53sLg, uintSFsdRN7, {from: accounts[0]});
		const booll6jZoNa = await WheatFarmJOX5bcF.transfer.call(addressP3eB9XX, uintJv4dmv, {from: accounts[4]});

		assert.equal(boolPAsJnSJ, true)
		await expect(WheatFarmJOX5bcF.transfer.call(addressP3eB9XX, uintJv4dmv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringpXtPNai = "TO8aSrgoOMbF8"
		const stringw0EAd2g = "sShvIG6oDY3v1B"
		const uintcCKWUBP = BigInt("218")
		const WheatFarmpw3UPZr = await WheatFarm.new(stringpXtPNai, stringw0EAd2g, uintcCKWUBP, {from: accounts[0]});
		const addressXLXioGd = accounts[0]
		const addressTvPAKxa = accounts[3]
		const uintzCv3Esy = BigInt("482")
		const addressVw06x0 = accounts[3]
		const uintgbr2Uk5 = BigInt("1253")
		const addressAivbbao = accounts[4]
		const addressbzTsRnw = accounts[1]
		const booljhPVtmZ = await WheatFarmpw3UPZr.transferownership.call(addressXLXioGd, {from: accounts[0]});
		const boolI0oW8L = await WheatFarmpw3UPZr.transferownership.call(addressTvPAKxa, {from: accounts[2]});
		const boolITilf0g = await WheatFarmpw3UPZr.transfer.call(addressVw06x0, uintzCv3Esy, {from: accounts[3]});
		const boolrSDU6F = await WheatFarmpw3UPZr.transferFrom.call(addressbzTsRnw, addressAivbbao, uintgbr2Uk5, {from: accounts[1]});

		assert.equal(booljhPVtmZ, true)
		await expect(WheatFarmpw3UPZr.transferownership.call(addressTvPAKxa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})