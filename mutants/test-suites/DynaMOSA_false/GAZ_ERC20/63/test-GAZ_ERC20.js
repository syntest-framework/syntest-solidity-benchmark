const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20K6yvS9z = await GAZ_ERC20.new({from: accounts[0]});
		const uintx3y0XEA = BigInt("140")
		const addressTZwDqgE = accounts[2]
		const uintSFhJt2i = BigInt("2027")
		const addresslShHOV0 = accounts[1]
		const uintkZfROqw = BigInt("1023")
		const addressWix5Zy = accounts[5]
		const addressP5nvcXq = accounts[0]
		const uintRRguY2X = BigInt("1099")
		const addresssNTT1i = accounts[1]
		const boolztPJ4Hd = await GAZ_ERC20K6yvS9z.approve.call(addressTZwDqgE, uintx3y0XEA, {from: accounts[4]});
		const boolcGOi8f = await GAZ_ERC20K6yvS9z.approve.call(addresslShHOV0, uintSFhJt2i, {from: accounts[2]});
		const boolZBbY9YX = await GAZ_ERC20K6yvS9z.approve.call(addressWix5Zy, uintkZfROqw, {from: accounts[3]});
//		const booluyvm0Cu = await GAZ_ERC20K6yvS9z.approve.call(addressP5nvcXq, {from: accounts[4]});
//		const boolUciyrMG = await GAZ_ERC20K6yvS9z.approve.call(addresssNTT1i, uintRRguY2X, {from: accounts[4]});

		assert.equal(boolZBbY9YX, true)
		assert.equal(boolcGOi8f, true)
		assert.equal(boolztPJ4Hd, true)
		await expect(GAZ_ERC20K6yvS9z.approve.call(addressP5nvcXq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20PFbZNlP = await GAZ_ERC20.new({from: accounts[2]});
		const uintgq0x2O = BigInt("421")
		const addressJN6aBR = accounts[4]
		const addressCsPgZyd = accounts[1]
		const addressTiNoYRx = accounts[1]
		const uintn9Qa98U = BigInt("362")
		const addressufID3fG = accounts[2]
		const uintBiXaTvk = BigInt("544")
		const addressPLXftVH = accounts[3]
//		const boolDbWfR7l = await GAZ_ERC20PFbZNlP.transferFrom.call(addressCsPgZyd, addressJN6aBR, uintgq0x2O, {from: accounts[4]});
//		const boolS1b4b60 = await GAZ_ERC20PFbZNlP.approve.call(addressTiNoYRx, {from: accounts[2]});
//		const boolsYUgfLF = await GAZ_ERC20PFbZNlP.approve.call(addressufID3fG, uintn9Qa98U, {from: accounts[3]});
//		const boolMkq3aP = await GAZ_ERC20PFbZNlP.transfer.call(addressPLXftVH, uintBiXaTvk, {from: accounts[3]});

		await expect(GAZ_ERC20PFbZNlP.transferFrom.call(addressCsPgZyd, addressJN6aBR, uintgq0x2O, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20bNS46rr = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPMwjSn = BigInt("350")
		const addressjRhrxYJ = accounts[4]
		const uintnxtLafF = BigInt("1873")
		const addressEwwMsOj = accounts[1]
		const uinttL6qE7Q = BigInt("335")
		const addressIXBiLiI = "0x0000000000000000000000000000000000000001"
		const uintheu39l = BigInt("742")
		const addresslGHxKuZ = accounts[1]
		const boolKFh18lU = await GAZ_ERC20bNS46rr.transfer.call(addressjRhrxYJ, uintPMwjSn, {from: accounts[4]});
		const boolAFzy9wu = await GAZ_ERC20bNS46rr.approve.call(addressEwwMsOj, uintnxtLafF, {from: accounts[1]});
		const boolWv0otvR = await GAZ_ERC20bNS46rr.transfer.call(addressIXBiLiI, uinttL6qE7Q, {from: accounts[1]});
		const boolpQcNUQX = await GAZ_ERC20bNS46rr.transfer.call(addresslGHxKuZ, uintheu39l, {from: accounts[0]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20RgdSEpK = await GAZ_ERC20.new({from: accounts[4]});
		const uintz5EI18r = BigInt("86")
		const addressn7xzTK9 = accounts[0]
		const uintqIGg9t3 = BigInt("1077")
		const addressZzPEg9H = accounts[4]
		const uintLKqLekR = BigInt("687")
		const addressoLhwH9p = "0x0000000000000000000000000000000000000001"
		const addresso4guKw = accounts[4]
//		const boolGYpwoWx = await GAZ_ERC20RgdSEpK.transfer.call(addressn7xzTK9, uintz5EI18r, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBMB6Wz = await GAZ_ERC20RgdSEpK.approve.call(addressZzPEg9H, uintqIGg9t3, {from: accounts[4]});
//		const boolBwhVpG1 = await GAZ_ERC20RgdSEpK.approve.call(addressoLhwH9p, uintLKqLekR, {from: accounts[3]});
//		const boolmgxO4ky = await GAZ_ERC20RgdSEpK.approve.call(addresso4guKw, {from: accounts[4]});

		await expect(GAZ_ERC20RgdSEpK.transfer.call(addressn7xzTK9, uintz5EI18r, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC202c15jM = await GAZ_ERC20.new({from: accounts[3]});
		const addresstvAo3bY = accounts[0]
		const uintnqbKGIw = BigInt("1861")
		const addressoEEMxwt = accounts[2]
		const uintsB7bzwh = BigInt("1798")
		const addressr0fhzx = accounts[2]
//		const boolT3CMy5Q = await GAZ_ERC202c15jM.approve.call(addresstvAo3bY, {from: accounts[2]});
//		const boolYMYEDjW = await GAZ_ERC202c15jM.transfer.call(addressoEEMxwt, uintnqbKGIw, {from: accounts[2]});
//		const boolfSX68HU = await GAZ_ERC202c15jM.transfer.call(addressr0fhzx, uintsB7bzwh, {from: accounts[3]});

		await expect(GAZ_ERC202c15jM.approve.call(addresstvAo3bY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20K6yvS9z = await GAZ_ERC20.new({from: accounts[0]});
		const addressRrAze3u = "0x0000000000000000000000000000000000000001"
		const uintCea5q2 = BigInt("140")
		const addressVv0Rs7Y = accounts[2]
		const uintyLNyxWh = BigInt("1889")
		const addressHVpVRSt = accounts[4]
		const uintjQQbwMI = BigInt("2027")
		const addresswRlDWAo = accounts[2]
		const uintl77fXJR = BigInt("1023")
		const addressm2wYWi = accounts[5]
		const addressBSYsgK8 = accounts[0]
		const uintOHLyQQO = BigInt("1099")
		const addressDsdTsoW = accounts[1]
//		const booln404Mu1 = await GAZ_ERC20K6yvS9z.approve.call(addressRrAze3u, {from: accounts[3]});
//		const boolztPJ4Hd = await GAZ_ERC20K6yvS9z.approve.call(addressVv0Rs7Y, uintCea5q2, {from: accounts[4]});
//		const boolRgtyBaI = await GAZ_ERC20K6yvS9z.transfer.call(addressHVpVRSt, uintyLNyxWh, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcGOi8f = await GAZ_ERC20K6yvS9z.approve.call(addresswRlDWAo, uintjQQbwMI, {from: accounts[2]});
//		const boolZBbY9YX = await GAZ_ERC20K6yvS9z.approve.call(addressm2wYWi, uintl77fXJR, {from: accounts[3]});
//		const booluyvm0Cu = await GAZ_ERC20K6yvS9z.approve.call(addressBSYsgK8, {from: accounts[4]});
//		const boolUciyrMG = await GAZ_ERC20K6yvS9z.approve.call(addressDsdTsoW, uintOHLyQQO, {from: accounts[4]});

		await expect(GAZ_ERC20K6yvS9z.approve.call(addressRrAze3u, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20eYcrUhC = await GAZ_ERC20.new({from: accounts[2]});
		const addressYWJno40 = accounts[1]
		const uintu0lJKM = BigInt("1471")
		const addressH2UPhDW = "0x0000000000000000000000000000000000000000"
//		const booln0GtRZ4 = await GAZ_ERC20eYcrUhC.approve.call(addressYWJno40, {from: accounts[1]});
//		const boolTbhEcah = await GAZ_ERC20eYcrUhC.transfer.call(addressH2UPhDW, uintu0lJKM, {from: accounts[1]});

		await expect(GAZ_ERC20eYcrUhC.approve.call(addressYWJno40, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20do6lqJ = await GAZ_ERC20.new({from: accounts[4]});
		const uintw4ybMAU = BigInt("1474")
		const addressXG9Komk = accounts[1]
		const uintYcvIe6D = BigInt("1342")
		const addressEBI2AkX = accounts[2]
		const addressH0nJ1jG = accounts[4]
		const addressTx9oHWP = accounts[3]
		const booluBhZXC0 = await GAZ_ERC20do6lqJ.approve.call(addressXG9Komk, uintw4ybMAU, {from: accounts[2]});
		const boolwXWEgE = await GAZ_ERC20do6lqJ.transferFrom.call(addressH0nJ1jG, addressEBI2AkX, uintYcvIe6D, {from: accounts[4]});
//		const boolPt1FgvH = await GAZ_ERC20do6lqJ.approve.call(addressTx9oHWP, {from: accounts[2]});

		assert.equal(booluBhZXC0, true)
		assert.equal(boolwXWEgE, true)
		await expect(GAZ_ERC20do6lqJ.approve.call(addressTx9oHWP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20HElI873 = await GAZ_ERC20.new({from: accounts[3]});
		const addressObWJY5H = accounts[4]
		const addressgKoJUbN = accounts[3]
//		const boolUkjdQZ = await GAZ_ERC20HElI873.approve.call(addressObWJY5H, {from: accounts[5]});
//		const booldYbbsLV = await GAZ_ERC20HElI873.approve.call(addressgKoJUbN, {from: accounts[2]});

		await expect(GAZ_ERC20HElI873.approve.call(addressObWJY5H, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20eYcrUhC = await GAZ_ERC20.new({from: accounts[2]});
		const addresskJXUEcA = accounts[3]
		const uintAj5730P = BigInt("1469")
		const addressK59eYdo = accounts[4]
		const addressOuoyWSo = "0x0000000000000000000000000000000000000001"
		const uintLdikDsV = BigInt("1438")
		const addressIB7vJfO = "0x0000000000000000000000000000000000000001"
//		const boolK1C4qxN = await GAZ_ERC20eYcrUhC.approve.call(addresskJXUEcA, {from: accounts[0]});
//		const boolD293S7b = await GAZ_ERC20eYcrUhC.approve.call(addressK59eYdo, uintAj5730P, {from: accounts[3]});
//		const boolqkUg47 = await GAZ_ERC20eYcrUhC.approve.call(addressOuoyWSo, {from: accounts[4]});
//		const boolTbhEcah = await GAZ_ERC20eYcrUhC.transfer.call(addressIB7vJfO, uintLdikDsV, {from: accounts[1]});

		await expect(GAZ_ERC20eYcrUhC.approve.call(addresskJXUEcA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YGfoP7c = await GAZ_ERC20.new({from: accounts[0]});
		const uintrzt4Dbq = BigInt("1648")
		const addressjxe36p = accounts[3]
		const addressWlwKdpd = accounts[4]
		const uintq5AekpE = BigInt("1904")
		const addressQEnfRLH = accounts[0]
		const uintu05ebX5 = BigInt("2028")
		const addressR4wNSa7 = accounts[3]
		const uinttTN7vS7 = BigInt("204")
		const addresswkJCyf1 = accounts[0]
		const boolrAZudyq = await GAZ_ERC20YGfoP7c.approve.call(addressjxe36p, uintrzt4Dbq, {from: "0x0000000000000000000000000000000000000001"});
//		const booll7qEZnE = await GAZ_ERC20YGfoP7c.approve.call(addressWlwKdpd, {from: "0x0000000000000000000000000000000000000001"});
//		const booluPazvj6 = await GAZ_ERC20YGfoP7c.approve.call(addressQEnfRLH, uintq5AekpE, {from: accounts[1]});
//		const boolS7b0kUc = await GAZ_ERC20YGfoP7c.transfer.call(addressR4wNSa7, uintu05ebX5, {from: accounts[3]});
//		const boolTLwdyt8 = await GAZ_ERC20YGfoP7c.approve.call(addresswkJCyf1, uinttTN7vS7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolrAZudyq, true)
		await expect(GAZ_ERC20YGfoP7c.approve.call(addressWlwKdpd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})