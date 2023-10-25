const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringOZJfYmg = "CSgXC1kub1t4KxI3oeXD16rUCkwUZpoVkH2WJm9Ij92rmAuHbQNmmQzaRhP2qcqFqLFUwxY"
		const stringrq1dgbl = "RHnfGUvxmtaB5dfhTyqYe39"
		const uintSyEqJrO = BigInt("114")
		const AntiBaseProtocolUIT3dcZ = await AntiBaseProtocol.new(stringOZJfYmg, stringrq1dgbl, uintSyEqJrO, {from: accounts[4]});
		const uinttnKzb5U = BigInt("667")
		const uintCYpTkKy = BigInt("1190")
		const addressLjYm0QQ = accounts[4]
		const addressk6PPasF = accounts[0]
		await AntiBaseProtocolUIT3dcZ.requestGas.call({from: accounts[0]});
		const uint256PsbNbFG = await AntiBaseProtocolUIT3dcZ.findBurnFee.call(uinttnKzb5U, {from: accounts[3]});
		const boolnPS3eCq = await AntiBaseProtocolUIT3dcZ.increaseAllowance.call(addressLjYm0QQ, uintCYpTkKy, {from: accounts[3]});
		const addresshOz0Hzh = await AntiBaseProtocolUIT3dcZ._transferOwnership.call(addressk6PPasF, {from: accounts[3]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolqW5B6G = await AntiBaseProtocol.new({from: accounts[1]});
		const uintouQnKZp = BigInt("343")
		const addressdNn7F8d = "0x0000000000000000000000000000000000000001"
		const uintNRKJdl4 = BigInt("643")
		const addressiGb8XwT = accounts[4]
		const addressibGjgCV = "0x0000000000000000000000000000000000000001"
		const addressXMwhduY = accounts[1]
		const uintAGR7YA = BigInt("1451")
		const boolRMVavU = await AntiBaseProtocolqW5B6G.increaseAllowance.call(addressdNn7F8d, uintouQnKZp, {from: accounts[0]});
//		await AntiBaseProtocolqW5B6G.requestGas.call({from: accounts[3]});
//		const addressEY4Dj7O = await AntiBaseProtocolqW5B6G._approve.call(addressibGjgCV, addressiGb8XwT, uintNRKJdl4, {from: accounts[5]});
//		const addressRca9Suw = await AntiBaseProtocolqW5B6G.transferOwnership.call(addressXMwhduY, {from: accounts[4]});
//		const uint256lUpxAx = await AntiBaseProtocolqW5B6G.findRewardFee.call(uintAGR7YA, {from: accounts[3]});
//		const stringSoTpoya = await AntiBaseProtocolqW5B6G.symbol.call({from: accounts[4]});

		assert.equal(boolRMVavU, true)
		await expect(AntiBaseProtocolqW5B6G.requestGas.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBLSltV = await AntiBaseProtocol.new({from: accounts[5]});
		const addressUNC9laU = accounts[0]
		const addressG2LQN8U = accounts[3]
		const uintjETnYGH = BigInt("1337")
		const addressfBkfPWm = accounts[1]
		const addressgXgsec4 = accounts[0]
		const uintG7GIXJ = BigInt("544")
		const addressG0apIvD = accounts[3]
		const uintFbThcyd = BigInt("432")
		const uint256D5divpa = await AntiBaseProtocolBLSltV.allowance.call(addressG2LQN8U, addressUNC9laU, {from: accounts[4]});
		const boolkxkv8Iu = await AntiBaseProtocolBLSltV.increaseAllowance.call(addressfBkfPWm, uintjETnYGH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GBhmKqN = await AntiBaseProtocolBLSltV.balanceOf.call(addressgXgsec4, {from: accounts[1]});
//		const addressHBHwOpe = await AntiBaseProtocolBLSltV._burnFrom.call(addressG0apIvD, uintG7GIXJ, {from: accounts[5]});
//		const uint256vmEESK = await AntiBaseProtocolBLSltV.burn.call(uintFbThcyd, {from: accounts[3]});

		assert.equal(boolkxkv8Iu, true)
		assert.equal(uint256D5divpa, BigInt("0"))
		assert.equal(uint256GBhmKqN, BigInt("0"))
		await expect(AntiBaseProtocolBLSltV._burnFrom.call(addressG0apIvD, uintG7GIXJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnqZiz4M = await AntiBaseProtocol.new({from: accounts[1]});
		const addresssCbuomY = accounts[0]
		const stringGj8Z3wp = await AntiBaseProtocolnqZiz4M.symbol.call({from: accounts[2]});
//		const addressSQGLK95 = await AntiBaseProtocolnqZiz4M._transferOwnership.call(addresssCbuomY, {from: accounts[1]});

		assert.equal(stringGj8Z3wp, "ABASE")
		await expect(AntiBaseProtocolnqZiz4M._transferOwnership.call(addresssCbuomY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnqZiz4M = await AntiBaseProtocol.new({from: accounts[1]});
		const addressOW8WCyO = accounts[5]
		const addressU0Q4smG = accounts[0]
		const stringGj8Z3wp = await AntiBaseProtocolnqZiz4M.symbol.call({from: accounts[2]});
//		const addressnulAL3j = await AntiBaseProtocolnqZiz4M.transferOwnership.call(addressOW8WCyO, {from: accounts[3]});
//		const addressSQGLK95 = await AntiBaseProtocolnqZiz4M._transferOwnership.call(addressU0Q4smG, {from: accounts[1]});

		assert.equal(stringGj8Z3wp, "ABASE")
		await expect(AntiBaseProtocolnqZiz4M.transferOwnership.call(addressOW8WCyO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolK9TUqd3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintTS4DIhI = BigInt("1354")
		const addressh2hvSjp = accounts[1]
		const uintROEuOgh = BigInt("1749")
		const addressciGD7B = accounts[4]
		const addressCaGU1hU = accounts[5]
//		const addressb897QU1 = await AntiBaseProtocolK9TUqd3.burnFrom.call(addressh2hvSjp, uintTS4DIhI, {from: accounts[0]});
//		const addressANJ18hT = await AntiBaseProtocolK9TUqd3._approve.call(addressCaGU1hU, addressciGD7B, uintROEuOgh, {from: accounts[2]});
//		const uint256JCoTRV = await AntiBaseProtocolK9TUqd3.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const bool4Jn6um = await AntiBaseProtocolK9TUqd3.isOwner.call({from: accounts[4]});

		await expect(AntiBaseProtocolK9TUqd3.burnFrom.call(addressh2hvSjp, uintTS4DIhI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnqZiz4M = await AntiBaseProtocol.new({from: accounts[1]});
		const uintDGldnrG = BigInt("883")
		const addresskSJmdUW = accounts[4]
		const uintMUc3TL3 = BigInt("1670")
		const addressaV1Qyw = accounts[3]
		const addressXD9asM = accounts[4]
		const stringGj8Z3wp = await AntiBaseProtocolnqZiz4M.symbol.call({from: accounts[2]});
		const booln5qVPkD = await AntiBaseProtocolnqZiz4M.transfer.call(addresskSJmdUW, uintDGldnrG, {from: accounts[1]});
//		const addresstmZcQhq = await AntiBaseProtocolnqZiz4M._burnFrom.call(addressaV1Qyw, uintMUc3TL3, {from: accounts[2]});
//		const addressSQGLK95 = await AntiBaseProtocolnqZiz4M._transferOwnership.call(addressXD9asM, {from: accounts[1]});
//		const boolIADwrHX = await AntiBaseProtocolnqZiz4M.isOwner.call({from: accounts[1]});

		assert.equal(booln5qVPkD, true)
		assert.equal(stringGj8Z3wp, "ABASE")
		await expect(AntiBaseProtocolnqZiz4M._burnFrom.call(addressaV1Qyw, uintMUc3TL3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolTSIv7mM = await AntiBaseProtocol.new({from: accounts[3]});
		const uintr39DJ0l = BigInt("2046")
		const addressWYgZWBv = accounts[0]
		const uintTLmqrX = BigInt("823")
		const addressNjiNJCf = accounts[4]
		const addressSv1n6DV = "0x0000000000000000000000000000000000000001"
//		const boolHiUavL = await AntiBaseProtocolTSIv7mM.transfer.call(addressWYgZWBv, uintr39DJ0l, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAM8JsE3 = await AntiBaseProtocolTSIv7mM.transferFrom.call(addressSv1n6DV, addressNjiNJCf, uintTLmqrX, {from: "0x0000000000000000000000000000000000000001"});
//		const stringVoMmb0S = await AntiBaseProtocolTSIv7mM.symbol.call({from: accounts[3]});

		await expect(AntiBaseProtocolTSIv7mM.transfer.call(addressWYgZWBv, uintr39DJ0l, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolK9TUqd3 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintCbr23eA = BigInt("1354")
		const addressIqGh53 = accounts[1]
		const uintAU20pob = BigInt("1749")
		const addressGy5ZcUb = accounts[4]
		const addressHfWcM8 = accounts[5]
		const uintYrNXQUO = BigInt("1296")
		const uint8WkBSy5y = await AntiBaseProtocolK9TUqd3.decimals.call({from: accounts[2]});
//		const addressb897QU1 = await AntiBaseProtocolK9TUqd3.burnFrom.call(addressIqGh53, uintCbr23eA, {from: accounts[0]});
//		const addressANJ18hT = await AntiBaseProtocolK9TUqd3._approve.call(addressHfWcM8, addressGy5ZcUb, uintAU20pob, {from: accounts[2]});
//		const uint256JCoTRV = await AntiBaseProtocolK9TUqd3.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256xeqoNms = await AntiBaseProtocolK9TUqd3.burn.call(uintYrNXQUO, {from: accounts[2]});

		assert.equal(uint8WkBSy5y, BigInt("18"))
		await expect(AntiBaseProtocolK9TUqd3.burnFrom.call(addressIqGh53, uintCbr23eA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolcYQ26TU = await AntiBaseProtocol.new({from: accounts[3]});
		const uintdQffjHc = BigInt("261")
		const addressKKGVNT5 = accounts[0]
		const uintYqKVZtO = BigInt("1576")
		const addresssV6ijK4 = accounts[5]
		const addressBBPRsPq = accounts[5]
		const stringPDWk848 = await AntiBaseProtocolcYQ26TU.name.call({from: accounts[4]});
//		const addressYoSfBpY = await AntiBaseProtocolcYQ26TU._mint.call(addressKKGVNT5, uintdQffjHc, {from: accounts[2]});
//		const addressedV7WO = await AntiBaseProtocolcYQ26TU.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringZXzDoIH = await AntiBaseProtocolcYQ26TU.name.call({from: accounts[2]});
//		const addressxhovtXP = await AntiBaseProtocolcYQ26TU._approve.call(addressBBPRsPq, addresssV6ijK4, uintYqKVZtO, {from: accounts[0]});

		assert.equal(stringPDWk848, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolcYQ26TU._mint.call(addressKKGVNT5, uintdQffjHc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnqZiz4M = await AntiBaseProtocol.new({from: accounts[1]});
		const uintTt5F070 = BigInt("883")
		const addressl525k2J = accounts[4]
		const uintzcxZAro = BigInt("1670")
		const addresskDA9l49 = accounts[3]
		const uintpRxqMH7 = BigInt("1966")
		const addresslaXVaxe = accounts[1]
		const stringGj8Z3wp = await AntiBaseProtocolnqZiz4M.symbol.call({from: accounts[2]});
		const uint256hGDWccD = await AntiBaseProtocolnqZiz4M.totalSupply.call({from: accounts[1]});
		const booln5qVPkD = await AntiBaseProtocolnqZiz4M.transfer.call(addressl525k2J, uintTt5F070, {from: accounts[1]});
//		const addresstmZcQhq = await AntiBaseProtocolnqZiz4M._burnFrom.call(addresskDA9l49, uintzcxZAro, {from: accounts[2]});
//		const boolDTNmT9A = await AntiBaseProtocolnqZiz4M.increaseAllowance.call(addresslaXVaxe, uintpRxqMH7, {from: accounts[3]});
//		await AntiBaseProtocolnqZiz4M.renounceOwnership.call({from: accounts[4]});
//		const boolIADwrHX = await AntiBaseProtocolnqZiz4M.isOwner.call({from: accounts[1]});

		assert.equal(booln5qVPkD, true)
		assert.equal(stringGj8Z3wp, "ABASE")
		assert.equal(uint256hGDWccD, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolnqZiz4M._burnFrom.call(addresskDA9l49, uintzcxZAro, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolTSIv7mM = await AntiBaseProtocol.new({from: accounts[3]});
		const uintl13uwHl = BigInt("578")
		const stringfpSgwBt = await AntiBaseProtocolTSIv7mM.symbol.call({from: accounts[4]});
//		const uint256rUeJoSN = await AntiBaseProtocolTSIv7mM.burn.call(uintl13uwHl, {from: accounts[0]});
//		await AntiBaseProtocolTSIv7mM.requestGas.call({from: accounts[2]});
//		const stringVoMmb0S = await AntiBaseProtocolTSIv7mM.symbol.call({from: accounts[3]});

		assert.equal(stringfpSgwBt, "ABASE")
		await expect(AntiBaseProtocolTSIv7mM.burn.call(uintl13uwHl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnqZiz4M = await AntiBaseProtocol.new({from: accounts[1]});
		const uintFVMNJE = BigInt("987")
		const addressguvopn8 = "0x0000000000000000000000000000000000000001"
		const uinto1a71wr = BigInt("883")
		const addressElc9xZS = accounts[4]
		const addressl1VbjGh = accounts[4]
		const stringGj8Z3wp = await AntiBaseProtocolnqZiz4M.symbol.call({from: accounts[2]});
//		const boolcHQpMqI = await AntiBaseProtocolnqZiz4M.decreaseAllowance.call(addressguvopn8, uintFVMNJE, {from: accounts[3]});
//		const booln5qVPkD = await AntiBaseProtocolnqZiz4M.transfer.call(addressElc9xZS, uinto1a71wr, {from: accounts[1]});
//		const stringrmG8Wxt = await AntiBaseProtocolnqZiz4M.name.call({from: accounts[2]});
//		const addressSQGLK95 = await AntiBaseProtocolnqZiz4M._transferOwnership.call(addressl1VbjGh, {from: accounts[1]});
//		const boolIADwrHX = await AntiBaseProtocolnqZiz4M.isOwner.call({from: accounts[1]});

		assert.equal(stringGj8Z3wp, "ABASE")
		await expect(AntiBaseProtocolnqZiz4M.decreaseAllowance.call(addressguvopn8, uintFVMNJE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolxj5xOD = await AntiBaseProtocol.new({from: accounts[1]});
		const uintzeZDkF = BigInt("58")
		const addressnd96A9y = "0x0000000000000000000000000000000000000001"
		const addressXs4Hofc = accounts[2]
		const boolbQ25czb = await AntiBaseProtocolxj5xOD.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolqclV88x = await AntiBaseProtocolxj5xOD.approve.call(addressnd96A9y, uintzeZDkF, {from: accounts[4]});
//		const addressvU0bFmY = await AntiBaseProtocolxj5xOD.transferOwnership.call(addressXs4Hofc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbQ25czb, false)
		assert.equal(boolqclV88x, true)
		await expect(AntiBaseProtocolxj5xOD.transferOwnership.call(addressXs4Hofc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnqZiz4M = await AntiBaseProtocol.new({from: accounts[1]});
		const uintCmZYk5 = BigInt("883")
		const addressygGiGjW = accounts[4]
		const uintawEX9uL = BigInt("1670")
		const addresse2vHsyV = accounts[3]
		const addressJkwy3vg = accounts[4]
		const booln5qVPkD = await AntiBaseProtocolnqZiz4M.transfer.call(addressygGiGjW, uintCmZYk5, {from: accounts[1]});
		const boolq6gvnmr = await AntiBaseProtocolnqZiz4M.isOwner.call({from: accounts[3]});
		const addressJYnu7I1 = await AntiBaseProtocolnqZiz4M.owner.call({from: accounts[1]});
//		const addresstmZcQhq = await AntiBaseProtocolnqZiz4M._burnFrom.call(addresse2vHsyV, uintawEX9uL, {from: accounts[2]});
//		const addressSQGLK95 = await AntiBaseProtocolnqZiz4M._transferOwnership.call(addressJkwy3vg, {from: accounts[1]});
//		const boolIADwrHX = await AntiBaseProtocolnqZiz4M.isOwner.call({from: accounts[1]});

		assert.equal(addressJYnu7I1, 0x341D2E814bEA62cddeE23225de1E0E4B90d514b8)
		assert.equal(booln5qVPkD, true)
		assert.equal(boolq6gvnmr, false)
		await expect(AntiBaseProtocolnqZiz4M._burnFrom.call(addresse2vHsyV, uintawEX9uL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnqZiz4M = await AntiBaseProtocol.new({from: accounts[1]});
		const uintwKMlv5q = BigInt("506")
		const addressNtXfssn = accounts[4]
		const addressjxqzyRv = accounts[4]
		const uintfJje4bq = BigInt("890")
		const addressr2db4ae = accounts[4]
		const addressywkn41Y = accounts[4]
		const stringGj8Z3wp = await AntiBaseProtocolnqZiz4M.symbol.call({from: accounts[2]});
//		const boolyDnblTw = await AntiBaseProtocolnqZiz4M.transferFrom.call(addressjxqzyRv, addressNtXfssn, uintwKMlv5q, {from: accounts[1]});
//		const booln5qVPkD = await AntiBaseProtocolnqZiz4M.transfer.call(addressr2db4ae, uintfJje4bq, {from: accounts[1]});
//		const addressSQGLK95 = await AntiBaseProtocolnqZiz4M._transferOwnership.call(addressywkn41Y, {from: accounts[1]});
//		const boolIADwrHX = await AntiBaseProtocolnqZiz4M.isOwner.call({from: accounts[1]});

		assert.equal(stringGj8Z3wp, "ABASE")
		await expect(AntiBaseProtocolnqZiz4M.transferFrom.call(addressjxqzyRv, addressNtXfssn, uintwKMlv5q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnqZiz4M = await AntiBaseProtocol.new({from: accounts[1]});
		const uintrl92vfG = BigInt("883")
		const addressHtFS3jx = accounts[4]
		const uintPbdVFG = BigInt("299")
		const addressndE4H68 = accounts[0]
		const uintBYegcQL = BigInt("95")
		const addressOs9qRlS = accounts[1]
		const addressd7BEA5D = accounts[5]
		const stringGj8Z3wp = await AntiBaseProtocolnqZiz4M.symbol.call({from: accounts[2]});
		const booln5qVPkD = await AntiBaseProtocolnqZiz4M.transfer.call(addressHtFS3jx, uintrl92vfG, {from: accounts[1]});
		const boolmUg0SYM = await AntiBaseProtocolnqZiz4M.increaseAllowance.call(addressndE4H68, uintPbdVFG, {from: accounts[2]});
		const uint256IVeAvfG = await AntiBaseProtocolnqZiz4M.totalSupply.call({from: accounts[1]});
//		const addressVqk2pfT = await AntiBaseProtocolnqZiz4M.burnFrom.call(addressOs9qRlS, uintBYegcQL, {from: accounts[1]});
//		const addressSQGLK95 = await AntiBaseProtocolnqZiz4M._transferOwnership.call(addressd7BEA5D, {from: accounts[1]});
//		const boolIADwrHX = await AntiBaseProtocolnqZiz4M.isOwner.call({from: accounts[1]});

		assert.equal(boolmUg0SYM, true)
		assert.equal(booln5qVPkD, true)
		assert.equal(stringGj8Z3wp, "ABASE")
		assert.equal(uint256IVeAvfG, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolnqZiz4M.burnFrom.call(addressOs9qRlS, uintBYegcQL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnqZiz4M = await AntiBaseProtocol.new({from: accounts[1]});
		const addressy6uk7OQ = accounts[1]
//		await AntiBaseProtocolnqZiz4M.renounceOwnership.call({from: accounts[1]});
//		const uint8gg5pQ7 = await AntiBaseProtocolnqZiz4M.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressSQGLK95 = await AntiBaseProtocolnqZiz4M._transferOwnership.call(addressy6uk7OQ, {from: accounts[1]});

		await expect(AntiBaseProtocolnqZiz4M.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolggjuOzx = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzsaOeqF = BigInt("1488")
		const addresscNSv8nj = accounts[3]
		const addressdR74Mgk = accounts[0]
		const addressIkaqEkY = await AntiBaseProtocolggjuOzx.burnFrom.call(addresscNSv8nj, uintzsaOeqF, {from: accounts[0]});
		const addresssLL1hg = await AntiBaseProtocolggjuOzx.transferOwnership.call(addressdR74Mgk, {from: "0x0000000000000000000000000000000000000001"});
		const boolPV780Pr = await AntiBaseProtocolggjuOzx.isOwner.call({from: accounts[1]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnqZiz4M = await AntiBaseProtocol.new({from: accounts[1]});
		const uintUm5lRTY = BigInt("481")
		const uintSY6BMGR = BigInt("883")
		const addresspULelnF = "0x0000000000000000000000000000000000000000"
		const uintrMIeyB = BigInt("299")
		const addressOK42J6C = accounts[1]
		const addressEpRTh1n = accounts[6]
		const uintcSDkKoV = BigInt("1550")
		const addresstBJohys = accounts[2]
		const addressl0JpC9n = accounts[0]
		const stringGj8Z3wp = await AntiBaseProtocolnqZiz4M.symbol.call({from: accounts[2]});
		const uint256G06IZvg = await AntiBaseProtocolnqZiz4M.findRewardFee.call(uintUm5lRTY, {from: accounts[1]});
//		const booln5qVPkD = await AntiBaseProtocolnqZiz4M.transfer.call(addresspULelnF, uintSY6BMGR, {from: accounts[1]});
//		const boolmUg0SYM = await AntiBaseProtocolnqZiz4M.increaseAllowance.call(addressOK42J6C, uintrMIeyB, {from: accounts[2]});
//		const uint256IVeAvfG = await AntiBaseProtocolnqZiz4M.totalSupply.call({from: accounts[1]});
//		await AntiBaseProtocolnqZiz4M.renounceOwnership.call({from: accounts[4]});
//		const addressSQGLK95 = await AntiBaseProtocolnqZiz4M._transferOwnership.call(addressEpRTh1n, {from: accounts[1]});
//		const addressQTVMhiA = await AntiBaseProtocolnqZiz4M._approve.call(addressl0JpC9n, addresstBJohys, uintcSDkKoV, {from: accounts[4]});

		assert.equal(stringGj8Z3wp, "ABASE")
		assert.equal(uint256G06IZvg, BigInt("25"))
		await expect(AntiBaseProtocolnqZiz4M.transfer.call(addresspULelnF, uintSY6BMGR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNikUnn0 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintD06yqJx = BigInt("360")
		const addressTXGggWS = accounts[5]
		const uintQ6Xs8J = BigInt("1864")
		const addressS1g43ZS = accounts[0]
		const uinthJihEHT = BigInt("1784")
		const addressxKGF9Wr = "0x00000000000000000000000000000000000000-1"
		const uintDicSuQc = BigInt("1420")
		const addressEvKbSn4 = accounts[0]
		const boolsv567lX = await AntiBaseProtocolNikUnn0.increaseAllowance.call(addressTXGggWS, uintD06yqJx, {from: accounts[4]});
		const boolCBZYG34 = await AntiBaseProtocolNikUnn0.increaseAllowance.call(addressS1g43ZS, uintQ6Xs8J, {from: accounts[0]});
//		const booldCliBtM = await AntiBaseProtocolNikUnn0.transfer.call(addressxKGF9Wr, uinthJihEHT, {from: accounts[4]});
//		const boolNnPKV2l = await AntiBaseProtocolNikUnn0.approve.call(addressEvKbSn4, uintDicSuQc, {from: accounts[2]});
//		await AntiBaseProtocolNikUnn0.onlyOwner.call({from: accounts[4]});

		assert.equal(boolCBZYG34, true)
		assert.equal(boolsv567lX, true)
		await expect(AntiBaseProtocolNikUnn0.transfer.call(addressxKGF9Wr, uinthJihEHT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYHaeLS = await AntiBaseProtocol.new({from: accounts[4]});
		const addressZeSQRc0 = accounts[0]
		const uintcqYvT2 = BigInt("1897")
		const addressNrRYHT7 = accounts[4]
		const uintX2rssnG = BigInt("801")
		const addressOv4Zakv = accounts[4]
		const uintm4tnfel = BigInt("1816")
		const addressQae7DR = accounts[1]
		const addressb82IYRA = await AntiBaseProtocolYHaeLS.transferOwnership.call(addressZeSQRc0, {from: accounts[4]});
//		const boolKsICLv0 = await AntiBaseProtocolYHaeLS.decreaseAllowance.call(addressNrRYHT7, uintcqYvT2, {from: accounts[1]});
//		const addressDNwon9u = await AntiBaseProtocolYHaeLS._mint.call(addressOv4Zakv, uintX2rssnG, {from: accounts[4]});
//		const boolvsAHp7s = await AntiBaseProtocolYHaeLS.approve.call(addressQae7DR, uintm4tnfel, {from: accounts[4]});

		await expect(AntiBaseProtocolYHaeLS.decreaseAllowance.call(addressNrRYHT7, uintcqYvT2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnqZiz4M = await AntiBaseProtocol.new({from: accounts[1]});
		const uintOvggkGH = BigInt("152")
		const uint0WVunx = BigInt("1497")
		const uintGBLZmm0 = BigInt("604")
		const addresse0RvdHl = accounts[4]
		const address78GsV1 = accounts[1]
		const uintAvLdaeo = BigInt("1550")
		const addressqivxUyj = accounts[2]
		const addressUmQ6YJG = accounts[0]
		const stringGj8Z3wp = await AntiBaseProtocolnqZiz4M.symbol.call({from: accounts[2]});
		const uint256G06IZvg = await AntiBaseProtocolnqZiz4M.findRewardFee.call(uintOvggkGH, {from: accounts[1]});
		const uint256GyHsyk1 = await AntiBaseProtocolnqZiz4M.findBurnFee.call(uint0WVunx, {from: accounts[4]});
		const uint256IVeAvfG = await AntiBaseProtocolnqZiz4M.totalSupply.call({from: accounts[1]});
//		const boolSedIN0S = await AntiBaseProtocolnqZiz4M.transferFrom.call(address78GsV1, addresse0RvdHl, uintGBLZmm0, {from: "0x0000000000000000000000000000000000000001"});
//		await AntiBaseProtocolnqZiz4M.renounceOwnership.call({from: accounts[4]});
//		const addressQTVMhiA = await AntiBaseProtocolnqZiz4M._approve.call(addressUmQ6YJG, addressqivxUyj, uintAvLdaeo, {from: accounts[4]});

		assert.equal(stringGj8Z3wp, "ABASE")
		assert.equal(uint256G06IZvg, BigInt("10"))
		assert.equal(uint256GyHsyk1, BigInt("225"))
		assert.equal(uint256IVeAvfG, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolnqZiz4M.transferFrom.call(address78GsV1, addresse0RvdHl, uintGBLZmm0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})