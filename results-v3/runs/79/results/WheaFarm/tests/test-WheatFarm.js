const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringw4SbBQK = "lpF6QIDPzMh5HZePAlkLWikQNqaNyjenAxbnIoUd0EEv5N5fLcvPgYgKeaNWcAjYWNtMmwcDJlxwQmPNTGQzBbPQBns8P"
		const stringjVDKvN8 = "s4OPats"
		const uintnP0O13 = BigInt("1710")
		const WheatFarmZtaRQj2 = await WheatFarm.new(stringw4SbBQK, stringjVDKvN8, uintnP0O13, {from: "0x0000000000000000000000000000000000000001"});
		const uintrAGuKId = BigInt("1338")
		const addressh2CPHGw = accounts[2]
		const uinttRZ0FDj = BigInt("754")
		const addressYF5zdBj = accounts[0]
		const uintcOxE29y = BigInt("1089")
		const addressQgteulE = accounts[2]
		const boolO3SI0Ps = await WheatFarmZtaRQj2.approveAndCall.call(addressh2CPHGw, uintrAGuKId, {from: accounts[5]});
		const boolHgY2f3S = await WheatFarmZtaRQj2.increaseAllowance.call(addressYF5zdBj, uinttRZ0FDj, {from: accounts[1]});
		const boolq1mljSl = await WheatFarmZtaRQj2.increaseAllowance.call(addressQgteulE, uintcOxE29y, {from: accounts[4]});
	});

	it('test for WheatFarm', async () => {
		const stringi5BQqI7 = "TjkfNC9QNdOc1EvmnAslEaz3UyNR30"
		const stringuRUyNnx = "Nmvwt48YGP5VJdibwsNORgj48tOYeMJRLrArrfD15HuLuYcB6BR2tV1VaEGdF9b8Y4At7"
		const uintv5wro5J = BigInt("1082")
		const WheatFarmFU8qip = await WheatFarm.new(stringi5BQqI7, stringuRUyNnx, uintv5wro5J, {from: accounts[3]});
		const uintWdNuPvE = BigInt("1131")
		const addressfFbQP0M = accounts[4]
		const addressqirkLjU = accounts[3]
		const uinte0MiT4e = BigInt("824")
		const addressVVXLoCR = accounts[1]
		const uintc34xXI = BigInt("1231")
		const addressADvhRg1 = accounts[3]
		const addressXzDjOov = accounts[5]
		const boolykUGaEZ = await WheatFarmFU8qip.transferFrom.call(addressqirkLjU, addressfFbQP0M, uintWdNuPvE, {from: accounts[2]});
		const boolhBFP5en = await WheatFarmFU8qip.decreaseAllowance.call(addressVVXLoCR, uinte0MiT4e, {from: accounts[4]});
		const boolSSEOukQ = await WheatFarmFU8qip.transfer.call(addressADvhRg1, uintc34xXI, {from: accounts[0]});
		const boolrUJ68Ho = await WheatFarmFU8qip.transferownership.call(addressXzDjOov, {from: accounts[0]});
		const uint8EUmI0u = await WheatFarmFU8qip.decimals.call({from: accounts[4]});
		const stringdngmiZS = await WheatFarmFU8qip.name.call({from: accounts[0]});

		await expect(WheatFarmFU8qip.transferFrom.call(addressqirkLjU, addressfFbQP0M, uintWdNuPvE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringrNihfL3 = "uqmHTUxEI8g7yY4ilRSY2gzrBqSr5tCf0xovC0I48vCeUbEC8RIrs7QoeP7Fie"
		const stringYg9ewYD = "R9kp2UmnFKTPPuijM9HvC4lM6QBkH71Xrkcx7BXTeoROTbbqiMilPfWYFraOE5W4ALimPKMxJM4MsU"
		const uintc0dnvXI = BigInt("942")
		const WheatFarmkoDmBF = await WheatFarm.new(stringrNihfL3, stringYg9ewYD, uintc0dnvXI, {from: accounts[3]});
		const uintmdJxaJe = BigInt("176")
		const addressvZGhEm = accounts[5]
		const uintBau5cA = BigInt("1891")
		const addresszslj1tL = accounts[2]
		const uinthWbeQIS = BigInt("1623")
		const addressoX7ZnV = accounts[3]
		const boolAsGUKie = await WheatFarmkoDmBF.approveAndCall.call(addressvZGhEm, uintmdJxaJe, {from: accounts[4]});
		const boolR2jCDyI = await WheatFarmkoDmBF.transfer.call(addresszslj1tL, uintBau5cA, {from: accounts[3]});
		const boolDv0ChcG = await WheatFarmkoDmBF.decreaseAllowance.call(addressoX7ZnV, uinthWbeQIS, {from: accounts[5]});
		const uintAmbYnjH = await WheatFarmkoDmBF.totalSupply.call({from: accounts[0]});

		await expect(WheatFarmkoDmBF.approveAndCall.call(addressvZGhEm, uintmdJxaJe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringY22yF9u = "BfyD2HLG7c8M3w"
		const stringrg1OpZq = "4VmdtegRoySmkpTZj8VBD0jBHaaqgwHs"
		const uintO3j4H2y = BigInt("431")
		const WheatFarmm8JUyLt = await WheatFarm.new(stringY22yF9u, stringrg1OpZq, uintO3j4H2y, {from: accounts[2]});
		const uintQPF0Gc = BigInt("1850")
		const addressz27Oym = accounts[1]
		const addressQzEVTi8 = accounts[2]
		const addressbbYYpa = accounts[1]
		const boolEdzozSW = await WheatFarmm8JUyLt.increaseAllowance.call(addressz27Oym, uintQPF0Gc, {from: accounts[0]});
		const uintLVA49Tt = await WheatFarmm8JUyLt.allowance.call(addressbbYYpa, addressQzEVTi8, {from: accounts[2]});

		await expect(WheatFarmm8JUyLt.increaseAllowance.call(addressz27Oym, uintQPF0Gc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringuLLaPPH = "NIzjmZBDtcWniKVVYItblaATPMgwt2bOp"
		const stringUnuqY7 = "gVjyXm21idihxu3vBr1mLGn2uQIraSOIcfJLPKpK7Nhg41KD"
		const uintMWP0sjF = BigInt("73")
		const WheatFarmVgAz8eC = await WheatFarm.new(stringuLLaPPH, stringUnuqY7, uintMWP0sjF, {from: accounts[2]});
		const uintYLdpSt = BigInt("1144")
		const addressAvZhGCc = accounts[2]
		const uintOaeND4 = BigInt("463")
		const addressPl0pCb = accounts[5]
		const uintkv0YYdn = BigInt("1519")
		const addressDgXUTz3 = accounts[2]
		const boolGHJTDd = await WheatFarmVgAz8eC.approve.call(addressAvZhGCc, uintYLdpSt, {from: accounts[2]});
		const boolDzCDET = await WheatFarmVgAz8eC.approveAndCall.call(addressPl0pCb, uintOaeND4, {from: accounts[2]});
		const stringBiClitr = await WheatFarmVgAz8eC.name.call({from: accounts[2]});
		const booltEH9wMJ = await WheatFarmVgAz8eC.approve.call(addressDgXUTz3, uintkv0YYdn, {from: accounts[4]});
		const uintjtl2hcr = await WheatFarmVgAz8eC.totalSupply.call({from: accounts[4]});

		assert.equal(boolDzCDET, true)
		assert.equal(boolGHJTDd, true)
		assert.equal(booltEH9wMJ, true)
		assert.equal(stringBiClitr, "NIzjmZBDtcWniKVVYItblaATPMgwt2bOp")
		assert.equal(uintjtl2hcr, BigInt("73000000000000000000"))
	});

	it('test for WheatFarm', async () => {
		const stringrNihfL3 = "uqmHTUxEI8g7yY4ilRSY2gzrBqSr5tCf0xovC0I48vCeUbEC8RIrs7QoeP7Fie"
		const stringYg9ewYD = "R9kp2UmnFKTPPuijM9HvC4lM6QBkH71Xrkcx7BXTeoROTbbqiMilPfWYFraOE5W4ALimPKMxJM4MsU"
		const uintUP5QVuf = BigInt("942")
		const WheatFarmkoDmBF = await WheatFarm.new(stringrNihfL3, stringYg9ewYD, uintUP5QVuf, {from: accounts[3]});
		const uintg8OnDWo = BigInt("1891")
		const addressAhXFDi0 = accounts[2]
		const uintp5VKmTd = BigInt("1623")
		const addressnJtDKTY = accounts[3]
		const boolR2jCDyI = await WheatFarmkoDmBF.transfer.call(addressAhXFDi0, uintg8OnDWo, {from: accounts[3]});
		const boolDv0ChcG = await WheatFarmkoDmBF.decreaseAllowance.call(addressnJtDKTY, uintp5VKmTd, {from: accounts[5]});
		const uintAmbYnjH = await WheatFarmkoDmBF.totalSupply.call({from: accounts[0]});

		assert.equal(boolR2jCDyI, true)
		await expect(WheatFarmkoDmBF.decreaseAllowance.call(addressnJtDKTY, uintp5VKmTd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const string1vAG1S = "5FF9t92D1rM50btMl5j2OdDmkNQ7tSueeRidv5J94Q7webnzWu5hAcEcCYdIuft0rT6jzgyp5EVgQSytfR7I7yg"
		const stringpqFg6u = "xDQp6Y3lPOzIA3auazqzjThw1N94Y8QqlQU5SEfov8Anbd7"
		const uintzFiOZPA = BigInt("539")
		const WheatFarmH00Zdzg = await WheatFarm.new(string1vAG1S, stringpqFg6u, uintzFiOZPA, {from: accounts[0]});
		const addressInJtEs4 = accounts[3]
		const uintH6vLXgA = BigInt("1624")
		const addressSVvKAb = "0x0000000000000000000000000000000000000001"
		const uintvfvefCB = BigInt("745")
		const addressElew21L = accounts[4]
		const uintsdbUYvY = BigInt("91")
		const addressUd6m7w2 = accounts[0]
		const boolcL9fTVB = await WheatFarmH00Zdzg.transferownership.call(addressInJtEs4, {from: "0x0000000000000000000000000000000000000001"});
		const boolD7eEsDT = await WheatFarmH00Zdzg.transfer.call(addressSVvKAb, uintH6vLXgA, {from: accounts[2]});
		const boolHoG6NLk = await WheatFarmH00Zdzg.approve.call(addressElew21L, uintvfvefCB, {from: accounts[2]});
		const boolQkHoGe4 = await WheatFarmH00Zdzg.increaseAllowance.call(addressUd6m7w2, uintsdbUYvY, {from: accounts[3]});
		const uint8HnCsT4k = await WheatFarmH00Zdzg.decimals.call({from: accounts[4]});

		await expect(WheatFarmH00Zdzg.transferownership.call(addressInJtEs4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringuLLaPPH = "NIzjmZBDtcWniKVVYItblaATPMgwt2bOp"
		const stringUnuqY7 = "gVjyXm21idihxu3vBr1mLGn2uQIraSOIcfJLPKpK7Nhg41KD"
		const uintYeMGYst = BigInt("73")
		const WheatFarmVgAz8eC = await WheatFarm.new(stringuLLaPPH, stringUnuqY7, uintYeMGYst, {from: accounts[2]});
		const uint66QMr6 = BigInt("1144")
		const addresskxbBAVG = accounts[3]
		const uintV12ZvNz = BigInt("728")
		const address4suLFw = accounts[0]
		const uintT4PsZcA = BigInt("463")
		const addressZS5Ogu4 = accounts[5]
		const uintKtVadH5 = BigInt("1519")
		const addressS1XVDaV = accounts[2]
		const boolGHJTDd = await WheatFarmVgAz8eC.approve.call(addresskxbBAVG, uint66QMr6, {from: accounts[2]});
		const bool0gGu5m = await WheatFarmVgAz8eC.transfer.call(address4suLFw, uintV12ZvNz, {from: accounts[0]});
		const boolDzCDET = await WheatFarmVgAz8eC.approveAndCall.call(addressZS5Ogu4, uintT4PsZcA, {from: accounts[2]});
		const stringBiClitr = await WheatFarmVgAz8eC.name.call({from: accounts[2]});
		const booltEH9wMJ = await WheatFarmVgAz8eC.approve.call(addressS1XVDaV, uintKtVadH5, {from: accounts[4]});

		assert.equal(boolGHJTDd, true)
		await expect(WheatFarmVgAz8eC.transfer.call(address4suLFw, uintV12ZvNz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringY22yF9u = "BfyD2HLG7c8M3w"
		const stringrg1OpZq = "4VmdtegRoySmkpTZj8VBD0jBHaaqgwHs"
		const uintd8L6J1I = BigInt("431")
		const WheatFarmm8JUyLt = await WheatFarm.new(stringY22yF9u, stringrg1OpZq, uintd8L6J1I, {from: accounts[2]});
		const addresstocgrD8 = accounts[6]
		const uintVXdzwWk = BigInt("0")
		const addresss3v2LLj = accounts[5]
		const uintMD6wGIU = BigInt("1338")
		const addressQItVs4 = accounts[1]
		const uintJNG8UM4 = await WheatFarmm8JUyLt.balanceOf.call(addresstocgrD8, {from: "0x0000000000000000000000000000000000000001"});
		const boolu0CcQFC = await WheatFarmm8JUyLt.approveAndCall.call(addresss3v2LLj, uintVXdzwWk, {from: accounts[2]});
		const boolJ6z2ou = await WheatFarmm8JUyLt.approve.call(addressQItVs4, uintMD6wGIU, {from: accounts[4]});

		assert.equal(boolJ6z2ou, true)
		assert.equal(boolu0CcQFC, true)
		assert.equal(uintJNG8UM4, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringTxphtT4 = "6"
		const stringt2mQsVY = "QkycVnCXlBM8N8uaGJtSvqICuIQMpftFDNwpuXTEubKkgH4fojpFZpSPylRqm"
		const uinthl02gR6 = BigInt("420")
		const WheatFarmWeVzGKN = await WheatFarm.new(stringTxphtT4, stringt2mQsVY, uinthl02gR6, {from: accounts[5]});
		const uintLmuo9wp = BigInt("0")
		const addressPSmTtBq = accounts[1]
		const uintVA0oHQf = BigInt("913")
		const addresssDq98Td = "0x0000000000000000000000000000000000000001"
		const uintw9iVGpW = BigInt("575")
		const addressPNhWVZk = accounts[1]
		const addressRh5z3uW = accounts[3]
		const uintQmFYY5s = BigInt("1680")
		const addressq7Wf3oF = "0x0000000000000000000000000000000000000001"
		const uintQxgtbs7 = BigInt("612")
		const addresssEzNJ4 = accounts[2]
		const boolojwMJq9 = await WheatFarmWeVzGKN.transfer.call(addressPSmTtBq, uintLmuo9wp, {from: accounts[3]});
		const booldU06frG = await WheatFarmWeVzGKN.transfer.call(addresssDq98Td, uintVA0oHQf, {from: accounts[2]});
		const boolcwxqdG4 = await WheatFarmWeVzGKN.transferFrom.call(addressRh5z3uW, addressPNhWVZk, uintw9iVGpW, {from: accounts[3]});
		const boolsGPboQt = await WheatFarmWeVzGKN.approve.call(addressq7Wf3oF, uintQmFYY5s, {from: accounts[3]});
		const boolhvCP2Be = await WheatFarmWeVzGKN.approve.call(addresssEzNJ4, uintQxgtbs7, {from: accounts[2]});

		assert.equal(boolojwMJq9, true)
		await expect(WheatFarmWeVzGKN.transfer.call(addresssDq98Td, uintVA0oHQf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})