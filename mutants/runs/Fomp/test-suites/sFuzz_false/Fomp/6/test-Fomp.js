const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressAeymUP8 = accounts[0]
		const FompdAH5cHI = await Fomp.new(addressAeymUP8, {from: accounts[0]});
		const addressZXOkBdN = accounts[1]
		const addressyXNlAq6 = accounts[1]
		const uintc91oBCr = BigInt("1756")
		const addressoGPMyHh = accounts[1]
		const addressSbctXv4 = accounts[2]
		const addressYndtzh = await FompdAH5cHI.delegate.call(addressZXOkBdN, {from: accounts[4]});
		const uintIKeRae9 = await FompdAH5cHI.balanceOf.call(addressyXNlAq6, {from: accounts[2]});
		const boolnK2MeJs = await FompdAH5cHI.transferFrom.call(addressSbctXv4, addressoGPMyHh, uintc91oBCr, {from: accounts[0]});

		assert.equal(uintIKeRae9, BigInt("0"))
		await expect(FompdAH5cHI.transferFrom.call(addressSbctXv4, addressoGPMyHh, uintc91oBCr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressMbkstdO = accounts[0]
		const FompYivfEA = await Fomp.new(addressMbkstdO, {from: accounts[5]});
		const uintgk6vZ9e = BigInt("992")
		const addressVB2Gr5h = accounts[4]
		const byteS68Zp3H = "0x0d13161e11011d1e161504030c0f0d130e00090d1a0e0d1d03051f0313000b10"
		const byteZgVuj3H = "0x151417171312051c1f0b04140a05001803140315171e120519161c1510170020"
		const uintFdIgGX5 = BigInt("81")
		const uinte1Foq0o = BigInt("1333")
		const uinthQxnKNY = BigInt("494")
		const addressiCsCxK = accounts[0]
		const uintFbVRKCE = BigInt("763")
		const addresscRoAvaP = accounts[1]
		const addressMGHnAcB = accounts[3]
		const uintvNrZhsa = BigInt("2021")
		const addressAoph6Wp = accounts[0]
		const addressGGyWXA = accounts[2]
		const addressADAf669 = accounts[2]
		const booloidovWZ = await FompYivfEA.approve.call(addressVB2Gr5h, uintgk6vZ9e, {from: accounts[4]});
		const addressaYJ8GNe = await FompYivfEA.delegateBySig.call(addressiCsCxK, uinthQxnKNY, uinte1Foq0o, uintFdIgGX5, byteZgVuj3H, byteS68Zp3H, {from: accounts[1]});
		const boolIyPJEt = await FompYivfEA.transferFrom.call(addressMGHnAcB, addresscRoAvaP, uintFbVRKCE, {from: accounts[4]});
		const boolFytWv1u = await FompYivfEA.transfer.call(addressAoph6Wp, uintvNrZhsa, {from: "0x0000000000000000000000000000000000000001"});
		const uintvCXh4cO = await FompYivfEA.allowance.call(addressADAf669, addressGGyWXA, {from: accounts[0]});

		assert.equal(booloidovWZ, true)
		await expect(FompYivfEA.delegateBySig.call(addressiCsCxK, uinthQxnKNY, uinte1Foq0o, uintFdIgGX5, byteZgVuj3H, byteS68Zp3H, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressnWMKRgj = accounts[0]
		const FompSA50LAy = await Fomp.new(addressnWMKRgj, {from: accounts[3]});
		const uintQiUdz0 = BigInt("1391")
		const addressyCb8TWI = accounts[4]
		const uintOzO4ryy = BigInt("601")
		const addressTmy1p4S = accounts[4]
		const uint61JdVP = BigInt("1299")
		const addressPyYi3tH = accounts[4]
		const addressk8CknUy = accounts[5]
		const addresszvxBOQc = accounts[5]
		const uintfnzCmcs = BigInt("1363")
		const addressFB42TaJ = accounts[0]
		const boolDY5x8Eu = await FompSA50LAy.transfer.call(addressyCb8TWI, uintQiUdz0, {from: accounts[0]});
		const boolvY66lD = await FompSA50LAy.transfer.call(addressTmy1p4S, uintOzO4ryy, {from: "0x0000000000000000000000000000000000000001"});
		const boolBwfph4 = await FompSA50LAy.transferFrom.call(addressk8CknUy, addressPyYi3tH, uint61JdVP, {from: accounts[1]});
		const uintmXnbFSz = await FompSA50LAy.balanceOf.call(addresszvxBOQc, {from: accounts[3]});
		const boolyqyY7Q = await FompSA50LAy.transfer.call(addressFB42TaJ, uintfnzCmcs, {from: accounts[5]});

		assert.equal(boolDY5x8Eu, true)
		await expect(FompSA50LAy.transfer.call(addressTmy1p4S, uintOzO4ryy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresspRrY0hf = accounts[0]
		const FompBtnLaJZ = await Fomp.new(addresspRrY0hf, {from: accounts[1]});
		const addressjNc2T3x = "0x0000000000000000000000000000000000000001"
		const uintJjhewJA = BigInt("493")
		const addressuwBiFsT = accounts[3]
		const uintXU5MBkV = BigInt("1745")
		const address3QaVrw = accounts[2]
		const uintKu9OVOW = BigInt("53")
		const addresscQsZjd = accounts[1]
		const addressDtfplm = accounts[2]
		const addressj7KI53 = await FompBtnLaJZ.delegate.call(addressjNc2T3x, {from: accounts[0]});
		const uint96Rz21GD2 = await FompBtnLaJZ.getPriorVotes.call(addressuwBiFsT, uintJjhewJA, {from: accounts[2]});
		const booljLk0ynf = await FompBtnLaJZ.transfer.call(address3QaVrw, uintXU5MBkV, {from: accounts[2]});
		const boolEEJYPTT = await FompBtnLaJZ.approve.call(addresscQsZjd, uintKu9OVOW, {from: accounts[5]});
		const uinttyoKi5P = await FompBtnLaJZ.balanceOf.call(addressDtfplm, {from: accounts[5]});

		assert.equal(uint96Rz21GD2, BigInt("0"))
		await expect(FompBtnLaJZ.transfer.call(address3QaVrw, uintXU5MBkV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressrjecqb = accounts[1]
		const FompGah6J37 = await Fomp.new(addressrjecqb, {from: accounts[0]});
		const uintJ93SkSw = BigInt("1333")
		const addressFWvXQa = accounts[3]
		const addressUOOZ0jK = accounts[1]
		const uintidLF6O1 = BigInt("628")
		const addressLdwH17k = "0x0000000000000000000000000000000000000001"
		const uintCkvPnYu = BigInt("1714")
		const addressW99JoSa = accounts[5]
		const uintIzKgcrZ = BigInt("1013")
		const addressN7csSOZ = accounts[0]
		const uintRRIxDdC = BigInt("1994")
		const addresss8Kaf0Z = accounts[1]
		const boolH8PSxKQ = await FompGah6J37.approve.call(addressFWvXQa, uintJ93SkSw, {from: accounts[4]});
		const uint96FksuYnB = await FompGah6J37.getCurrentVotes.call(addressUOOZ0jK, {from: accounts[1]});
		const boolXv5f5iP = await FompGah6J37.approve.call(addressLdwH17k, uintidLF6O1, {from: accounts[0]});
		const booliE2RjBS = await FompGah6J37.transfer.call(addressW99JoSa, uintCkvPnYu, {from: accounts[1]});
		const boolHwXzd4u = await FompGah6J37.transfer.call(addressN7csSOZ, uintIzKgcrZ, {from: accounts[0]});
		const uint96edwxfbC = await FompGah6J37.getPriorVotes.call(addresss8Kaf0Z, uintRRIxDdC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolH8PSxKQ, true)
		assert.equal(boolXv5f5iP, true)
		assert.equal(booliE2RjBS, true)
		assert.equal(uint96FksuYnB, BigInt("0"))
		await expect(FompGah6J37.transfer.call(addressN7csSOZ, uintIzKgcrZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressXZfl1qj = accounts[0]
		const FompBtnLaJZ = await Fomp.new(addressXZfl1qj, {from: accounts[1]});
		const addressVdB60Sf = accounts[4]
		const addresstxt9jBF = accounts[4]
		const addressc3ipTkD = "0x0000000000000000000000000000000000000001"
		const uintF4GejK = BigInt("493")
		const addressN3qcrU = accounts[3]
		const uintdumg3pM = BigInt("1745")
		const addressbH210B = accounts[2]
		const addresskOyQgkU = accounts[2]
		const uintOwaRvc7 = BigInt("1681")
		const addressnL455xd = accounts[3]
		const addressZzki3Pf = accounts[1]
		const uintyiA2yOn = await FompBtnLaJZ.allowance.call(addresstxt9jBF, addressVdB60Sf, {from: accounts[3]});
		const addressj7KI53 = await FompBtnLaJZ.delegate.call(addressc3ipTkD, {from: accounts[0]});
		const uint96Rz21GD2 = await FompBtnLaJZ.getPriorVotes.call(addressN3qcrU, uintF4GejK, {from: accounts[2]});
		const booljLk0ynf = await FompBtnLaJZ.transfer.call(addressbH210B, uintdumg3pM, {from: accounts[2]});
		const uinttyoKi5P = await FompBtnLaJZ.balanceOf.call(addresskOyQgkU, {from: accounts[5]});
		const boolDdO4JyZ = await FompBtnLaJZ.transferFrom.call(addressZzki3Pf, addressnL455xd, uintOwaRvc7, {from: accounts[0]});

		assert.equal(uint96Rz21GD2, BigInt("0"))
		assert.equal(uintyiA2yOn, BigInt("0"))
		await expect(FompBtnLaJZ.transfer.call(addressbH210B, uintdumg3pM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressU3fhhND = accounts[0]
		const FompBtnLaJZ = await Fomp.new(addressU3fhhND, {from: accounts[1]});
		const uintzWsPWDj = BigInt("103")
		const addressTk6ULMV = accounts[0]
		const addressGMRLKv2 = accounts[3]
		const addressrYkMhZ0 = "0x0000000000000000000000000000000000000002"
		const uint96wUfvFXV = await FompBtnLaJZ.getPriorVotes.call(addressTk6ULMV, uintzWsPWDj, {from: accounts[4]});
		const addressOjaqfpb = await FompBtnLaJZ.delegate.call(addressGMRLKv2, {from: accounts[1]});
		const addressj7KI53 = await FompBtnLaJZ.delegate.call(addressrYkMhZ0, {from: accounts[0]});

		assert.equal(uint96wUfvFXV, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresscsTMZR9 = accounts[2]
		const FompVXyU4mB = await Fomp.new(addresscsTMZR9, {from: "0x0000000000000000000000000000000000000001"});
		const addressUqeCtv = accounts[3]
		const addressLtgcVlN = accounts[1]
		const addressFiRfyLk = "0x0000000000000000000000000000000000000001"
		const addressdHjZPxS = await FompVXyU4mB.delegate.call(addressUqeCtv, {from: accounts[4]});
		const addresse5QKZli = await FompVXyU4mB.delegate.call(addressLtgcVlN, {from: accounts[5]});
		const addressOHeOqo = await FompVXyU4mB.delegate.call(addressFiRfyLk, {from: accounts[2]});
	});

	it('test for Fomp', async () => {
		const addressnCiswPU = accounts[0]
		const FompBtnLaJZ = await Fomp.new(addressnCiswPU, {from: accounts[1]});
		const addressoJnjOy9 = accounts[1]
		const byteaaXXQtO = "0x0f070f0e151c1215100c12020e14151f1e121c1b1e191f190b160109071b150f"
		const byterMCOFuk = "0x10031a12130602161f171f0213111b101e0c0f0d1d120b0c091b161217120f1d"
		const uintkU9I7d5 = BigInt("28")
		const uintVOT1xfS = BigInt("15")
		const uintgYdeMjn = BigInt("177")
		const addressuUAkSv = "0x0000000000000000000000000000000000000001"
		const addressh0tKzJr = accounts[0]
		const addressj7KI53 = await FompBtnLaJZ.delegate.call(addressoJnjOy9, {from: accounts[0]});
		const addressCl6wUxO = await FompBtnLaJZ.delegateBySig.call(addressuUAkSv, uintgYdeMjn, uintVOT1xfS, uintkU9I7d5, byterMCOFuk, byteaaXXQtO, {from: accounts[2]});
		const addressX3Ltq4H = await FompBtnLaJZ.delegate.call(addressh0tKzJr, {from: accounts[2]});

		await expect(FompBtnLaJZ.delegateBySig.call(addressuUAkSv, uintgYdeMjn, uintVOT1xfS, uintkU9I7d5, byterMCOFuk, byteaaXXQtO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})