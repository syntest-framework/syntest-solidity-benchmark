const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addresslJEk44q = accounts[2]
		const addressz2GTkdL = accounts[3]
		const QuickTokenP0p5yUS = await QuickToken.new(addresslJEk44q, addressz2GTkdL, {from: accounts[1]});
		const addresseqGj35M = accounts[3]
		const uintGsOHNOS = BigInt("975")
		const addresssQ0JHf = accounts[1]
		const addresst5ntiv9 = await QuickTokenP0p5yUS.setMinter.call(addresseqGj35M, {from: accounts[2]});
		const boolX9B9oYd = await QuickTokenP0p5yUS.transfer.call(addresssQ0JHf, uintGsOHNOS, {from: accounts[0]});

		await expect(QuickTokenP0p5yUS.setMinter.call(addresseqGj35M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresszeG1OR = accounts[3]
		const addressL8zlP9l = accounts[4]
		const QuickTokenZaQ2N3Q = await QuickToken.new(addresszeG1OR, addressL8zlP9l, {from: accounts[2]});
		const uintntFHgEk = BigInt("348")
		const addresse91CT96 = accounts[2]
		const addressChcUdoe = accounts[2]
		const addressjVZDinj = accounts[4]
		const uintShtFoUz = BigInt("1797")
		const addresshHjX4g1 = accounts[1]
		const addressjlfs3cC = "0x0000000000000000000000000000000000000001"
		const addressMUu2N6n = accounts[2]
		const boolhs489sa = await QuickTokenZaQ2N3Q.transfer.call(addresse91CT96, uintntFHgEk, {from: accounts[2]});
		const uintZHbkt6s = await QuickTokenZaQ2N3Q.allowance.call(addressjVZDinj, addressChcUdoe, {from: accounts[1]});
		const boolJSNk9Co = await QuickTokenZaQ2N3Q.transferFrom.call(addressjlfs3cC, addresshHjX4g1, uintShtFoUz, {from: "0x0000000000000000000000000000000000000001"});
		const addressbfAONoF = await QuickTokenZaQ2N3Q.setMinter.call(addressMUu2N6n, {from: accounts[4]});

		await expect(QuickTokenZaQ2N3Q.transfer.call(addresse91CT96, uintntFHgEk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressdoTwUaa = accounts[3]
		const addressjg3yvnx = accounts[2]
		const QuickTokenCYxO9XM = await QuickToken.new(addressdoTwUaa, addressjg3yvnx, {from: accounts[1]});
		const uintuPjAmqB = BigInt("1962")
		const address0CHE1g = accounts[0]
		const uintnURO2su = BigInt("1982")
		const addressRNtZGO = accounts[2]
		const uintacj9JA8 = BigInt("1757")
		const addressBVYO7fq = accounts[5]
		const addressLOwbAnz = accounts[3]
		const addresszIWuc37 = accounts[2]
		const addressUh4ORF9 = accounts[4]
		const address3iUDZP = accounts[1]
		const address5aagTm = accounts[1]
		const uintrUFE2dn = BigInt("2045")
		const addressZTDp8pD = accounts[0]
		const boolu4jINXm = await QuickTokenCYxO9XM.approve.call(address0CHE1g, uintuPjAmqB, {from: accounts[2]});
		const boolRsFmcW = await QuickTokenCYxO9XM.approve.call(addressRNtZGO, uintnURO2su, {from: accounts[3]});
		const boolyfScnok = await QuickTokenCYxO9XM.transferFrom.call(addressLOwbAnz, addressBVYO7fq, uintacj9JA8, {from: "0x0000000000000000000000000000000000000001"});
		const uintVwpr5cn = await QuickTokenCYxO9XM.allowance.call(addressUh4ORF9, addresszIWuc37, {from: accounts[0]});
		const uintu90o1dn = await QuickTokenCYxO9XM.allowance.call(address5aagTm, address3iUDZP, {from: accounts[1]});
		const addresspIcV2dP = await QuickTokenCYxO9XM.mint.call(addressZTDp8pD, uintrUFE2dn, {from: accounts[3]});

		assert.equal(boolRsFmcW, true)
		assert.equal(boolu4jINXm, true)
		await expect(QuickTokenCYxO9XM.transferFrom.call(addressLOwbAnz, addressBVYO7fq, uintacj9JA8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressCAoyPgR = accounts[3]
		const addressoxmLKt6 = accounts[5]
		const QuickTokenWzsOwR9 = await QuickToken.new(addressCAoyPgR, addressoxmLKt6, {from: accounts[1]});
		const uintlYvbIcY = BigInt("864")
		const addressOnaoTIb = accounts[5]
		const uintBRK981k = BigInt("1482")
		const addressOqEbfW = accounts[3]
		const addressXRLjEGC = accounts[2]
		const uintTH4NvLa = BigInt("896")
		const addressxASna3g = accounts[5]
		const uintf5JQLnd = BigInt("641")
		const addressYmegn9P = accounts[1]
		const uintF2wVkU = BigInt("1401")
		const addresslj9oM1b = accounts[2]
		const uintsO5fJZF = BigInt("1580")
		const addresssYjmuV = "0x0000000000000000000000000000000000000001"
		const addressaKGmNOd = await QuickTokenWzsOwR9.mint.call(addressOnaoTIb, uintlYvbIcY, {from: accounts[0]});
		const boolPaJ9pv = await QuickTokenWzsOwR9.transferFrom.call(addressXRLjEGC, addressOqEbfW, uintBRK981k, {from: accounts[5]});
		const boolt3o6Eyt = await QuickTokenWzsOwR9.approve.call(addressxASna3g, uintTH4NvLa, {from: accounts[0]});
		const addressjusHhi8 = await QuickTokenWzsOwR9.mint.call(addressYmegn9P, uintf5JQLnd, {from: accounts[0]});
		const booltI3J7r3 = await QuickTokenWzsOwR9.approve.call(addresslj9oM1b, uintF2wVkU, {from: accounts[2]});
		const boolZHGeGKB = await QuickTokenWzsOwR9.transfer.call(addresssYjmuV, uintsO5fJZF, {from: accounts[3]});

		await expect(QuickTokenWzsOwR9.mint.call(addressOnaoTIb, uintlYvbIcY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressOENma4 = accounts[2]
		const addressbhbSjRs = accounts[2]
		const QuickTokenw0wQFVG = await QuickToken.new(addressOENma4, addressbhbSjRs, {from: accounts[3]});
		const addressfVxWfj4 = accounts[0]
		const addressseyuJlM = accounts[1]
		const uintypw0aef = BigInt("316")
		const addressoUYXUZJ = accounts[3]
		const uintkar8H2I = await QuickTokenw0wQFVG.balanceOf.call(addressfVxWfj4, {from: accounts[2]});
		const uintX5M24TW = await QuickTokenw0wQFVG.balanceOf.call(addressseyuJlM, {from: accounts[5]});
		const addressBjleW4Y = await QuickTokenw0wQFVG.mint.call(addressoUYXUZJ, uintypw0aef, {from: accounts[4]});

		assert.equal(uintX5M24TW, BigInt("0"))
		assert.equal(uintkar8H2I, BigInt("0"))
		await expect(QuickTokenw0wQFVG.mint.call(addressoUYXUZJ, uintypw0aef, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressmn3EcJz = accounts[0]
		const addresspC6AMHg = accounts[3]
		const QuickTokeneWDRHPP = await QuickToken.new(addressmn3EcJz, addresspC6AMHg, {from: "0x0000000000000000000000000000000000000001"});
		const uintHsPUJlO = BigInt("52")
		const addressIw6H01J = accounts[1]
		const addressSnP4QRY = accounts[0]
		const address0YTGuH = accounts[1]
		const addresslXKMrJG = accounts[2]
		const addressaQj0bw = accounts[1]
		const uintEKa2UvZ = BigInt("1481")
		const addressoksX4BS = accounts[3]
		const addressftuS1o = accounts[0]
		const uinto2vUaOk = BigInt("1504")
		const addressAoraKD6 = accounts[2]
		const boolWYWigKR = await QuickTokeneWDRHPP.transferFrom.call(addressSnP4QRY, addressIw6H01J, uintHsPUJlO, {from: accounts[4]});
		const uintFuV4KFK = await QuickTokeneWDRHPP.allowance.call(addresslXKMrJG, address0YTGuH, {from: accounts[3]});
		const addresss6h4Jk = await QuickTokeneWDRHPP.setMinter.call(addressaQj0bw, {from: accounts[0]});
		const boolRylsiOB = await QuickTokeneWDRHPP.transferFrom.call(addressftuS1o, addressoksX4BS, uintEKa2UvZ, {from: accounts[1]});
		const addressnFIflpj = await QuickTokeneWDRHPP.mint.call(addressAoraKD6, uinto2vUaOk, {from: accounts[2]});
	});

	it('test for QuickToken', async () => {
		const addresshU9Y2H = accounts[2]
		const addressB5YwUOT = accounts[3]
		const QuickTokenP0p5yUS = await QuickToken.new(addresshU9Y2H, addressB5YwUOT, {from: accounts[1]});
		const addresse0pSoD0 = accounts[3]
		const addressxoleVvA = accounts[4]
		const uintnc9pdW6 = BigInt("709")
		const addressvxZe7oQ = accounts[0]
		const uintIWNHhTm = BigInt("1027")
		const addressZjmfL6z = accounts[1]
		const addressiJXHyOr = accounts[1]
		const uintrkGrHz5 = BigInt("975")
		const addresswExjRFZ = accounts[1]
		const uinthbuDe1v = await QuickTokenP0p5yUS.allowance.call(addressxoleVvA, addresse0pSoD0, {from: accounts[0]});
		const addressZ2HyNDX = await QuickTokenP0p5yUS.mint.call(addressvxZe7oQ, uintnc9pdW6, {from: accounts[4]});
		const boolT9dbg3v = await QuickTokenP0p5yUS.transfer.call(addressZjmfL6z, uintIWNHhTm, {from: accounts[3]});
		const addresst5ntiv9 = await QuickTokenP0p5yUS.setMinter.call(addressiJXHyOr, {from: accounts[2]});
		const boolX9B9oYd = await QuickTokenP0p5yUS.transfer.call(addresswExjRFZ, uintrkGrHz5, {from: accounts[0]});

		assert.equal(uinthbuDe1v, BigInt("0"))
		await expect(QuickTokenP0p5yUS.mint.call(addressvxZe7oQ, uintnc9pdW6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresswoY593O = accounts[2]
		const addressGZKugY = accounts[3]
		const QuickTokenP0p5yUS = await QuickToken.new(addresswoY593O, addressGZKugY, {from: accounts[1]});
		const uint9g1v8B = BigInt("725")
		const addressLGgjjg6 = accounts[0]
		const uintgKg9kT = BigInt("952")
		const addressX7EyZDs = accounts[0]
		const boolZXIO5La = await QuickTokenP0p5yUS.transfer.call(addressLGgjjg6, uint9g1v8B, {from: accounts[2]});
		const boolX9B9oYd = await QuickTokenP0p5yUS.transfer.call(addressX7EyZDs, uintgKg9kT, {from: accounts[0]});

		assert.equal(boolZXIO5La, true)
		await expect(QuickTokenP0p5yUS.transfer.call(addressX7EyZDs, uintgKg9kT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressjtz51vs = accounts[2]
		const addressz7ZetFv = accounts[0]
		const QuickTokenKNK06DL = await QuickToken.new(addressjtz51vs, addressz7ZetFv, {from: accounts[2]});
		const uintFXkZZTk = BigInt("1008")
		const addressKQoK3J = accounts[4]
		const uinto7Pu5nl = BigInt("1694")
		const addressfh8LnnH = accounts[3]
		const uintLv5MTI3 = BigInt("915")
		const addressSTYPufd = accounts[1]
		const addressFGF4ptz = await QuickTokenKNK06DL.mint.call(addressKQoK3J, uintFXkZZTk, {from: accounts[0]});
		const boolJwwC3UI = await QuickTokenKNK06DL.approve.call(addressfh8LnnH, uinto7Pu5nl, {from: accounts[3]});
		const addressVWXNpvL = await QuickTokenKNK06DL.mint.call(addressSTYPufd, uintLv5MTI3, {from: accounts[2]});

		assert.equal(boolJwwC3UI, true)
		await expect(QuickTokenKNK06DL.mint.call(addressSTYPufd, uintLv5MTI3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})