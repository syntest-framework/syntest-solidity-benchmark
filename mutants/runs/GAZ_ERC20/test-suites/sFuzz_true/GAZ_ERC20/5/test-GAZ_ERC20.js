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
		const GAZ_ERC20qLY84Vq = await GAZ_ERC20.new({from: accounts[2]});
		const uintWOP4c5 = BigInt("1715")
		const addressEmuXVd9 = accounts[3]
		const addressO9P2olp = accounts[3]
		const addressViHqXw = accounts[4]
		const uinte8F7CHq = BigInt("258")
		const addresspKGdGP = accounts[5]
		const addressTLPv5zi = "0x0000000000000000000000000000000000000001"
		const uintBSs7bS = BigInt("1515")
		const addressY1GdnG5 = accounts[3]
		const uinteMxBLZw = BigInt("1767")
		const addressP0ecezn = accounts[2]
		const addressJ4vrGrR = accounts[3]
		const boolPlykb59 = await GAZ_ERC20qLY84Vq.approve.call(addressEmuXVd9, uintWOP4c5, {from: accounts[3]});
		const boolh4CVN7Z = await GAZ_ERC20qLY84Vq.approve.call(addressO9P2olp, {from: accounts[1]});
		const boolD269VBj = await GAZ_ERC20qLY84Vq.approve.call(addressViHqXw, {from: accounts[0]});
		const boolyFjgbJZ = await GAZ_ERC20qLY84Vq.transferFrom.call(addressTLPv5zi, addresspKGdGP, uinte8F7CHq, {from: accounts[0]});
		const boolYP82k4U = await GAZ_ERC20qLY84Vq.approve.call(addressY1GdnG5, uintBSs7bS, {from: accounts[4]});
		const boolpINbjo0 = await GAZ_ERC20qLY84Vq.transferFrom.call(addressJ4vrGrR, addressP0ecezn, uinteMxBLZw, {from: accounts[4]});

		assert.equal(boolPlykb59, true)
		await expect(GAZ_ERC20qLY84Vq.approve.call(addressO9P2olp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20qLY84Vq = await GAZ_ERC20.new({from: accounts[2]});
		const uintDk15GFZ = BigInt("1717")
		const addressheZNKUL = accounts[3]
		const uintQcaEitu = BigInt("1403")
		const addressWAN7sLs = accounts[0]
		const addressw0mwmUy = "0x0000000000000000000000000000000000000001"
		const uintEv46jz6 = BigInt("258")
		const addressyzicZg8 = accounts[4]
		const addressfDsUdEl = "0x0000000000000000000000000000000000000001"
		const uintLok3Sm9 = BigInt("1767")
		const addressEQgbSwS = accounts[2]
		const addressSvs8ulb = accounts[3]
		const boolPlykb59 = await GAZ_ERC20qLY84Vq.approve.call(addressheZNKUL, uintDk15GFZ, {from: accounts[3]});
		const boolhn2Z1np = await GAZ_ERC20qLY84Vq.approve.call(addressWAN7sLs, uintQcaEitu, {from: accounts[5]});
		const booly4VobA = await GAZ_ERC20qLY84Vq.approve.call(addressw0mwmUy, {from: "0x0000000000000000000000000000000000000001"});
		const boolyFjgbJZ = await GAZ_ERC20qLY84Vq.transferFrom.call(addressfDsUdEl, addressyzicZg8, uintEv46jz6, {from: accounts[0]});
		const boolpINbjo0 = await GAZ_ERC20qLY84Vq.transferFrom.call(addressSvs8ulb, addressEQgbSwS, uintLok3Sm9, {from: accounts[4]});

		assert.equal(boolPlykb59, true)
		assert.equal(boolhn2Z1np, true)
		await expect(GAZ_ERC20qLY84Vq.approve.call(addressw0mwmUy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20pa6HtsD = await GAZ_ERC20.new({from: accounts[1]});
		const uintjmUzi8T = BigInt("1216")
		const addresseXWlO0o = accounts[5]
		const uintlHYuXUS = BigInt("402")
		const addressIuCijy = accounts[3]
		const uintK6Giy5F = BigInt("1402")
		const addressaeVIVPH = accounts[4]
		const addressBGpBF22 = accounts[2]
		const boolrPlNkA = await GAZ_ERC20pa6HtsD.approve.call(addresseXWlO0o, uintjmUzi8T, {from: accounts[0]});
		const boolCEvfSEw = await GAZ_ERC20pa6HtsD.approve.call(addressIuCijy, uintlHYuXUS, {from: accounts[2]});
		const boolPuWHMt3 = await GAZ_ERC20pa6HtsD.approve.call(addressaeVIVPH, uintK6Giy5F, {from: accounts[0]});
		const boolt5wjk9O = await GAZ_ERC20pa6HtsD.approve.call(addressBGpBF22, {from: accounts[4]});

		assert.equal(boolCEvfSEw, true)
		assert.equal(boolPuWHMt3, true)
		assert.equal(boolrPlNkA, true)
		await expect(GAZ_ERC20pa6HtsD.approve.call(addressBGpBF22, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC200XAevu = await GAZ_ERC20.new({from: accounts[1]});
		const addressvGPerb3 = accounts[4]
		const uintJ9BnfgE = BigInt("1662")
		const addressexX4pXQ = accounts[2]
		const boolO4H5KEM = await GAZ_ERC200XAevu.approve.call(addressvGPerb3, {from: accounts[5]});
		const boolyobrpmj = await GAZ_ERC200XAevu.approve.call(addressexX4pXQ, uintJ9BnfgE, {from: accounts[0]});

		await expect(GAZ_ERC200XAevu.approve.call(addressvGPerb3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC200XAevu = await GAZ_ERC20.new({from: accounts[1]});
		const addressV8NMVE4 = accounts[4]
		const uintr3x8upo = BigInt("700")
		const addressDw8ojbS = accounts[3]
		const uinttWEN2Yl = BigInt("1662")
		const addressdXl7ujW = accounts[2]
		const boolqasrska = await GAZ_ERC200XAevu.approve.call(addressV8NMVE4, {from: accounts[0]});
		const boolcWqggoj = await GAZ_ERC200XAevu.transfer.call(addressDw8ojbS, uintr3x8upo, {from: "0x0000000000000000000000000000000000000001"});
		const boolyobrpmj = await GAZ_ERC200XAevu.approve.call(addressdXl7ujW, uinttWEN2Yl, {from: accounts[0]});

		await expect(GAZ_ERC200XAevu.approve.call(addressV8NMVE4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC200XAevu = await GAZ_ERC20.new({from: accounts[1]});
		const uintzlXrMgD = BigInt("528")
		const addressWcQjgrQ = accounts[4]
		const uintMHmiaFC = BigInt("1662")
		const addressQyA0hwm = accounts[1]
		const addresspnFP4D0 = "0x0000000000000000000000000000000000000001"
		const uintmjI6WOM = BigInt("1999")
		const addressB4EPCu = accounts[3]
		const boolwPDF2Jg = await GAZ_ERC200XAevu.approve.call(addressWcQjgrQ, uintzlXrMgD, {from: accounts[0]});
		const boolyobrpmj = await GAZ_ERC200XAevu.approve.call(addressQyA0hwm, uintMHmiaFC, {from: accounts[0]});
		const boolhRzXyZd = await GAZ_ERC200XAevu.approve.call(addresspnFP4D0, {from: accounts[2]});
		const boolyrfia64 = await GAZ_ERC200XAevu.approve.call(addressB4EPCu, uintmjI6WOM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolwPDF2Jg, true)
		assert.equal(boolyobrpmj, true)
		await expect(GAZ_ERC200XAevu.approve.call(addresspnFP4D0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})