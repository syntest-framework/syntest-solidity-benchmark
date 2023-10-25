const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintyDe05WB = BigInt("1850")
		const string27m3aE = "FbCyRLevJnnqvgdaYx2oeD2gVjq"
		const stringg93wkXZ = "ox5452roio5XoqGfazmNohPXW71HHkFyqTtXrtJYM5u7I5s2dKGH8xSVnN5puiqWUmZko"
		const MARVELCOINII33oHd = await MARVELCOIN.new(uintyDe05WB, string27m3aE, stringg93wkXZ, {from: accounts[4]});
		const uintUQ7kNo = BigInt("715")
		const addresszleYrWe = accounts[5]
		const uintDFCjafQ = BigInt("453")
		const addressANTNgeZ = accounts[4]
		const addressxmeqA55 = accounts[3]
		const bytecdz686B = "0x1b0e101604000f1414121d1103100b161811"
		const uintKttCL9Y = BigInt("644")
		const address0gDVox = accounts[1]
		const boolvS9zhM6 = await MARVELCOINII33oHd.approve.call(addresszleYrWe, uintUQ7kNo, {from: accounts[1]});
//		const boolnkNmHie = await MARVELCOINII33oHd.transferFrom.call(addressxmeqA55, addressANTNgeZ, uintDFCjafQ, {from: accounts[3]});
//		const boolOQGtxLf = await MARVELCOINII33oHd.approveAndCall.call(address0gDVox, uintKttCL9Y, bytecdz686B, {from: accounts[1]});

		assert.equal(boolvS9zhM6, true)
		await expect(MARVELCOINII33oHd.transferFrom.call(addressxmeqA55, addressANTNgeZ, uintDFCjafQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintvcrRZbf = BigInt("1575")
		const string682Lb3 = "ySqc4vCidfMmwehcn4SlyO0LHkUxVCAhnYSfXf8jKzpbbEN8ujcAoH9VfMa"
		const stringkApJrfw = "ULOgk8RgYznTCeKqyM5VvbYrI6122MaEgWnmX9tQzwbOjqHu5u6PeJ3nES6VcyrQz69nH5PLLXRnbwg9bww4ItmURNe6mF"
		const MARVELCOINh2RVlq = await MARVELCOIN.new(uintvcrRZbf, string682Lb3, stringkApJrfw, {from: accounts[3]});
		const uintAw522z = BigInt("728")
		const addresssxcXQK5 = accounts[0]
		const byteLJIFd36 = "0x20120912030c131a1109051207151f01090a0b"
		const uintvzcGctP = BigInt("1333")
		const addressFUCEn6 = accounts[5]
		const uinttoBNuAR = BigInt("936")
		const addresswF3G5vK = "0x0000000000000000000000000000000000000001"
		const byteD8XpWpS = "0x140a0c0a0307180b05171f1c030d0f1e0c10010e14120220"
		const uintL05M7qM = BigInt("919")
		const addressOnR3d3 = accounts[0]
		const uintQ3YCJE = BigInt("602")
		const uintrbbzqne = BigInt("1102")
		const addresspLTb7sV = accounts[2]
		const addresspnBWLRp = accounts[2]
//		const boolSwQNz7T = await MARVELCOINh2RVlq.transfer.call(addresssxcXQK5, uintAw522z, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcOAedKn = await MARVELCOINh2RVlq.approveAndCall.call(addressFUCEn6, uintvzcGctP, byteLJIFd36, {from: accounts[4]});
//		const boolWFJtNLn = await MARVELCOINh2RVlq.approve.call(addresswF3G5vK, uinttoBNuAR, {from: "0x0000000000000000000000000000000000000001"});
//		const bool7gffCo = await MARVELCOINh2RVlq.approveAndCall.call(addressOnR3d3, uintL05M7qM, byteD8XpWpS, {from: accounts[4]});
//		const boolGl0Lby = await MARVELCOINh2RVlq.burn.call(uintQ3YCJE, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJaU9lVZ = await MARVELCOINh2RVlq.transferFrom.call(addresspnBWLRp, addresspLTb7sV, uintrbbzqne, {from: accounts[1]});

		await expect(MARVELCOINh2RVlq.transfer.call(addresssxcXQK5, uintAw522z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintP3h8a0d = BigInt("372")
		const stringIbfXKRx = "oMByi9cU0mSnyhFxeSlP5i"
		const stringhUVvVsu = "w25DDaWS"
		const MARVELCOINvZ5Jev = await MARVELCOIN.new(uintP3h8a0d, stringIbfXKRx, stringhUVvVsu, {from: accounts[2]});
		const byteKM0uV2e = "0x171007020c201a131b11081f15011e061c010a15061e04050102071412"
		const uintTcV8MuR = BigInt("630")
		const addresseUOeqN7 = accounts[2]
		const uintVgdtve9 = BigInt("279")
		const addressFNIdVyw = "0x0000000000000000000000000000000000000001"
//		const boolggscLVM = await MARVELCOINvZ5Jev.approveAndCall.call(addresseUOeqN7, uintTcV8MuR, byteKM0uV2e, {from: accounts[4]});
//		const boolyGxWzBQ = await MARVELCOINvZ5Jev.transfer.call(addressFNIdVyw, uintVgdtve9, {from: accounts[0]});

		await expect(MARVELCOINvZ5Jev.approveAndCall.call(addresseUOeqN7, uintTcV8MuR, byteKM0uV2e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintLmYKXQv = BigInt("490")
		const stringlOJgw77 = "KxB6V7j"
		const stringeWBlsUN = "zjlAY8gXN7WHswADxXdc5dSKYAKO97qoGA"
		const MARVELCOINesWDAXi = await MARVELCOIN.new(uintLmYKXQv, stringlOJgw77, stringeWBlsUN, {from: "0x0000000000000000000000000000000000000001"});
		const uintxaFd6x = BigInt("581")
		const uintkKOflEE = BigInt("1433")
		const addressajjBYP1 = accounts[0]
		const addressynZigqv = accounts[5]
		const uintm77WR2n = BigInt("1624")
		const addressVWotVPl = accounts[2]
		const uintxTj18CN = BigInt("1902")
		const uintgdFwmmO = BigInt("1181")
		const addressRI3vWXj = accounts[0]
		const booloEp6nDV = await MARVELCOINesWDAXi.burn.call(uintxaFd6x, {from: accounts[1]});
		const boolB6Ioy5k = await MARVELCOINesWDAXi.transferFrom.call(addressynZigqv, addressajjBYP1, uintkKOflEE, {from: accounts[2]});
		const boolOg52enq = await MARVELCOINesWDAXi.approve.call(addressVWotVPl, uintm77WR2n, {from: accounts[1]});
		const boolqf5hZiz = await MARVELCOINesWDAXi.burn.call(uintxTj18CN, {from: accounts[4]});
		const boolD8hd1uw = await MARVELCOINesWDAXi.approve.call(addressRI3vWXj, uintgdFwmmO, {from: accounts[5]});
	});

	it('test for MARVELCOIN', async () => {
		const uintlAGEXic = BigInt("981")
		const stringrGfhDw6 = "ytiK2xdzp69qy4jSWIbLTmgllFBff99VlErkH3LjaTKkxbFXsoSlXPAxGiXzXss67Gz3Mgn3j2NRS8h13nM"
		const stringvWmz60z = "QMj9QtQOBU"
		const MARVELCOINEpc7Sq = await MARVELCOIN.new(uintlAGEXic, stringrGfhDw6, stringvWmz60z, {from: accounts[3]});
		const uintCUSOOTW = BigInt("1326")
		const uintxGRsY6h = BigInt("406")
		const addressdCbo4D0 = accounts[3]
		const addressULNEvQe = "0x0000000000000000000000000000000000000001"
		const byteL2yYjl1 = "0x031d141806001d14191e031e161a"
		const uintA7DDMkl = BigInt("1761")
		const addressbh0AKSN = accounts[3]
		const uint4AevSe = BigInt("811")
//		const booln86ex2z = await MARVELCOINEpc7Sq.burn.call(uintCUSOOTW, {from: accounts[0]});
//		const boolB4qInyv = await MARVELCOINEpc7Sq.transferFrom.call(addressULNEvQe, addressdCbo4D0, uintxGRsY6h, {from: accounts[2]});
//		const boolYHtWWFV = await MARVELCOINEpc7Sq.approveAndCall.call(addressbh0AKSN, uintA7DDMkl, byteL2yYjl1, {from: accounts[3]});
//		const boolfQlkCLY = await MARVELCOINEpc7Sq.burn.call(uint4AevSe, {from: accounts[3]});

		await expect(MARVELCOINEpc7Sq.burn.call(uintCUSOOTW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintPJHmYC4 = BigInt("372")
		const stringIbfXKRx = "oMByi9cU0mSnyhFxeSlP5i"
		const stringhUVvVsu = "w25DDaWS"
		const MARVELCOINvZ5Jev = await MARVELCOIN.new(uintPJHmYC4, stringIbfXKRx, stringhUVvVsu, {from: accounts[2]});
		const uintPkQ5oNP = BigInt("1328")
		const addresssoGvjmE = accounts[4]
		const bytearMxlbT = "0x171007020c201a131b11081f15011e061c010a15061e04050102071412"
		const uintsGSF01 = BigInt("620")
		const addresspgQBKTU = accounts[2]
		const byteDGoSntu = "0x07170e1f11160d0a0c1f140a1510051615"
		const uintP0CQRKD = BigInt("508")
		const addressAYtWLS = accounts[5]
		const uintJvbAqmM = BigInt("1113")
		const addressnMuPNyb = "0x0000000000000000000000000000000000000001"
//		const boolDbmz9wM = await MARVELCOINvZ5Jev.burnFrom.call(addresssoGvjmE, uintPkQ5oNP, {from: accounts[0]});
//		const boolggscLVM = await MARVELCOINvZ5Jev.approveAndCall.call(addresspgQBKTU, uintsGSF01, bytearMxlbT, {from: accounts[4]});
//		const boolbNgA2ft = await MARVELCOINvZ5Jev.approveAndCall.call(addressAYtWLS, uintP0CQRKD, byteDGoSntu, {from: accounts[2]});
//		const boolHkoBAay = await MARVELCOINvZ5Jev.transfer.call(addressnMuPNyb, uintJvbAqmM, {from: accounts[0]});

		await expect(MARVELCOINvZ5Jev.burnFrom.call(addresssoGvjmE, uintPkQ5oNP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})