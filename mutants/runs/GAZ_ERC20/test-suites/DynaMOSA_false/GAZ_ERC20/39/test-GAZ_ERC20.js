const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC200XAevu = await GAZ_ERC20.new({from: accounts[1]});
		const uintr01a0iV = BigInt("1611")
		const addressGnyQ0LP = accounts[5]
		const uintxd4xyMA = BigInt("1662")
		const addressWr5czG = accounts[1]
		const uinttLbW8DA = BigInt("330")
		const addressealXM35 = accounts[2]
		const boolreaY4PS = await GAZ_ERC200XAevu.transfer.call(addressGnyQ0LP, uintr01a0iV, {from: accounts[5]});
		const boolyobrpmj = await GAZ_ERC200XAevu.approve.call(addressWr5czG, uintxd4xyMA, {from: accounts[0]});
		const boolYO6rVNS = await GAZ_ERC200XAevu.approve.call(addressealXM35, uinttLbW8DA, {from: accounts[2]});

		await expect(GAZ_ERC200XAevu.transfer.call(addressGnyQ0LP, uintr01a0iV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20qLY84Vq = await GAZ_ERC20.new({from: accounts[2]});
		const uintfdY5Ngr = BigInt("1715")
		const addressW6jdaMq = accounts[3]
		const uintHR9BnD6 = BigInt("258")
		const addresstqp1Zuh = accounts[4]
		const addressKFDxcQD = "0x0000000000000000000000000000000000000001"
		const uintjD0U7u3 = BigInt("1515")
		const addressh8nu2ak = accounts[3]
		const uintu5dhucO = BigInt("1767")
		const addresswNqesuS = accounts[2]
		const addressOkJOpeA = accounts[3]
		const boolPlykb59 = await GAZ_ERC20qLY84Vq.approve.call(addressW6jdaMq, uintfdY5Ngr, {from: accounts[3]});
		const boolyFjgbJZ = await GAZ_ERC20qLY84Vq.transferFrom.call(addressKFDxcQD, addresstqp1Zuh, uintHR9BnD6, {from: accounts[0]});
		const boolYP82k4U = await GAZ_ERC20qLY84Vq.approve.call(addressh8nu2ak, uintjD0U7u3, {from: accounts[4]});
		const boolpINbjo0 = await GAZ_ERC20qLY84Vq.transferFrom.call(addressOkJOpeA, addresswNqesuS, uintu5dhucO, {from: accounts[4]});

		assert.equal(boolPlykb59, true)
		await expect(GAZ_ERC20qLY84Vq.transferFrom.call(addressKFDxcQD, addresstqp1Zuh, uintHR9BnD6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20uIaMB4X = await GAZ_ERC20.new({from: accounts[0]});
		const uintrkllVJY = BigInt("1444")
		const addressamaLPaC = accounts[0]
		const addresskY5FaF = accounts[0]
		const uintTnliE0U = BigInt("1886")
		const addressfexrEEU = accounts[2]
		const uintwKta9Yj = BigInt("845")
		const addressuflp0jM = accounts[3]
		const uintVNUTjUV = BigInt("660")
		const addressxYKcAT = accounts[2]
		const uintw6yYFtP = BigInt("393")
		const addressZm86kK9 = accounts[1]
		const uintOz3GUBP = BigInt("544")
		const addressPZg2xJE = "0x0000000000000000000000000000000000000001"
		const boolby3fWmZ = await GAZ_ERC20uIaMB4X.transferFrom.call(addresskY5FaF, addressamaLPaC, uintrkllVJY, {from: accounts[0]});
		const boolQ7R6D5E = await GAZ_ERC20uIaMB4X.transfer.call(addressfexrEEU, uintTnliE0U, {from: accounts[4]});
		const boolYWaJeXI = await GAZ_ERC20uIaMB4X.approve.call(addressuflp0jM, uintwKta9Yj, {from: accounts[3]});
		const boolYU3Urp6 = await GAZ_ERC20uIaMB4X.approve.call(addressxYKcAT, uintVNUTjUV, {from: accounts[2]});
		const boolfVLF869 = await GAZ_ERC20uIaMB4X.transfer.call(addressZm86kK9, uintw6yYFtP, {from: accounts[0]});
		const boollrMSHj7 = await GAZ_ERC20uIaMB4X.approve.call(addressPZg2xJE, uintOz3GUBP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolby3fWmZ, true)
		await expect(GAZ_ERC20uIaMB4X.transfer.call(addressfexrEEU, uintTnliE0U, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20INpenq2 = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUM0sVj = BigInt("1194")
		const addressWw05Cx = "0x0000000000000000000000000000000000000001"
		const uintgl4kXGI = BigInt("1065")
		const addresst4umqQf = accounts[5]
		const uintHt1TjDG = BigInt("412")
		const addressHRgJz1t = "0x0000000000000000000000000000000000000001"
		const uintmhRkt9Q = BigInt("1683")
		const addressOVuwrf9 = accounts[2]
		const boolQQQt39g = await GAZ_ERC20INpenq2.transfer.call(addressWw05Cx, uintUM0sVj, {from: accounts[1]});
		const boolnovbkzc = await GAZ_ERC20INpenq2.approve.call(addresst4umqQf, uintgl4kXGI, {from: accounts[5]});
		const boolUa2qvTQ = await GAZ_ERC20INpenq2.transfer.call(addressHRgJz1t, uintHt1TjDG, {from: accounts[3]});
		const boolvk3iS6R = await GAZ_ERC20INpenq2.approve.call(addressOVuwrf9, uintmhRkt9Q, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC209hesIt = await GAZ_ERC20.new({from: accounts[0]});
		const addresse4kzF04 = accounts[0]
		const uintfJuUl9n = BigInt("1219")
		const addressEuRWbOF = accounts[1]
		const uintQlJu7n9 = BigInt("1617")
		const addressMxVaP5m = accounts[3]
		const uintyb2gLj9 = BigInt("968")
		const addresst8DLby = accounts[1]
		const uintyj2aOAh = BigInt("1098")
		const addressmMhurRU = accounts[2]
		const boolE3wZ8Oe = await GAZ_ERC209hesIt.approve.call(addresse4kzF04, {from: accounts[3]});
		const boolvi4obAE = await GAZ_ERC209hesIt.transfer.call(addressEuRWbOF, uintfJuUl9n, {from: accounts[4]});
		const boolvsFWKcW = await GAZ_ERC209hesIt.approve.call(addressMxVaP5m, uintQlJu7n9, {from: accounts[2]});
		const boolVWliGP = await GAZ_ERC209hesIt.approve.call(addresst8DLby, uintyb2gLj9, {from: accounts[3]});
		const boolB8r1Hxv = await GAZ_ERC209hesIt.approve.call(addressmMhurRU, uintyj2aOAh, {from: accounts[2]});

		await expect(GAZ_ERC209hesIt.approve.call(addresse4kzF04, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20XHvJwuy = await GAZ_ERC20.new({from: accounts[1]});
		const addressts4j6v = accounts[1]
		const uintMo9CvwM = BigInt("824")
		const addressxic6V0W = accounts[3]
		const uintJRvs9Gz = BigInt("1718")
		const addressMAQKD8o = accounts[0]
		const address3WGiYz = accounts[3]
		const addressOxt21b7 = accounts[5]
		const uintsnKpT9O = BigInt("330")
		const addressPHB988 = accounts[6]
		const uintrrRf11T = BigInt("1797")
		const addressqNW81U4 = accounts[0]
		const boolD3CQaZz = await GAZ_ERC20XHvJwuy.approve.call(addressts4j6v, {from: accounts[4]});
		const boole76MB8h = await GAZ_ERC20XHvJwuy.approve.call(addressxic6V0W, uintMo9CvwM, {from: accounts[1]});
		const boolypSV2sL = await GAZ_ERC20XHvJwuy.transferFrom.call(address3WGiYz, addressMAQKD8o, uintJRvs9Gz, {from: accounts[1]});
		const boolVrzNfNC = await GAZ_ERC20XHvJwuy.approve.call(addressOxt21b7, {from: "0x0000000000000000000000000000000000000001"});
		const boolBpJxSJA = await GAZ_ERC20XHvJwuy.transfer.call(addressPHB988, uintsnKpT9O, {from: accounts[2]});
		const boolC0kohAf = await GAZ_ERC20XHvJwuy.transfer.call(addressqNW81U4, uintrrRf11T, {from: accounts[4]});

		await expect(GAZ_ERC20XHvJwuy.approve.call(addressts4j6v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20a8sGOk = await GAZ_ERC20.new({from: accounts[4]});
		const addressD6v0Vis = accounts[0]
		const uintXogP5X2 = BigInt("980")
		const addressUzX1nYu = accounts[6]
		const uintbeAc1rZ = BigInt("1175")
		const addressweZyQZo = accounts[5]
		const boolPeSZkT = await GAZ_ERC20a8sGOk.approve.call(addressD6v0Vis, {from: accounts[0]});
		const boolJW1swla = await GAZ_ERC20a8sGOk.approve.call(addressUzX1nYu, uintXogP5X2, {from: "0x0000000000000000000000000000000000000001"});
		const boolbhcmXMN = await GAZ_ERC20a8sGOk.transfer.call(addressweZyQZo, uintbeAc1rZ, {from: accounts[0]});

		await expect(GAZ_ERC20a8sGOk.approve.call(addressD6v0Vis, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC200XAevu = await GAZ_ERC20.new({from: accounts[1]});
		const addressqlXjQzN = "0x0000000000000000000000000000000000000001"
		const uintJo6oxG9 = BigInt("1611")
		const addressVUJR133 = accounts[6]
		const uintmXc7xKq = BigInt("1662")
		const addressVF02pf = accounts[1]
		const uinttcscg1h = BigInt("169")
		const addressL3pahHc = accounts[3]
		const addressARvI217 = accounts[1]
		const uintDbcfCzT = BigInt("330")
		const addressnQISwh0 = accounts[2]
		const boolfT1xZLm = await GAZ_ERC200XAevu.approve.call(addressqlXjQzN, {from: accounts[2]});
		const boolreaY4PS = await GAZ_ERC200XAevu.transfer.call(addressVUJR133, uintJo6oxG9, {from: accounts[5]});
		const boolyobrpmj = await GAZ_ERC200XAevu.approve.call(addressVF02pf, uintmXc7xKq, {from: accounts[0]});
		const boolXwVTxtf = await GAZ_ERC200XAevu.transferFrom.call(addressARvI217, addressL3pahHc, uinttcscg1h, {from: accounts[5]});
		const boolYO6rVNS = await GAZ_ERC200XAevu.approve.call(addressnQISwh0, uintDbcfCzT, {from: accounts[2]});

		await expect(GAZ_ERC200XAevu.approve.call(addressqlXjQzN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20a8sGOk = await GAZ_ERC20.new({from: accounts[4]});
		const addressRAhtQVz = accounts[2]
		const uintbyr4Yop = BigInt("901")
		const addressa3y3DRV = accounts[3]
		const uintn4Lm3DD = BigInt("797")
		const addressnACoOPn = accounts[5]
		const uintmc5iGzK = BigInt("1194")
		const addressiC6i8Tc = accounts[6]
		const booltXVUwJh = await GAZ_ERC20a8sGOk.approve.call(addressRAhtQVz, {from: accounts[1]});
		const boolVEkPeP = await GAZ_ERC20a8sGOk.transfer.call(addressa3y3DRV, uintbyr4Yop, {from: accounts[1]});
		const booll1k1K2r = await GAZ_ERC20a8sGOk.approve.call(addressnACoOPn, uintn4Lm3DD, {from: accounts[1]});
		const boolbhcmXMN = await GAZ_ERC20a8sGOk.transfer.call(addressiC6i8Tc, uintmc5iGzK, {from: accounts[0]});

		await expect(GAZ_ERC20a8sGOk.approve.call(addressRAhtQVz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20a8sGOk = await GAZ_ERC20.new({from: accounts[4]});
		const uintVkzwO8s = BigInt("980")
		const addressrsO4oM = accounts[6]
		const addresstdoLwS = accounts[0]
		const uintQJ72dH4 = BigInt("23")
		const addressLRFw81i = accounts[1]
		const uintYj3c0s = BigInt("1175")
		const addressr4n3nx8 = accounts[5]
		const boolJW1swla = await GAZ_ERC20a8sGOk.approve.call(addressrsO4oM, uintVkzwO8s, {from: "0x0000000000000000000000000000000000000001"});
		const boolZcBP1wM = await GAZ_ERC20a8sGOk.approve.call(addresstdoLwS, {from: "0x0000000000000000000000000000000000000001"});
		const boolSf6APBv = await GAZ_ERC20a8sGOk.approve.call(addressLRFw81i, uintQJ72dH4, {from: "0x0000000000000000000000000000000000000001"});
		const boolbhcmXMN = await GAZ_ERC20a8sGOk.transfer.call(addressr4n3nx8, uintYj3c0s, {from: accounts[0]});

		assert.equal(boolJW1swla, true)
		await expect(GAZ_ERC20a8sGOk.approve.call(addresstdoLwS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20qLY84Vq = await GAZ_ERC20.new({from: accounts[2]});
		const uintzvcfoU = BigInt("1715")
		const addresszSFiKyA = accounts[3]
		const addressPQsMPU3 = accounts[1]
		const uintN3zsi7b = BigInt("258")
		const addressDmMrVsU = accounts[4]
		const addressoTxDOy8 = "0x0000000000000000000000000000000000000001"
		const uintZgfK6VD = BigInt("1515")
		const addressCSdooWU = accounts[4]
		const uintjxm2KMI = BigInt("1767")
		const addresseGmrgJ = accounts[2]
		const addressL36lAkb = accounts[3]
		const boolPlykb59 = await GAZ_ERC20qLY84Vq.approve.call(addresszSFiKyA, uintzvcfoU, {from: accounts[3]});
		const boolaW4AyJB = await GAZ_ERC20qLY84Vq.approve.call(addressPQsMPU3, {from: accounts[5]});
		const boolyFjgbJZ = await GAZ_ERC20qLY84Vq.transferFrom.call(addressoTxDOy8, addressDmMrVsU, uintN3zsi7b, {from: accounts[0]});
		const boolYP82k4U = await GAZ_ERC20qLY84Vq.approve.call(addressCSdooWU, uintZgfK6VD, {from: accounts[4]});
		const boolpINbjo0 = await GAZ_ERC20qLY84Vq.transferFrom.call(addressL36lAkb, addresseGmrgJ, uintjxm2KMI, {from: accounts[4]});

		assert.equal(boolPlykb59, true)
		await expect(GAZ_ERC20qLY84Vq.approve.call(addressPQsMPU3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})