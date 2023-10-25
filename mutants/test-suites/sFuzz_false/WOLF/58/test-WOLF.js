const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringNZXYaGg = "8dRMjtC8QpedQjwFXA1OzDGhon579U8KfWBVcgBGMzmN8mL2RaKD1q8h6xhr"
		const stringvRkN8ZK = "j5pzRr2PTQSAw"
		const uintb8huXtl = BigInt("702")
		const WOLFKe49kob = await WOLF.new(stringNZXYaGg, stringvRkN8ZK, uintb8huXtl, {from: accounts[3]});
		const uintYLoJni = BigInt("369")
		const addresse48bkDF = accounts[1]
		const addressT4BYEq = accounts[4]
		const uintIsxEZ7Z = BigInt("1208")
		const addressR0rPnkg = accounts[2]
		const uintiubscx7 = BigInt("179")
		const addressTr5fL9 = accounts[4]
		const uintS9o2BBV = BigInt("212")
		const addressMHIhJXO = accounts[5]
		const addressQa93WxQ = accounts[1]
		const boolbpumTIl = await WOLFKe49kob.approve.call(addresse48bkDF, uintYLoJni, {from: accounts[1]});
//		const boolccXGGW0 = await WOLFKe49kob.transferownership.call(addressT4BYEq, {from: accounts[5]});
//		const boolf19wsIA = await WOLFKe49kob.approve.call(addressR0rPnkg, uintIsxEZ7Z, {from: accounts[2]});
//		const boolt902s0e = await WOLFKe49kob.approveAndCall.call(addressTr5fL9, uintiubscx7, {from: accounts[3]});
//		const boolipN4yk9 = await WOLFKe49kob.transferFrom.call(addressQa93WxQ, addressMHIhJXO, uintS9o2BBV, {from: accounts[4]});

		assert.equal(boolbpumTIl, true)
		await expect(WOLFKe49kob.transferownership.call(addressT4BYEq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringWp41zsi = "DuqY7xUTpP7V6bbPllq79OaDJTm3NbTQxtOTXEUzEK44F9tUxqlgDqtUqQ6hMbOWxmzvFlBa8ghS1CR6oUafVKJ0b"
		const string5EkK0w = "aOydBwvzGMw9RIkziJ"
		const uintp4TwBTw = BigInt("715")
		const WOLFHFVAACv = await WOLF.new(stringWp41zsi, string5EkK0w, uintp4TwBTw, {from: accounts[0]});
		const uintU5OB7YJ = BigInt("1567")
		const addressetIxBme = "0x0000000000000000000000000000000000000001"
		const uintjxc4W0 = BigInt("204")
		const addressDWZCRL = accounts[2]
		const uintRWhBzL2 = BigInt("1908")
		const addressu7OAlo3 = accounts[2]
		const addressToAPPDq = accounts[0]
		const uintxH5NK7v = BigInt("1670")
		const addressPF96PpP = accounts[0]
		const boolaNThKl6 = await WOLFHFVAACv.approve.call(addressetIxBme, uintU5OB7YJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolZabMM2r = await WOLFHFVAACv.approve.call(addressDWZCRL, uintjxc4W0, {from: accounts[1]});
//		const boolrIpVwQ0 = await WOLFHFVAACv.transferFrom.call(addressToAPPDq, addressu7OAlo3, uintRWhBzL2, {from: accounts[1]});
//		const boolZP5OOZZ = await WOLFHFVAACv.approve.call(addressPF96PpP, uintxH5NK7v, {from: accounts[4]});

		assert.equal(boolZabMM2r, true)
		assert.equal(boolaNThKl6, true)
		await expect(WOLFHFVAACv.transferFrom.call(addressToAPPDq, addressu7OAlo3, uintRWhBzL2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringmKkvYI6 = "BAi3H9GAh2NWpzzQEKmFkY1MELytA5563lpsgC3Lz8JLJ0eZYyYftFWRQ2khDvQCEKsl8aW1j3VUVM"
		const stringOywix8P = "frXhYhdiVY5B8Zh2mhxaGaxyhUQsj"
		const uintQ5lVFLL = BigInt("1673")
		const WOLFp7mWcuL = await WOLF.new(stringmKkvYI6, stringOywix8P, uintQ5lVFLL, {from: accounts[1]});
		const uinthjR2Swl = BigInt("1108")
		const addressfWqCwbP = accounts[3]
		const uintr3x0YDj = BigInt("1254")
		const addressjdNj80 = accounts[2]
		const addressugPwGR = accounts[1]
		const boolupsI8T1 = await WOLFp7mWcuL.approve.call(addressfWqCwbP, uinthjR2Swl, {from: accounts[0]});
		const boolcdakYcV = await WOLFp7mWcuL.transferFrom.call(addressugPwGR, addressjdNj80, uintr3x0YDj, {from: accounts[1]});

		assert.equal(boolcdakYcV, true)
		assert.equal(boolupsI8T1, true)
	});

	it('test for WOLF', async () => {
		const stringvLZqZxw = "BpFEtzysax5a1AcHQx2DLeqry4yhcDVHFr60yphczkrYKgbGbXTvSJYb9BTYshJ2td4SmqJQbTgPQKxoWQ2WtawCh"
		const stringJcOFSs = "T3jmXaAvJ9Osk0sfc19moGIxdRNmMLamRZrtCI1x9b9qGC77x1ISvMyC79I7faEOacFz6eyXLaQTOOJj90Xj2hANguNYgk6b"
		const uintMIlLRz1 = BigInt("1890")
		const WOLFMZoqca7 = await WOLF.new(stringvLZqZxw, stringJcOFSs, uintMIlLRz1, {from: accounts[0]});
		const uintubzYJaX = BigInt("809")
		const addressHL3HpB3 = accounts[4]
		const addressvBfSoBY = accounts[2]
		const uintP7dADM0 = BigInt("1087")
		const addressY7wyoo9 = "0x0000000000000000000000000000000000000001"
		const addressWIXGB9D = accounts[2]
		const uintzEMr86 = BigInt("1292")
		const addresshFYsWUO = accounts[4]
		const uintX9J8GKi = BigInt("1469")
		const addresslAMGDOl = accounts[4]
		const addressTQZ19tU = accounts[5]
//		const boolJ3kreL3 = await WOLFMZoqca7.transferFrom.call(addressvBfSoBY, addressHL3HpB3, uintubzYJaX, {from: accounts[2]});
//		const boolVWSUYG9 = await WOLFMZoqca7.transferFrom.call(addressWIXGB9D, addressY7wyoo9, uintP7dADM0, {from: "0x0000000000000000000000000000000000000001"});
//		const boolaEcdbDr = await WOLFMZoqca7.approveAndCall.call(addresshFYsWUO, uintzEMr86, {from: accounts[4]});
//		const boolcA1OhkO = await WOLFMZoqca7.transferFrom.call(addressTQZ19tU, addresslAMGDOl, uintX9J8GKi, {from: accounts[4]});

		await expect(WOLFMZoqca7.transferFrom.call(addressvBfSoBY, addressHL3HpB3, uintubzYJaX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringE88tHdH = "n3yGU7iuTza93gkGG6tb5Ad9tqBkxHE1hHpmVhD7jRQvpju6HkurDHS6"
		const stringiFnT1kw = "nOf7JSXpogiz1MvWA4SQCR3UMYXlydNcG769olcKaYllG"
		const uintDsmA5JC = BigInt("1624")
		const WOLFPBChbF6 = await WOLF.new(stringE88tHdH, stringiFnT1kw, uintDsmA5JC, {from: accounts[1]});
		const uintGhX7BvX = BigInt("6")
		const addressgxdquTd = accounts[5]
		const uintNS5cUf9 = BigInt("1000")
		const addresssZDv8uB = accounts[2]
		const uintIzghOiK = BigInt("1470")
		const addressIPNJ59 = accounts[2]
		const addresswGWbJmx = accounts[3]
		const uinte1TlVGy = BigInt("954")
		const addresslEBsmd = accounts[1]
		const uintrEMMV5t = BigInt("1115")
		const addressTh8sMJG = accounts[3]
		const uintyEambaC = BigInt("1939")
		const addressRbom0bc = accounts[3]
		const boolrp670Pd = await WOLFPBChbF6.approveAndCall.call(addressgxdquTd, uintGhX7BvX, {from: accounts[1]});
		const boolJBydOrf = await WOLFPBChbF6.approve.call(addresssZDv8uB, uintNS5cUf9, {from: accounts[3]});
//		const boolXpEN5hK = await WOLFPBChbF6.transferFrom.call(addresswGWbJmx, addressIPNJ59, uintIzghOiK, {from: accounts[3]});
//		const boolyYzgSD6 = await WOLFPBChbF6.approve.call(addresslEBsmd, uinte1TlVGy, {from: accounts[4]});
//		const boolcgYw3O = await WOLFPBChbF6.transfer.call(addressTh8sMJG, uintrEMMV5t, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqLhlsme = await WOLFPBChbF6.approveAndCall.call(addressRbom0bc, uintyEambaC, {from: accounts[3]});

		assert.equal(boolJBydOrf, true)
		assert.equal(boolrp670Pd, true)
		await expect(WOLFPBChbF6.transferFrom.call(addresswGWbJmx, addressIPNJ59, uintIzghOiK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringDmBDe2 = "R9tGtrnnlowR5gVlouqzGt7HBBcbjUxbgQj"
		const stringvnjR2T = "SB1RL7W8UgMDPfZqqB5xXSPvLOLftCe4nlkFOYhTmjv8S4o2TyoHW5vs"
		const uintU6Y5VaY = BigInt("1096")
		const WOLFvMNFb0 = await WOLF.new(stringDmBDe2, stringvnjR2T, uintU6Y5VaY, {from: accounts[2]});
		const uintmPGFaEp = BigInt("900")
		const addressOg3D31 = accounts[1]
		const uinthXViKZ7 = BigInt("250")
		const addressxfmEkWj = accounts[1]
		const uintPTN0SGH = BigInt("173")
		const addressVDIls9k = accounts[2]
		const uintplDbRM = BigInt("798")
		const addressqZQqQh4 = accounts[2]
		const uintM3PvueJ = BigInt("608")
		const addresszKo115g = accounts[1]
		const addressorkkDwY = accounts[4]
//		const boolLyoWjUj = await WOLFvMNFb0.transfer.call(addressOg3D31, uintmPGFaEp, {from: accounts[4]});
//		const booln91JEMu = await WOLFvMNFb0.transfer.call(addressxfmEkWj, uinthXViKZ7, {from: accounts[3]});
//		const boolKeBqZG = await WOLFvMNFb0.approve.call(addressVDIls9k, uintPTN0SGH, {from: accounts[0]});
//		const boolFJHmq9j = await WOLFvMNFb0.approve.call(addressqZQqQh4, uintplDbRM, {from: accounts[3]});
//		const boolau3Q4dH = await WOLFvMNFb0.transferFrom.call(addressorkkDwY, addresszKo115g, uintM3PvueJ, {from: accounts[0]});

		await expect(WOLFvMNFb0.transfer.call(addressOg3D31, uintmPGFaEp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringoBjjUHT = "BVLoajwwKfDxSUwQN5xxRaNGQ176a3tFXF96PyngeMLjMXlwpZOlSVEsuMuEstL1ZNnuQNzu"
		const stringMWJoSSS = "EaF1QY6MK3D90agkwh3aPhOn3TPuLm2lqFnxshG62joEU0xOx"
		const uintHgKRWtV = BigInt("341")
		const WOLFGygxTGJ = await WOLF.new(stringoBjjUHT, stringMWJoSSS, uintHgKRWtV, {from: "0x0000000000000000000000000000000000000001"});
		const uintNba2L9u = BigInt("19")
		const addressaz1aZR2 = accounts[0]
		const uintJCiYTl6 = BigInt("168")
		const addressUA38oVv = accounts[1]
		const uintH4VbIvp = BigInt("1491")
		const addresssa9ky8Z = "0x0000000000000000000000000000000000000001"
		const uintQfqiCYK = BigInt("364")
		const addressYKHG7gy = accounts[0]
		const addressjtiM8t = accounts[4]
		const uintnEQrwLU = BigInt("567")
		const addressqYImASK = accounts[4]
		const boolLEKjZVP = await WOLFGygxTGJ.transfer.call(addressaz1aZR2, uintNba2L9u, {from: accounts[4]});
		const boolpHBUtVo = await WOLFGygxTGJ.approveAndCall.call(addressUA38oVv, uintJCiYTl6, {from: "0x0000000000000000000000000000000000000001"});
		const boolnRgi9yK = await WOLFGygxTGJ.transfer.call(addresssa9ky8Z, uintH4VbIvp, {from: accounts[4]});
		const boolVIY2mbV = await WOLFGygxTGJ.transferFrom.call(addressjtiM8t, addressYKHG7gy, uintQfqiCYK, {from: accounts[4]});
		const bool54eKQ8 = await WOLFGygxTGJ.transfer.call(addressqYImASK, uintnEQrwLU, {from: accounts[4]});
	});

	it('test for WOLF', async () => {
		const stringmKkvYI6 = "BAi3H9GAh2NWpzzQEKmFkY1MELytA5563lpsgC3Lz8JLJ0eZYyYftFWRQ2khDvQCEKsl8aW1j3VUVM"
		const stringOywix8P = "frXhYhdiVY5B8Zh2mhxaGaxyhUQsj"
		const uintiGVKQ0J = BigInt("1673")
		const WOLFp7mWcuL = await WOLF.new(stringmKkvYI6, stringOywix8P, uintiGVKQ0J, {from: accounts[1]});
		const uintND4jbEC = BigInt("0")
		const addressXb4M3ZS = accounts[3]
		const uintfyk2uvM = BigInt("2024")
		const addresssegYpQO = accounts[1]
		const boolN3K4p4p = await WOLFp7mWcuL.transfer.call(addressXb4M3ZS, uintND4jbEC, {from: accounts[5]});
		const boolQ6OfJyJ = await WOLFp7mWcuL.approve.call(addresssegYpQO, uintfyk2uvM, {from: accounts[1]});

		assert.equal(boolN3K4p4p, true)
		assert.equal(boolQ6OfJyJ, true)
	});

	it('test for WOLF', async () => {
		const stringE88tHdH = "n3yGU7iuTza93gkGG6tb5Ad9tqBkxHE1hHpmVhD7jRQvpju6HkurDHS6"
		const stringiFnT1kw = "nOf7JSXpogiz1MvWA4SQCR3UMYXlydNcG769olcKaYllG"
		const uintMo3qsC0 = BigInt("1624")
		const WOLFPBChbF6 = await WOLF.new(stringE88tHdH, stringiFnT1kw, uintMo3qsC0, {from: accounts[1]});
		const uintzcRVQWc = BigInt("0")
		const addressAw9t3w = accounts[6]
		const uinttOMsq6D = BigInt("700")
		const addressSG0SBep = accounts[1]
		const boolrp670Pd = await WOLFPBChbF6.approveAndCall.call(addressAw9t3w, uintzcRVQWc, {from: accounts[1]});
		const boolZAEewy = await WOLFPBChbF6.approve.call(addressSG0SBep, uinttOMsq6D, {from: accounts[2]});

		assert.equal(boolZAEewy, true)
		assert.equal(boolrp670Pd, true)
	});
})