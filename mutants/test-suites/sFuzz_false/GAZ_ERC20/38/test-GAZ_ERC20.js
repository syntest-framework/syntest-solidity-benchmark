const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20VL0t64y = await GAZ_ERC20.new({from: accounts[4]});
		const uinttLOgIO = BigInt("171")
		const addressFSk43Fw = accounts[3]
		const addressS3hVaSu = accounts[5]
		const uintwA4t6Ih = BigInt("1919")
		const addressM8A5lKK = accounts[0]
		const addressg3bEky = accounts[5]
		const uintmBe46wZ = BigInt("1900")
		const addressLnhmEig = accounts[4]
		const addressy5Z2zTq = accounts[0]
		const uinteABdfBe = BigInt("1473")
		const addressdNrDzRg = accounts[3]
//		const boolp9sKivR = await GAZ_ERC20VL0t64y.transferFrom.call(addressS3hVaSu, addressFSk43Fw, uinttLOgIO, {from: accounts[1]});
//		const boolOOSlRDT = await GAZ_ERC20VL0t64y.transferFrom.call(addressg3bEky, addressM8A5lKK, uintwA4t6Ih, {from: accounts[5]});
//		const boolb9zMh9V = await GAZ_ERC20VL0t64y.transferFrom.call(addressy5Z2zTq, addressLnhmEig, uintmBe46wZ, {from: accounts[4]});
//		const booliSnNqVQ = await GAZ_ERC20VL0t64y.approve.call(addressdNrDzRg, uinteABdfBe, {from: accounts[2]});

		await expect(GAZ_ERC20VL0t64y.transferFrom.call(addressS3hVaSu, addressFSk43Fw, uinttLOgIO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20eSHxaAK = await GAZ_ERC20.new({from: accounts[0]});
		const uintFUY28c = BigInt("927")
		const addressCEQlEp = accounts[1]
		const uintShFeMF6 = BigInt("1827")
		const addressze6cMg = accounts[1]
		const addresszbYiCWS = accounts[5]
		const boolAKW3rF5 = await GAZ_ERC20eSHxaAK.transfer.call(addressCEQlEp, uintFUY28c, {from: accounts[0]});
//		const boolwAYkPFX = await GAZ_ERC20eSHxaAK.transferFrom.call(addresszbYiCWS, addressze6cMg, uintShFeMF6, {from: accounts[5]});

		assert.equal(boolAKW3rF5, true)
		await expect(GAZ_ERC20eSHxaAK.transferFrom.call(addresszbYiCWS, addressze6cMg, uintShFeMF6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YwSDIPb = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressecSN81r = accounts[4]
		const uinthtl9vN = BigInt("1679")
		const addressRPCAUw = accounts[2]
		const uintpAWU79q = BigInt("1384")
		const addresstUdmxNT = accounts[2]
		const boolpu5cllk = await GAZ_ERC20YwSDIPb.approve.call(addressecSN81r, {from: accounts[2]});
		const booluRVEZGl = await GAZ_ERC20YwSDIPb.transfer.call(addressRPCAUw, uinthtl9vN, {from: accounts[2]});
		const boolYb8oNZ = await GAZ_ERC20YwSDIPb.approve.call(addresstUdmxNT, uintpAWU79q, {from: accounts[5]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20PA8yb7 = await GAZ_ERC20.new({from: accounts[2]});
		const addressgmJtLvI = accounts[3]
		const uintpEnBZk = BigInt("1116")
		const addressvwZeLTW = accounts[2]
		const uintb8z2Vme = BigInt("1633")
		const addressZyoTVTi = "0x0000000000000000000000000000000000000001"
		const uintKczX17s = BigInt("287")
		const addressVnviIqN = accounts[0]
		const addressUFnZqtH = accounts[3]
//		const boolvKOJ0Ji = await GAZ_ERC20PA8yb7.approve.call(addressgmJtLvI, {from: accounts[1]});
//		const boolWjlFnxK = await GAZ_ERC20PA8yb7.approve.call(addressvwZeLTW, uintpEnBZk, {from: accounts[0]});
//		const boolfIfkDaY = await GAZ_ERC20PA8yb7.approve.call(addressZyoTVTi, uintb8z2Vme, {from: accounts[5]});
//		const boolpysriro = await GAZ_ERC20PA8yb7.transferFrom.call(addressUFnZqtH, addressVnviIqN, uintKczX17s, {from: accounts[1]});

		await expect(GAZ_ERC20PA8yb7.approve.call(addressgmJtLvI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20cDef4Mc = await GAZ_ERC20.new({from: accounts[3]});
		const addressNsTJ0FS = accounts[1]
		const uintfh8zRHF = BigInt("1663")
		const addressv0MZNMq = accounts[1]
		const uintCwwnXsv = BigInt("758")
		const addressiykgbJh = accounts[4]
		const uintxlD8sZn = BigInt("373")
		const addressLAGx8Wv = accounts[4]
		const uintXkfxuq0 = BigInt("1404")
		const addressW4OpibR = accounts[1]
//		const boolUphO85 = await GAZ_ERC20cDef4Mc.approve.call(addressNsTJ0FS, {from: accounts[5]});
//		const boolxXQHxv = await GAZ_ERC20cDef4Mc.transfer.call(addressv0MZNMq, uintfh8zRHF, {from: accounts[3]});
//		const boolbWti88f = await GAZ_ERC20cDef4Mc.approve.call(addressiykgbJh, uintCwwnXsv, {from: accounts[2]});
//		const boolo83bQi2 = await GAZ_ERC20cDef4Mc.transfer.call(addressLAGx8Wv, uintxlD8sZn, {from: "0x0000000000000000000000000000000000000001"});
//		const boolpRf1BDB = await GAZ_ERC20cDef4Mc.transfer.call(addressW4OpibR, uintXkfxuq0, {from: accounts[2]});

		await expect(GAZ_ERC20cDef4Mc.approve.call(addressNsTJ0FS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20kBknJAh = await GAZ_ERC20.new({from: accounts[0]});
		const uintPY1F3z = BigInt("1989")
		const addressjRVj9F = accounts[0]
		const uintMol8rio = BigInt("1202")
		const address2vF6mr = accounts[5]
		const uintKGPD1Ai = BigInt("1798")
		const addresswuU937g = accounts[2]
		const boolOYtA0vq = await GAZ_ERC20kBknJAh.transfer.call(addressjRVj9F, uintPY1F3z, {from: accounts[0]});
		const boolDJ6nPCC = await GAZ_ERC20kBknJAh.approve.call(address2vF6mr, uintMol8rio, {from: "0x0000000000000000000000000000000000000001"});
		const boollHU8KPl = await GAZ_ERC20kBknJAh.approve.call(addresswuU937g, uintKGPD1Ai, {from: accounts[0]});

		assert.equal(boolDJ6nPCC, true)
		assert.equal(boolOYtA0vq, true)
		assert.equal(boollHU8KPl, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20eSHxaAK = await GAZ_ERC20.new({from: accounts[0]});
		const addresstYcJGSB = "0x0000000000000000000000000000000000000001"
		const uintujs8AE = BigInt("927")
		const addressGM1dXAV = accounts[2]
		const uintmyla3ka = BigInt("1827")
		const addressw857GQ9 = accounts[1]
		const addressrjodEZ = accounts[5]
		const uintjrsInTp = BigInt("281")
		const addressIpUDa2a = accounts[0]
//		const boollxIOmJ8 = await GAZ_ERC20eSHxaAK.approve.call(addresstYcJGSB, {from: accounts[2]});
//		const boolAKW3rF5 = await GAZ_ERC20eSHxaAK.transfer.call(addressGM1dXAV, uintujs8AE, {from: accounts[0]});
//		const boolwAYkPFX = await GAZ_ERC20eSHxaAK.transferFrom.call(addressrjodEZ, addressw857GQ9, uintmyla3ka, {from: accounts[5]});
//		const boolp5ybkXi = await GAZ_ERC20eSHxaAK.approve.call(addressIpUDa2a, uintjrsInTp, {from: accounts[4]});

		await expect(GAZ_ERC20eSHxaAK.approve.call(addresstYcJGSB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20BTkmZW9 = await GAZ_ERC20.new({from: accounts[4]});
		const addresspRg8CaW = accounts[5]
		const uintEbcQQ2i = BigInt("771")
		const address1TRnPk = accounts[1]
		const uintKiaQI01 = BigInt("649")
		const addressEecuTO7 = accounts[0]
//		const bool99qfip = await GAZ_ERC20BTkmZW9.approve.call(addresspRg8CaW, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJRWmMkN = await GAZ_ERC20BTkmZW9.approve.call(address1TRnPk, uintEbcQQ2i, {from: accounts[4]});
//		const boolLrGFIwL = await GAZ_ERC20BTkmZW9.approve.call(addressEecuTO7, uintKiaQI01, {from: accounts[0]});

		await expect(GAZ_ERC20BTkmZW9.approve.call(addresspRg8CaW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20eSHxaAK = await GAZ_ERC20.new({from: accounts[0]});
		const uintg7o8fr9 = BigInt("932")
		const addressuyTkz5p = accounts[1]
		const addresss6hVZAN = accounts[1]
		const boolAKW3rF5 = await GAZ_ERC20eSHxaAK.transfer.call(addressuyTkz5p, uintg7o8fr9, {from: accounts[0]});
//		const boolLeeRSm9 = await GAZ_ERC20eSHxaAK.approve.call(addresss6hVZAN, {from: accounts[3]});

		assert.equal(boolAKW3rF5, true)
		await expect(GAZ_ERC20eSHxaAK.approve.call(addresss6hVZAN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20eSHxaAK = await GAZ_ERC20.new({from: accounts[0]});
		const uint4jtxzo = BigInt("927")
		const addressGgUQPHR = accounts[2]
		const uintIfiQ67K = BigInt("292")
		const addressualmOit = accounts[0]
		const addressoqk9YqD = accounts[1]
		const boolAKW3rF5 = await GAZ_ERC20eSHxaAK.transfer.call(addressGgUQPHR, uint4jtxzo, {from: accounts[0]});
		const boolvVzDUT = await GAZ_ERC20eSHxaAK.approve.call(addressualmOit, uintIfiQ67K, {from: accounts[2]});
//		const boolvgjTkag = await GAZ_ERC20eSHxaAK.approve.call(addressoqk9YqD, {from: accounts[4]});

		assert.equal(boolAKW3rF5, true)
		assert.equal(boolvVzDUT, true)
		await expect(GAZ_ERC20eSHxaAK.approve.call(addressoqk9YqD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20dHceWdP = await GAZ_ERC20.new({from: accounts[4]});
		const addressVlAnTsu = accounts[5]
		const uintBO3ADWq = BigInt("2020")
		const addressDLa835 = accounts[0]
		const uint3JlAYY = BigInt("1279")
		const addressB2trSF3 = accounts[0]
		const uintMv9LyYz = BigInt("1790")
		const addressZjZ4LsY = accounts[2]
		const uintXv6iYpd = BigInt("1764")
		const addressKB2AwL = accounts[0]
		const addressaADRAMy = accounts[2]
//		const boolRDRQkXj = await GAZ_ERC20dHceWdP.approve.call(addressVlAnTsu, {from: accounts[0]});
//		const boolRQ2GWD6 = await GAZ_ERC20dHceWdP.transfer.call(addressDLa835, uintBO3ADWq, {from: accounts[4]});
//		const boolgacejjc = await GAZ_ERC20dHceWdP.transfer.call(addressB2trSF3, uint3JlAYY, {from: accounts[2]});
//		const boolzDw36LN = await GAZ_ERC20dHceWdP.transfer.call(addressZjZ4LsY, uintMv9LyYz, {from: accounts[3]});
//		const boolFBL54DO = await GAZ_ERC20dHceWdP.transferFrom.call(addressaADRAMy, addressKB2AwL, uintXv6iYpd, {from: accounts[1]});

		await expect(GAZ_ERC20dHceWdP.approve.call(addressVlAnTsu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})