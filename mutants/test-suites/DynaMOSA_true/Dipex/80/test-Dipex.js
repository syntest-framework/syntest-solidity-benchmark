const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringH68vpPM = "v"
		const stringFkK8rF = "wc1fd4A7n4a8nPnHv9bx2Bw4Xiui5Qgwo7aJvK4t1ltG"
		const uintj3o8pm = BigInt("783")
		const DipexUEYrZrn = await Dipex.new(stringH68vpPM, stringFkK8rF, uintj3o8pm, {from: "0x0000000000000000000000000000000000000001"});
		const uintBis1ITS = BigInt("753")
		const addressoeiRG2s = accounts[5]
		const uintOVqvVs7 = BigInt("1195")
		const addressh7vXbTX = accounts[4]
		const addressZIPPFTA = accounts[3]
		const uintMoHhU9K = BigInt("888")
		const addressjuuBnvW = accounts[2]
		const boolrdP46X4 = await DipexUEYrZrn.approve.call(addressoeiRG2s, uintBis1ITS, {from: accounts[0]});
		const boolpU2EAHE = await DipexUEYrZrn.transferFrom.call(addressZIPPFTA, addressh7vXbTX, uintOVqvVs7, {from: accounts[2]});
		const boolP1b3tgT = await DipexUEYrZrn.approve.call(addressjuuBnvW, uintMoHhU9K, {from: accounts[2]});
	});

	it('test for Dipex', async () => {
		const stringuxczxa9 = "DhkRx5SGFd9ESlt8pllxmk3PW3K"
		const stringMEMzTN = "mcC1RKkRJcpqJhnOJ95clFdbVRctqLWUBvyge7HBw13Aw8hJOXisrO4c4lllSpVcNRsI0VBRU4GT"
		const uintlhmr3lZ = BigInt("1485")
		const DipexQyfMJic = await Dipex.new(stringuxczxa9, stringMEMzTN, uintlhmr3lZ, {from: accounts[0]});
		const addresshPrxmxC = accounts[1]
		const uintxmpAX9s = BigInt("64")
		const addressvVNZ6s = accounts[4]
		const uintV4oCHR = BigInt("685")
		const addressz4m57HV = accounts[4]
		const addressGcxSLR = accounts[2]
		const uintHxFbLny = BigInt("160")
		const addressnU9flEC = accounts[4]
		const uintWvQgXiS = BigInt("809")
		const addressggMzEM3 = accounts[0]
		const addressxfiP9mu = accounts[4]
		const boolxJF3qIv = await DipexQyfMJic.transferownership.call(addresshPrxmxC, {from: accounts[0]});
		const boolQbm0UY3 = await DipexQyfMJic.transfer.call(addressvVNZ6s, uintxmpAX9s, {from: accounts[0]});
//		const boolP5zBInD = await DipexQyfMJic.transferFrom.call(addressGcxSLR, addressz4m57HV, uintV4oCHR, {from: accounts[3]});
//		const boolFsZVoNY = await DipexQyfMJic.transfer.call(addressnU9flEC, uintHxFbLny, {from: accounts[1]});
//		const boolnthA9n8 = await DipexQyfMJic.transferFrom.call(addressxfiP9mu, addressggMzEM3, uintWvQgXiS, {from: accounts[0]});

		assert.equal(boolQbm0UY3, true)
		assert.equal(boolxJF3qIv, true)
		await expect(DipexQyfMJic.transferFrom.call(addressGcxSLR, addressz4m57HV, uintV4oCHR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringr2zuFi = "vnoiPxuIg6W2lkwNTPnyaQzpq6QlFld2Gr7fEEhOH3g"
		const stringVJEKLkG = "3vo5lFcbYq1qyO5IWyGHUH4okkW60EMej1KHyG8vTcrVKBgW7q"
		const uintvZE8adG = BigInt("343")
		const DipexzrNFvIa = await Dipex.new(stringr2zuFi, stringVJEKLkG, uintvZE8adG, {from: accounts[1]});
		const uintQzhmra7 = BigInt("315")
		const addressvgP07Gw = accounts[3]
		const addressPOFB4Ao = accounts[3]
//		const boolSSVDVdd = await DipexzrNFvIa.transfer.call(addressvgP07Gw, uintQzhmra7, {from: accounts[3]});
//		const booliaMao5D = await DipexzrNFvIa.transferownership.call(addressPOFB4Ao, {from: accounts[1]});

		await expect(DipexzrNFvIa.transfer.call(addressvgP07Gw, uintQzhmra7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringFOhACjK = "TZtLcayTPywV4hcQcJHWOxbSHR7It5NWWbkaocX7sNlegVKsMaCe9FBMtrAkR0IgMHHTW7mW6q1drrBdr"
		const stringJCcDFkB = "V5tIM1PcxkHdjoKUezDketQmAaV1oXQtkanXiPNnMqvoMgzPI4iiGoNzdcYM1ezL"
		const uintYEmnzqI = BigInt("1715")
		const DipexBoRDL0t = await Dipex.new(stringFOhACjK, stringJCcDFkB, uintYEmnzqI, {from: accounts[5]});
		const uintkB3xx7 = BigInt("1085")
		const addressmcbqcV = accounts[1]
		const uintPkX8Op8 = BigInt("1229")
		const addressvqaVhZ8 = accounts[1]
		const uintvKp6GIk = BigInt("536")
		const addressLUe1PG = accounts[5]
//		const booldrCLHpV = await DipexBoRDL0t.approveAndCall.call(addressmcbqcV, uintkB3xx7, {from: accounts[0]});
//		const boolVzsFa7 = await DipexBoRDL0t.approve.call(addressvqaVhZ8, uintPkX8Op8, {from: accounts[3]});
//		const boolrKaZ3ii = await DipexBoRDL0t.transfer.call(addressLUe1PG, uintvKp6GIk, {from: accounts[4]});

		await expect(DipexBoRDL0t.approveAndCall.call(addressmcbqcV, uintkB3xx7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringtz1seSF = "BE9TLIVBAtj3cK0xnWTEOwpTUOFT0mLDi2lE29TX7chjAPRKznMtk0exfdef4f4o6FSE5RJ1BJPR0sDlNCB7fjBr5sc"
		const stringZo12cja = "5B9nYM8NLHVXP4roZFp5HsCJALtEjQbbtLgl1BLaq6gQ5eNeWRieMwgNyr6MBJaFb1CtJALgbewLs7GDO"
		const uintwcyDNT1 = BigInt("739")
		const Dipexrs30LrH = await Dipex.new(stringtz1seSF, stringZo12cja, uintwcyDNT1, {from: accounts[1]});
		const uintmlCIMtA = BigInt("804")
		const addressPT5DfcY = accounts[5]
		const uintKn4OVBL = BigInt("904")
		const addressvce2rZW = accounts[5]
		const addressnn7HEzH = accounts[3]
		const uintjOqL3il = BigInt("1212")
		const addresssu9AIuC = accounts[3]
		const addressivvYdLu = accounts[5]
		const boolMLdHWAr = await Dipexrs30LrH.approve.call(addressPT5DfcY, uintmlCIMtA, {from: accounts[2]});
//		const boollV2WBcB = await Dipexrs30LrH.transferFrom.call(addressnn7HEzH, addressvce2rZW, uintKn4OVBL, {from: accounts[0]});
//		const boolXTxLajr = await Dipexrs30LrH.transferFrom.call(addressivvYdLu, addresssu9AIuC, uintjOqL3il, {from: accounts[4]});

		assert.equal(boolMLdHWAr, true)
		await expect(Dipexrs30LrH.transferFrom.call(addressnn7HEzH, addressvce2rZW, uintKn4OVBL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringtz1seSF = "BE9TLIVBAtj3cK0xnWTEOwpTUOFT0mLDi2lE29TX7chjAPRKznMtk0exfdef4f4o6FSE5RJ1BJPR0sDlNCB7fjBr5sc"
		const stringZo12cja = "5B9nYM8NLHVXP4roZFp5HsCJALtEjQbbtLgl1BLaq6gQ5eNeWRieMwgNyr6MBJaFb1CtJALgbewLs7GDO"
		const uintUjYuXjk = BigInt("739")
		const Dipexrs30LrH = await Dipex.new(stringtz1seSF, stringZo12cja, uintUjYuXjk, {from: accounts[1]});
		const uintJlEvTe = BigInt("804")
		const addressTnHdwtl = accounts[5]
		const uintznbvRBy = BigInt("1013")
		const addresshDmierV = "0x0000000000000000000000000000000000000001"
		const uintVoYkvbz = BigInt("904")
		const addressUetce5f = accounts[6]
		const addressvde5grt = accounts[3]
		const boolMLdHWAr = await Dipexrs30LrH.approve.call(addressTnHdwtl, uintJlEvTe, {from: accounts[2]});
		const bool8FNI5O = await Dipexrs30LrH.approveAndCall.call(addresshDmierV, uintznbvRBy, {from: accounts[1]});
//		const boollV2WBcB = await Dipexrs30LrH.transferFrom.call(addressvde5grt, addressUetce5f, uintVoYkvbz, {from: accounts[0]});

		assert.equal(bool8FNI5O, true)
		assert.equal(boolMLdHWAr, true)
		await expect(Dipexrs30LrH.transferFrom.call(addressvde5grt, addressUetce5f, uintVoYkvbz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringhYcoLt7 = "wXgOIe3yhldi6PCDvQAjNvIGDzeWGPhBKL4teGgNctc7fHACnUqknpnXpfMk5g"
		const stringsxGY2QV = "y"
		const uintQ8nkrgV = BigInt("114")
		const DipexsIHKDfP = await Dipex.new(stringhYcoLt7, stringsxGY2QV, uintQ8nkrgV, {from: accounts[2]});
		const uintBf3M7kH = BigInt("1678")
		const addressXMK6zVa = accounts[1]
		const uintqRyUf9j = BigInt("153")
		const addressgSjzfk = accounts[2]
		const uintUSjEfv = BigInt("275")
		const address50vt7Z = "0x0000000000000000000000000000000000000001"
		const addressNXgzFOM = "0x00000000000000000000000000000000000000-1"
		const boolznufpb = await DipexsIHKDfP.approve.call(addressXMK6zVa, uintBf3M7kH, {from: accounts[1]});
		const boolotQJy9 = await DipexsIHKDfP.approve.call(addressgSjzfk, uintqRyUf9j, {from: accounts[1]});
		const boolgibLMEU = await DipexsIHKDfP.approveAndCall.call(address50vt7Z, uintUSjEfv, {from: accounts[2]});
//		const boolyrsl6W1 = await DipexsIHKDfP.transferownership.call(addressNXgzFOM, {from: accounts[1]});

		assert.equal(boolgibLMEU, true)
		assert.equal(boolotQJy9, true)
		assert.equal(boolznufpb, true)
		await expect(DipexsIHKDfP.transferownership.call(addressNXgzFOM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringhYcoLt7 = "wXgOIe3yhldi6PCDvQAjNvIGDzeWGPhBKL4teGgNctc7fHACnUqknpnXpfMk5g"
		const stringsxGY2QV = "y"
		const uintqHIKKIh = BigInt("114")
		const DipexsIHKDfP = await Dipex.new(stringhYcoLt7, stringsxGY2QV, uintqHIKKIh, {from: accounts[2]});
		const uinths8AVyb = BigInt("1678")
		const addressb4ziMTa = accounts[1]
		const uintg3J4WgP = BigInt("1244")
		const addressokmOXks = "0x0000000000000000000000000000000000000001"
		const uintCvJxNto = BigInt("0")
		const addresstMV3T3K = accounts[3]
		const uintYc5SM2m = BigInt("1685")
		const addressExFXwB = accounts[2]
		const addresseoeflDn = accounts[0]
		const addressQU8B76l = "0x0000000000000000000000000000000000000000"
		const boolznufpb = await DipexsIHKDfP.approve.call(addressb4ziMTa, uinths8AVyb, {from: accounts[1]});
		const boolwHpvGYC = await DipexsIHKDfP.approve.call(addressokmOXks, uintg3J4WgP, {from: accounts[1]});
		const boolMRF75Oy = await DipexsIHKDfP.transfer.call(addresstMV3T3K, uintCvJxNto, {from: accounts[3]});
//		const boolkRueCBj = await DipexsIHKDfP.transferFrom.call(addresseoeflDn, addressExFXwB, uintYc5SM2m, {from: accounts[3]});
//		const boolyrsl6W1 = await DipexsIHKDfP.transferownership.call(addressQU8B76l, {from: accounts[1]});

		assert.equal(boolMRF75Oy, true)
		assert.equal(boolwHpvGYC, true)
		assert.equal(boolznufpb, true)
		await expect(DipexsIHKDfP.transferFrom.call(addresseoeflDn, addressExFXwB, uintYc5SM2m, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringhYcoLt7 = "wXgOIe3yhldi6PCDvQAjNvIGDzeWGPhBKL4teGgNctc7fHACnUqknpnXpfMk5g"
		const stringsxGY2QV = "y"
		const uintpVbEIpl = BigInt("114")
		const DipexsIHKDfP = await Dipex.new(stringhYcoLt7, stringsxGY2QV, uintpVbEIpl, {from: accounts[2]});
		const uintVmmRonn = BigInt("0")
		const addresssqHeyUn = "0x0000000000000000000000000000000000000002"
		const uintKVuwN1z = BigInt("1989")
		const addresszkKy2Ld = accounts[0]
		const addresszkNSO6A = accounts[0]
		const addressIpvkDZJ = "0x0000000000000000000000000000000000000000"
		const uintqSy6MOo = BigInt("1695")
		const addressGtNRPbf = accounts[1]
		const uinth9XzJpW = BigInt("357")
		const addressnL5QRxy = accounts[4]
		const uinthBRBbq6 = BigInt("535")
		const addressqpmoIKw = accounts[0]
		const boolgibLMEU = await DipexsIHKDfP.approveAndCall.call(addresssqHeyUn, uintVmmRonn, {from: accounts[2]});
//		const boolOgifWL = await DipexsIHKDfP.transferFrom.call(addresszkNSO6A, addresszkKy2Ld, uintKVuwN1z, {from: accounts[1]});
//		const boolXxBTvsi = await DipexsIHKDfP.transferownership.call(addressIpvkDZJ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSiOmvyo = await DipexsIHKDfP.approve.call(addressGtNRPbf, uintqSy6MOo, {from: accounts[5]});
//		const boolrNcQAo = await DipexsIHKDfP.approveAndCall.call(addressnL5QRxy, uinth9XzJpW, {from: accounts[2]});
//		const bool2ReErX = await DipexsIHKDfP.approve.call(addressqpmoIKw, uinthBRBbq6, {from: accounts[3]});

		assert.equal(boolgibLMEU, true)
		await expect(DipexsIHKDfP.transferFrom.call(addresszkNSO6A, addresszkKy2Ld, uintKVuwN1z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})