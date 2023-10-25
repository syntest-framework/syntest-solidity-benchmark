const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringNQFwnWG = "fPvjg6EaZ4k9XGzbdVlUL8nrX7EK8P9Gf3kEy1YG2A4dqhwogNBvEvCbV2mDypEhdgnumHmwbQpfx"
		const stringCnQjvk = "6AhQLFrbGymQ43Q7XKjmbnLT1j1i1xaR8loMwDWIQ1AbnnnppBwuYbpIf3RmSv8Dcdha3ODKbKYaEGxfk14LUni3UuIYMMxenf"
		const uintuSlbTT = BigInt("627")
		const WheatFarmVAtd1jl = await WheatFarm.new(stringNQFwnWG, stringCnQjvk, uintuSlbTT, {from: accounts[0]});
		const uintf3kaMR = BigInt("220")
		const addressFDPWgJ5 = accounts[1]
		const addresse4vnzFo = accounts[0]
		const uintvPvussW = BigInt("999")
		const addressgqSvyq5 = accounts[1]
		const uinths7P9kF = BigInt("1042")
		const addresspbsR2QR = accounts[1]
		const addressGpoQEfI = accounts[4]
		const boolci22w6Q = await WheatFarmVAtd1jl.approve.call(addressFDPWgJ5, uintf3kaMR, {from: accounts[1]});
		const uintD9CbYCd = await WheatFarmVAtd1jl.balanceOf.call(addresse4vnzFo, {from: accounts[0]});
		const boold1aAQ7v = await WheatFarmVAtd1jl.transfer.call(addressgqSvyq5, uintvPvussW, {from: accounts[4]});
		const boolgoz6aak = await WheatFarmVAtd1jl.transferFrom.call(addressGpoQEfI, addresspbsR2QR, uinths7P9kF, {from: accounts[2]});

		assert.equal(boolci22w6Q, true)
		assert.equal(uintD9CbYCd, BigInt("627000000000000000000"))
		await expect(WheatFarmVAtd1jl.transfer.call(addressgqSvyq5, uintvPvussW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringo3GOD8X = "7fuCuqvtIKGc4ahEmSEpnHFalAQGuxXkgxOYNSx42aCQ"
		const stringzTK94l3 = "CwNAiKd3k"
		const uintGqYyLPg = BigInt("20")
		const WheatFarmm9a81KC = await WheatFarm.new(stringo3GOD8X, stringzTK94l3, uintGqYyLPg, {from: accounts[3]});
		const addressnroYgoB = accounts[2]
		const uintgspy5ey = BigInt("1613")
		const addressHqG2ziH = accounts[1]
		const addressCgHntx8 = accounts[2]
		const boolZBcEmgZ = await WheatFarmm9a81KC.transferownership.call(addressnroYgoB, {from: accounts[0]});
		const booljlUv861 = await WheatFarmm9a81KC.transferFrom.call(addressCgHntx8, addressHqG2ziH, uintgspy5ey, {from: accounts[0]});

		await expect(WheatFarmm9a81KC.transferownership.call(addressnroYgoB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringJheZ5C = "XKtnOeDnr150bu8pO64lCJFgFCSzo1rZjKKbGYUW6PsyuN5hP5XeNvmEpPlEllOWwx4u5sQTlRLii69Cho68f4y"
		const stringuLFAlaE = "FNeYyl8D2MK4fhFcrxH3ID5SWUCSI7wuI5901vjJVyV2gkDmT5ukraSU4yRHEbhpnztSbiNxyjly"
		const uintIbpNkow = BigInt("226")
		const WheatFarmkNAAFM1 = await WheatFarm.new(stringJheZ5C, stringuLFAlaE, uintIbpNkow, {from: accounts[2]});
		const addressD5AJ1HK = accounts[0]
		const uintcAAmH8Q = BigInt("39")
		const addressWaDoF2O = accounts[2]
		const addressh6AAudc = accounts[2]
		const uintUZx2zti = BigInt("1747")
		const addresshpb85vZ = "0x0000000000000000000000000000000000000001"
		const addressCmC9SL = "0x0000000000000000000000000000000000000001"
		const addressjvZTkBB = accounts[1]
		const uintAZlbVgO = await WheatFarmkNAAFM1.balanceOf.call(addressD5AJ1HK, {from: accounts[1]});
		const boolKwUfcLg = await WheatFarmkNAAFM1.transferFrom.call(addressh6AAudc, addressWaDoF2O, uintcAAmH8Q, {from: accounts[5]});
		const boolmo8D1MS = await WheatFarmkNAAFM1.approveAndCall.call(addresshpb85vZ, uintUZx2zti, {from: accounts[1]});
		const uintUBgcTno = await WheatFarmkNAAFM1.allowance.call(addressjvZTkBB, addressCmC9SL, {from: accounts[4]});

		assert.equal(uintAZlbVgO, BigInt("0"))
		await expect(WheatFarmkNAAFM1.transferFrom.call(addressh6AAudc, addressWaDoF2O, uintcAAmH8Q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringFZyUjPv = "8n1qFOBK"
		const stringzPTTJnn = "EpQwqyPMcrleZvq8AgAHBCz6TOL35S7Jeec3LWYsnwdJZErF6x0QY6VrcRB0wH2wOayMaFRH9ErL7C"
		const uintXO0UkTH = BigInt("230")
		const WheatFarmNuyLA6i = await WheatFarm.new(stringFZyUjPv, stringzPTTJnn, uintXO0UkTH, {from: accounts[3]});
		const uintJtxmif9 = BigInt("1548")
		const addressol6hNSC = accounts[3]
		const uintWTGypLS = BigInt("1426")
		const addressz2NmQcY = accounts[4]
		const boolyrH89wc = await WheatFarmNuyLA6i.approveAndCall.call(addressol6hNSC, uintJtxmif9, {from: accounts[1]});
		const boolKiUm0Mr = await WheatFarmNuyLA6i.approve.call(addressz2NmQcY, uintWTGypLS, {from: accounts[1]});

		await expect(WheatFarmNuyLA6i.approveAndCall.call(addressol6hNSC, uintJtxmif9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringdO8UYj3 = "7bwEJVky4eeQCr83XLlJIbnhL7bc6spIJLYz4X1ErOMTWGQcbUH4nhGT3vsjQuD2ZeRN"
		const stringSd1CSMt = "DgeqFH4G7WAuNaYO2o2kueg7jWYxP1rtP4eQy8ksPBvPdOFz"
		const uintycTzJ6L = BigInt("162")
		const WheatFarmTnHxMiC = await WheatFarm.new(stringdO8UYj3, stringSd1CSMt, uintycTzJ6L, {from: accounts[1]});
		const uintMF1srw2 = BigInt("958")
		const addressLWnnhYm = accounts[0]
		const uint8nVSD2EL = await WheatFarmTnHxMiC.decimals.call({from: accounts[1]});
		const stringYiLOAKp = await WheatFarmTnHxMiC.name.call({from: accounts[1]});
		const boolnQ4YZwI = await WheatFarmTnHxMiC.increaseAllowance.call(addressLWnnhYm, uintMF1srw2, {from: accounts[4]});

		assert.equal(stringYiLOAKp, "7bwEJVky4eeQCr83XLlJIbnhL7bc6spIJLYz4X1ErOMTWGQcbUH4nhGT3vsjQuD2ZeRN")
		assert.equal(uint8nVSD2EL, BigInt("18"))
		await expect(WheatFarmTnHxMiC.increaseAllowance.call(addressLWnnhYm, uintMF1srw2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringa6HfJb = "6jk6irYU6EzMA5kPKUlk8H2Nspkcl6PSXx3"
		const stringFZqfzAy = "EYiJMAis9QCMCJfaUmUtCGFWttB1btKhIA1xmoiM3Pwhxt1Yn0"
		const uintAoNmcqp = BigInt("774")
		const WheatFarmdujqaAx = await WheatFarm.new(stringa6HfJb, stringFZqfzAy, uintAoNmcqp, {from: accounts[3]});
		const uintOxzeXAw = BigInt("124")
		const addressLBuqtTP = accounts[3]
		const addressTDkkWiK = "0x0000000000000000000000000000000000000001"
		const uintD5Dm9QA = await WheatFarmdujqaAx.totalSupply.call({from: accounts[1]});
		const boolgVASOt3 = await WheatFarmdujqaAx.transfer.call(addressLBuqtTP, uintOxzeXAw, {from: accounts[1]});
		const uintdgv2NrW = await WheatFarmdujqaAx.balanceOf.call(addressTDkkWiK, {from: accounts[0]});

		assert.equal(uintD5Dm9QA, BigInt("774000000000000000000"))
		await expect(WheatFarmdujqaAx.transfer.call(addressLBuqtTP, uintOxzeXAw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVE47mdd = "BCRR8n2mfOeQWajqdmsYrMgTLQ0baOD6FjTPPY3r"
		const stringuzZang5 = "4lXNnMLsrE7sfSPOHX0FdulxGHowEgMzBtAN9AhdQ5CNwx14v5ypvIdqlRquniYmTulYqBCX8tk9o9isEf9ABxxG"
		const uintiOCMtYa = BigInt("552")
		const WheatFarmWbv3cGv = await WheatFarm.new(stringVE47mdd, stringuzZang5, uintiOCMtYa, {from: accounts[2]});
		const addressvbSR2i4 = accounts[4]
		const uintRFedWB = BigInt("1108")
		const addresspFBUZmo = accounts[4]
		const boolfdCgChX = await WheatFarmWbv3cGv.transferownership.call(addressvbSR2i4, {from: accounts[2]});
		const boolkHJG5oK = await WheatFarmWbv3cGv.decreaseAllowance.call(addresspFBUZmo, uintRFedWB, {from: accounts[3]});
		const stringSI5era3 = await WheatFarmWbv3cGv.name.call({from: accounts[0]});

		assert.equal(boolfdCgChX, true)
		await expect(WheatFarmWbv3cGv.decreaseAllowance.call(addresspFBUZmo, uintRFedWB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringWuR4ZVn = "wxhhLEvLMj4uFeOp1toJopTCW4ewvA83oBOh5xIT4lJR3nI3OMeNoTpSqA6"
		const stringdTJZ9fh = "rhhChpPsZpyCfF8xpmxmy2bh8njNG64NX8CO05"
		const uintQyxQVXV = BigInt("1517")
		const WheatFarmYfDUWn7 = await WheatFarm.new(stringWuR4ZVn, stringdTJZ9fh, uintQyxQVXV, {from: "0x0000000000000000000000000000000000000001"});
		const uintj7ApTj8 = BigInt("1955")
		const addressc20dZdc = accounts[0]
		const uintXS7bmFC = BigInt("492")
		const addressmnEwgrE = accounts[2]
		const uintpyzm2FG = BigInt("1108")
		const addressN2d3CDS = accounts[4]
		const addressxBt4xZ3 = accounts[4]
		const uintPJHmea5 = BigInt("1051")
		const addressugT54Ie = "0x0000000000000000000000000000000000000001"
		const boolrqfAH6Y = await WheatFarmYfDUWn7.approve.call(addressc20dZdc, uintj7ApTj8, {from: "0x0000000000000000000000000000000000000001"});
		const boolWpnEZyX = await WheatFarmYfDUWn7.decreaseAllowance.call(addressmnEwgrE, uintXS7bmFC, {from: accounts[3]});
		const stringgTVc91n = await WheatFarmYfDUWn7.symbol.call({from: accounts[4]});
		const boolxRaW29C = await WheatFarmYfDUWn7.transferFrom.call(addressxBt4xZ3, addressN2d3CDS, uintpyzm2FG, {from: accounts[3]});
		const boolzZvpmMz = await WheatFarmYfDUWn7.transfer.call(addressugT54Ie, uintPJHmea5, {from: accounts[5]});
	});

	it('test for WheatFarm', async () => {
		const stringLXlymwF = "u9g2efvztQ4MHjxGmqO81sRRfcyhSWtVQRfi5l"
		const stringZx03Vp = "i42OU2"
		const uintvJRdyp = BigInt("231")
		const WheatFarmJEzB5QG = await WheatFarm.new(stringLXlymwF, stringZx03Vp, uintvJRdyp, {from: accounts[3]});
		const addressZkSLhqy = accounts[1]
		const addressya1cRrd = accounts[4]
		const addressP96kjZ = accounts[3]
		const uintdxLDXR = BigInt("1074")
		const addresskkRqF7Z = accounts[2]
		const addressTWvp8C = accounts[3]
		const addressB1fiivk = accounts[3]
		const uintbXtnZoU = BigInt("2005")
		const addressXToCoe = accounts[1]
		const uintQsskJzk = await WheatFarmJEzB5QG.allowance.call(addressya1cRrd, addressZkSLhqy, {from: "0x0000000000000000000000000000000000000001"});
		const uintkYImTNV = await WheatFarmJEzB5QG.balanceOf.call(addressP96kjZ, {from: accounts[2]});
		const boolAh979VU = await WheatFarmJEzB5QG.approveAndCall.call(addresskkRqF7Z, uintdxLDXR, {from: accounts[3]});
		const uintMkpbKal = await WheatFarmJEzB5QG.allowance.call(addressB1fiivk, addressTWvp8C, {from: accounts[0]});
		const string07SJ6l = await WheatFarmJEzB5QG.symbol.call({from: accounts[3]});
		const boolUlPZPFb = await WheatFarmJEzB5QG.approve.call(addressXToCoe, uintbXtnZoU, {from: accounts[1]});

		assert.equal(boolAh979VU, true)
		assert.equal(boolUlPZPFb, true)
		assert.equal(string07SJ6l, "i42OU2")
		assert.equal(uintMkpbKal, BigInt("0"))
		assert.equal(uintQsskJzk, BigInt("0"))
		assert.equal(uintkYImTNV, BigInt("231000000000000000000"))
	});

	it('test for WheatFarm', async () => {
		const stringJheZ5C = "XKtnOeDnr150bu8pO64lCJFgFCSzo1rZjKKbGYUW6PsyuN5hP5XeNvmEpPlEllOWwx4u5sQTlRLii69Cho68f4y"
		const stringuLFAlaE = "FNeYyl8D2MK4fhFcrxH3ID5SWUCSI7wuI5901vjJVyV2gkDmT5ukraSU4yRHEbhpnztSbiNxyjly"
		const uintpPPCylY = BigInt("226")
		const WheatFarmkNAAFM1 = await WheatFarm.new(stringJheZ5C, stringuLFAlaE, uintpPPCylY, {from: accounts[2]});
		const uintb1NSBW1 = BigInt("0")
		const addressLYCHnnV = accounts[2]
		const addressgeutvox = accounts[3]
		const boolKwUfcLg = await WheatFarmkNAAFM1.transferFrom.call(addressgeutvox, addressLYCHnnV, uintb1NSBW1, {from: accounts[5]});

		assert.equal(boolKwUfcLg, true)
	});
})