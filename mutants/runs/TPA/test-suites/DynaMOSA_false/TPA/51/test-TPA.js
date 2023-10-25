const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPADqveOZV = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGREBPK = BigInt("164")
		const addressBQnwOhR = accounts[2]
		const booluMDzCh = await TPADqveOZV.increaseAllowance.call(addressBQnwOhR, uintGREBPK, {from: accounts[5]});
		await TPADqveOZV.pause.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TPA', async () => {
		const stringE1tRZQ = "g7AmrKSzVg3YtLkXwDY9sdtmSi7f12ksWng82lLOiMU7WhjcreYWlFVTumyLqa2ME8v5Pes1oUFQzAZrmQi"
		const stringXgrTjhd = "jNeyGbXTyh6ExJSXfUYpF5qdWmLtxXdNITYzxEP0FnGVq1Yv8r0SDUUAW7BETyq"
		const uinthrfJy30 = BigInt("251")
		const TPAHJdd2UC = await TPA.new(stringE1tRZQ, stringXgrTjhd, uinthrfJy30, {from: accounts[0]});
		const address9Cl0cg = accounts[2]
		const uintTnaHYZP = BigInt("499")
		const addressqEk9lYy = accounts[5]
		const uint256VoJ7ETD = await TPAHJdd2UC.balanceOf.call(address9Cl0cg, {from: accounts[1]});
		const booliIb42I = await TPAHJdd2UC.approve.call(addressqEk9lYy, uintTnaHYZP, {from: accounts[2]});
		await TPAHJdd2UC.renounceAdmin.call({from: accounts[5]});
	});

	it('test for TPA', async () => {
		const TPAAyfOeQ = await TPA.new({from: accounts[3]});
		const addressziz3IMZ = accounts[3]
		const addressL282lD1 = accounts[4]
		const uintG4f2NpI = BigInt("964")
		const addressZx49Sik = accounts[2]
		const addressimuHDS1 = accounts[3]
		const uint256jH29YoZ = await TPAAyfOeQ.allowance.call(addressL282lD1, addressziz3IMZ, {from: accounts[1]});
		const boolidb8nSB = await TPAAyfOeQ.increaseAllowance.call(addressZx49Sik, uintG4f2NpI, {from: accounts[0]});
		const boolW5xOSCN = await TPAAyfOeQ.isAdmin.call(addressimuHDS1, {from: accounts[1]});

		assert.equal(boolW5xOSCN, true)
		assert.equal(boolidb8nSB, true)
		assert.equal(uint256jH29YoZ, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAmrbhrGd = await TPA.new({from: accounts[3]});
		const uintxUgZoO = BigInt("1437")
		const uintBjrjrEW = BigInt("739")
		const addresssVRVQiX = accounts[5]
		await TPAmrbhrGd.renounceAdmin.call({from: accounts[2]});
		const boolEr8XJx3 = await TPAmrbhrGd.lock.call(addresssVRVQiX, uintBjrjrEW, uintxUgZoO, {from: accounts[1]});

		await expect(TPAmrbhrGd.renounceAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAeJTVxMk = await TPA.new({from: accounts[4]});
		const uintPYliEwk = BigInt("67")
		const addressXJFMcen = accounts[2]
		const uintQ4Ps7Sp = BigInt("369")
		const addressobc26Q = accounts[4]
		const addressg84jja4 = "0x0000000000000000000000000000000000000001"
		const addresskATB7pm = accounts[0]
		const addressvEp7ODr = accounts[0]
		const bool6Bdayk = await TPAeJTVxMk.approve.call(addressXJFMcen, uintPYliEwk, {from: accounts[1]});
		await TPAeJTVxMk.whenPaused.call({from: accounts[2]});
		const boolEMjTLEZ = await TPAeJTVxMk.approve.call(addressobc26Q, uintQ4Ps7Sp, {from: accounts[1]});
		const uint256GZy5kwB = await TPAeJTVxMk.allowance.call(addresskATB7pm, addressg84jja4, {from: accounts[2]});
		const boolrcULCz5 = await TPAeJTVxMk.isAdmin.call(addressvEp7ODr, {from: accounts[5]});
		await TPAeJTVxMk.onlyAdmin.call({from: accounts[2]});

		assert.equal(bool6Bdayk, true)
		await expect(TPAeJTVxMk.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaZ8hc6b = await TPA.new({from: accounts[3]});
		const uintEmdhFBN = BigInt("1817")
		const addressF9jTGiG = accounts[1]
		const addressGIDjgT2 = accounts[5]
		const uintGNIHrhK = BigInt("1436")
		const uintv58Z14t = BigInt("889")
		const addressECdQazL = accounts[5]
		const addressAlxAqWl = accounts[3]
		const addressaSi5CDc = "0x0000000000000000000000000000000000000001"
		const booltbYJctX = await TPAaZ8hc6b.transferFrom.call(addressGIDjgT2, addressF9jTGiG, uintEmdhFBN, {from: accounts[4]});
		const uint256n0BJIu1 = await TPAaZ8hc6b.burn.call(uintGNIHrhK, {from: accounts[5]});
		const addressW0tzBlh = await TPAaZ8hc6b.burnFrom.call(addressECdQazL, uintv58Z14t, {from: accounts[4]});
		const uint256sv4PLk2 = await TPAaZ8hc6b.allowance.call(addressaSi5CDc, addressAlxAqWl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAaZ8hc6b.transferFrom.call(addressGIDjgT2, addressF9jTGiG, uintEmdhFBN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAyfOeQ = await TPA.new({from: accounts[3]});
		const addressa3k6W5B = accounts[3]
		const addressscbhOUw = accounts[4]
		const addressfI0G24R = accounts[0]
		const uintNe4uWqr = BigInt("964")
		const addressaOVdphr = accounts[3]
		const addressr8kmGR = accounts[3]
		const uint256jH29YoZ = await TPAAyfOeQ.allowance.call(addressscbhOUw, addressa3k6W5B, {from: accounts[1]});
		const stringRg9dWmx = await TPAAyfOeQ.symbol.call({from: accounts[1]});
		const addresslnVTukl = await TPAAyfOeQ.upgradeTo.call(addressfI0G24R, {from: accounts[4]});
		const boolidb8nSB = await TPAAyfOeQ.increaseAllowance.call(addressaOVdphr, uintNe4uWqr, {from: accounts[0]});
		const boolW5xOSCN = await TPAAyfOeQ.isAdmin.call(addressr8kmGR, {from: accounts[1]});

		assert.equal(stringRg9dWmx, "TPA")
		assert.equal(uint256jH29YoZ, BigInt("0"))
		await expect(TPAAyfOeQ.upgradeTo.call(addressfI0G24R, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAyfOeQ = await TPA.new({from: accounts[3]});
		const uintkn3Jcwb = BigInt("964")
		const addressp3SDkBS = accounts[2]
		const addresszKwW8Ad = accounts[2]
		const uintLhdjX8Q = BigInt("1892")
		const addressxQkWKJH = "0x0000000000000000000000000000000000000001"
		const addressiQBWrzN = accounts[4]
		const boolidb8nSB = await TPAAyfOeQ.increaseAllowance.call(addressp3SDkBS, uintkn3Jcwb, {from: accounts[0]});
		const boolPiZJm2Q = await TPAAyfOeQ.freezeAccount.call(addresszKwW8Ad, {from: accounts[0]});
		const boolwRmIvu7 = await TPAAyfOeQ.transfer.call(addressxQkWKJH, uintLhdjX8Q, {from: accounts[3]});
		const boolW5xOSCN = await TPAAyfOeQ.isAdmin.call(addressiQBWrzN, {from: accounts[1]});

		assert.equal(boolidb8nSB, true)
		await expect(TPAAyfOeQ.freezeAccount.call(addresszKwW8Ad, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAyfOeQ = await TPA.new({from: accounts[3]});
		const addressC0vM14E = accounts[3]
		const addresse13iA8D = accounts[4]
		const uintqV5ZqYe = BigInt("964")
		const addressfcC7yDQ = accounts[2]
		const addresswwXAMe8 = accounts[3]
		const uint256jH29YoZ = await TPAAyfOeQ.allowance.call(addresse13iA8D, addressC0vM14E, {from: accounts[1]});
		const uint8Ismp0M = await TPAAyfOeQ.decimals.call({from: accounts[1]});
		const boolidb8nSB = await TPAAyfOeQ.increaseAllowance.call(addressfcC7yDQ, uintqV5ZqYe, {from: accounts[0]});
		await TPAAyfOeQ.whenNotPaused.call({from: accounts[4]});
		const boolW5xOSCN = await TPAAyfOeQ.isAdmin.call(addresswwXAMe8, {from: accounts[1]});

		assert.equal(boolidb8nSB, true)
		assert.equal(uint256jH29YoZ, BigInt("0"))
		assert.equal(uint8Ismp0M, BigInt("18"))
		await expect(TPAAyfOeQ.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaZ8hc6b = await TPA.new({from: accounts[3]});
		const uintLXv32LI = BigInt("1459")
		const uintTuY1e1z = BigInt("889")
		const addresseesPEhL = accounts[5]
		const uint256n0BJIu1 = await TPAaZ8hc6b.burn.call(uintLXv32LI, {from: accounts[5]});
		const addressW0tzBlh = await TPAaZ8hc6b.burnFrom.call(addresseesPEhL, uintTuY1e1z, {from: accounts[4]});

		await expect(TPAaZ8hc6b.burn.call(uintLXv32LI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAARpSad0 = await TPA.new({from: accounts[0]});
		const addresszZuHdXr = accounts[2]
		const uintqQgn8Pv = BigInt("626")
		const uintIiC57pc = BigInt("1576")
		const addressey0DE7V = accounts[0]
		const addressxMcY1pd = accounts[0]
		const uintoS41r8 = BigInt("1287")
		const addressoGhmDxg = accounts[2]
		const addressfQFX2JO = accounts[3]
		const uintDQHxkX = BigInt("1747")
		const addressJMprCYY = "0x0000000000000000000000000000000000000001"
		const addressFduHKeU = await TPAARpSad0.removeAdmin.call(addresszZuHdXr, {from: accounts[0]});
		const boolSI7wJyw = await TPAARpSad0.transferWithLock.call(addressey0DE7V, uintIiC57pc, uintqQgn8Pv, {from: "0x0000000000000000000000000000000000000001"});
		await TPAARpSad0.unpause.call({from: accounts[1]});
		const boolSXDuBLO = await TPAARpSad0.isAdmin.call(addressxMcY1pd, {from: accounts[1]});
		const boolH6zBgFC = await TPAARpSad0.paused.call({from: accounts[3]});
		const boolycmAy8k = await TPAARpSad0.transferFrom.call(addressfQFX2JO, addressoGhmDxg, uintoS41r8, {from: accounts[4]});
		const boolxq4mcdp = await TPAARpSad0.decreaseAllowance.call(addressJMprCYY, uintDQHxkX, {from: accounts[1]});
		await TPAARpSad0.onlyAdmin.call({from: accounts[2]});

		await expect(TPAARpSad0.removeAdmin.call(addresszZuHdXr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAOCX79Ay = await TPA.new({from: accounts[5]});
		const addressU1PBknH = accounts[5]
		const addressGG1D3Dx = accounts[0]
		const uintoIR6mwm = BigInt("1658")
		const addresscVoBpv5 = accounts[3]
		const bool8ZA6Zs = await TPAOCX79Ay.isOwner.call(addressU1PBknH, {from: accounts[2]});
		const bool2OMyXd = await TPAOCX79Ay.freezeAccount.call(addressGG1D3Dx, {from: accounts[2]});
		const boolUU6bwWy = await TPAOCX79Ay.increaseAllowance.call(addresscVoBpv5, uintoIR6mwm, {from: accounts[0]});

		assert.equal(bool8ZA6Zs, true)
		await expect(TPAOCX79Ay.freezeAccount.call(addressGG1D3Dx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAtOPGPhV = await TPA.new({from: accounts[3]});
		const address3x448R = accounts[4]
		const uint256uBETo5Q = await TPAtOPGPhV.totalSupply.call({from: accounts[5]});
		const addressx0T06RE = await TPAtOPGPhV.transferOwnership.call(address3x448R, {from: "0x0000000000000000000000000000000000000001"});
		await TPAtOPGPhV.onlyAdmin.call({from: accounts[4]});

		assert.equal(uint256uBETo5Q, BigInt("10000000000000000000000000000"))
		await expect(TPAtOPGPhV.transferOwnership.call(address3x448R, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaZ8hc6b = await TPA.new({from: accounts[3]});
		const uintFaTi5cv = BigInt("1414")
		const addressqa9bUs5 = accounts[2]
		const uintjX56NiN = BigInt("1817")
		const addressVo3llBE = accounts[1]
		const addressp55fNF1 = accounts[6]
		const uintESmuat6 = BigInt("1527")
		const addressCqn4Tbz = accounts[4]
		const uintGyYQ67C = BigInt("1443")
		const uintkKAG0W0 = BigInt("1883")
		const address3XhsI9 = accounts[0]
		const uintjZUMeFR = BigInt("889")
		const addressP7dfY0p = accounts[5]
		const booltv0Ecs2 = await TPAaZ8hc6b.transfer.call(addressqa9bUs5, uintFaTi5cv, {from: "0x0000000000000000000000000000000000000001"});
		const booltbYJctX = await TPAaZ8hc6b.transferFrom.call(addressp55fNF1, addressVo3llBE, uintjX56NiN, {from: accounts[4]});
		const boolbl3cyg9 = await TPAaZ8hc6b.increaseAllowance.call(addressCqn4Tbz, uintESmuat6, {from: accounts[2]});
		const uint256n0BJIu1 = await TPAaZ8hc6b.burn.call(uintGyYQ67C, {from: accounts[5]});
		const boolrmdH38 = await TPAaZ8hc6b.unlock.call(address3XhsI9, uintkKAG0W0, {from: accounts[3]});
		const addressW0tzBlh = await TPAaZ8hc6b.burnFrom.call(addressP7dfY0p, uintjZUMeFR, {from: accounts[4]});

		await expect(TPAaZ8hc6b.transfer.call(addressqa9bUs5, uintFaTi5cv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaZ8hc6b = await TPA.new({from: accounts[3]});
		const uintx4zimTa = BigInt("861")
		const addressSUlQEZ3 = accounts[6]
		const addressW0tzBlh = await TPAaZ8hc6b.burnFrom.call(addressSUlQEZ3, uintx4zimTa, {from: accounts[4]});

		await expect(TPAaZ8hc6b.burnFrom.call(addressSUlQEZ3, uintx4zimTa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANPXLRIo = await TPA.new({from: accounts[4]});
		const address6sTh6d = accounts[0]
		const uintaaVCkHe = BigInt("1140")
		const uintWFF1O4R = BigInt("405")
		const addressHd8Xhkr = "0x0000000000000000000000000000000000000001"
		const boolJQYdJzq = await TPANPXLRIo.isAdmin.call(address6sTh6d, {from: accounts[1]});
		const stringIy7rPI = await TPANPXLRIo.name.call({from: accounts[0]});
		const bool7RDG3F = await TPANPXLRIo.lock.call(addressHd8Xhkr, uintWFF1O4R, uintaaVCkHe, {from: accounts[1]});

		assert.equal(boolJQYdJzq, false)
		assert.equal(stringIy7rPI, "TPA")
		await expect(TPANPXLRIo.lock.call(addressHd8Xhkr, uintWFF1O4R, uintaaVCkHe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAKm2ORkK = await TPA.new({from: accounts[1]});
		const addresscAjmkoH = accounts[1]
		const addressHi9gPSe = accounts[5]
		const uintD9uNgKi = BigInt("1270")
		const addressS149CNg = accounts[2]
		const uintzorfCKt = BigInt("220")
		const addressrmbXurp = accounts[0]
		const uint256k0gMuIb = await TPAKm2ORkK.balanceOf.call(addresscAjmkoH, {from: accounts[0]});
		const boolOh2lvcE = await TPAKm2ORkK.freezeAccount.call(addressHi9gPSe, {from: accounts[5]});
		const boolqBnv3Hs = await TPAKm2ORkK.unlock.call(addressS149CNg, uintD9uNgKi, {from: accounts[0]});
		const boolw1RO2lV = await TPAKm2ORkK.approve.call(addressrmbXurp, uintzorfCKt, {from: accounts[1]});
		await TPAKm2ORkK.renounceAdmin.call({from: accounts[0]});
		const stringK4twpYK = await TPAKm2ORkK.name.call({from: accounts[5]});

		assert.equal(uint256k0gMuIb, BigInt("10000000000000000000000000000"))
		await expect(TPAKm2ORkK.freezeAccount.call(addressHi9gPSe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaZ8hc6b = await TPA.new({from: accounts[3]});
		const addresspphooCQ = accounts[1]
		const uintqbkHhsP = BigInt("1817")
		const addressTJ6SdU2 = accounts[1]
		const addressM3s1YPs = accounts[5]
		const addressdo53YVG = await TPAaZ8hc6b.addAdmin.call(addresspphooCQ, {from: accounts[3]});
		const booltbYJctX = await TPAaZ8hc6b.transferFrom.call(addressM3s1YPs, addressTJ6SdU2, uintqbkHhsP, {from: accounts[4]});

		await expect(TPAaZ8hc6b.transferFrom.call(addressM3s1YPs, addressTJ6SdU2, uintqbkHhsP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAKm2ORkK = await TPA.new({from: accounts[1]});
		const addressCV4HPa = accounts[1]
		const uinttMGY8XZ = BigInt("1199")
		const uintDjcX3T2 = BigInt("420")
		const addressnbkHGL4 = accounts[3]
		const addressSJ0c2zT = accounts[7]
		const address8KGdL8 = "0x0000000000000000000000000000000000000001"
		const uintK04wndu = BigInt("392")
		const addressYGEajPz = accounts[4]
		const uintTc5NRS2 = BigInt("220")
		const addressf8l8QhF = accounts[0]
		const uint256k0gMuIb = await TPAKm2ORkK.balanceOf.call(addressCV4HPa, {from: accounts[0]});
		const boolXE3Rc8O = await TPAKm2ORkK.lock.call(addressnbkHGL4, uintDjcX3T2, uinttMGY8XZ, {from: accounts[1]});
		const boolOh2lvcE = await TPAKm2ORkK.freezeAccount.call(addressSJ0c2zT, {from: accounts[5]});
		const boolntEQSYq = await TPAKm2ORkK.freezeAccount.call(address8KGdL8, {from: accounts[1]});
		const stringb7htE47 = await TPAKm2ORkK.symbol.call({from: accounts[0]});
		const boolzTKlpuF = await TPAKm2ORkK.approve.call(addressYGEajPz, uintK04wndu, {from: accounts[4]});
		const boolw1RO2lV = await TPAKm2ORkK.approve.call(addressf8l8QhF, uintTc5NRS2, {from: accounts[1]});

		assert.equal(uint256k0gMuIb, BigInt("10000000000000000000000000000"))
		await expect(TPAKm2ORkK.lock.call(addressnbkHGL4, uintDjcX3T2, uinttMGY8XZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaZ8hc6b = await TPA.new({from: accounts[3]});
		const uintMlWLIOR = BigInt("979")
		const uintHdZUQKY = BigInt("810")
		const addressARex6ZB = accounts[4]
		const uintUuiA8fI = BigInt("1414")
		const addressuvzzcbA = accounts[2]
		const uintx5qfE8k = BigInt("1817")
		const addressna6fnvX = accounts[1]
		const addressMyldogy = accounts[6]
		const addressEbIZKE2 = accounts[4]
		const uintgUccFB0 = BigInt("1553")
		const addresswXPn80O = accounts[4]
		const uintWfZICWK = BigInt("1883")
		const addressVwFFgEZ = accounts[0]
		const uintRhlr8q8 = BigInt("889")
		const addressYCipLng = accounts[5]
		const boolKEGCf5Y = await TPAaZ8hc6b.transferWithLock.call(addressARex6ZB, uintHdZUQKY, uintMlWLIOR, {from: accounts[3]});
		const booltv0Ecs2 = await TPAaZ8hc6b.transfer.call(addressuvzzcbA, uintUuiA8fI, {from: "0x0000000000000000000000000000000000000001"});
		const booltbYJctX = await TPAaZ8hc6b.transferFrom.call(addressMyldogy, addressna6fnvX, uintx5qfE8k, {from: accounts[4]});
		const boolrD6EkDR = await TPAaZ8hc6b.unfreezeAccount.call(addressEbIZKE2, {from: accounts[2]});
		const boolbl3cyg9 = await TPAaZ8hc6b.increaseAllowance.call(addresswXPn80O, uintgUccFB0, {from: accounts[2]});
		const boolrmdH38 = await TPAaZ8hc6b.unlock.call(addressVwFFgEZ, uintWfZICWK, {from: accounts[3]});
		const addressW0tzBlh = await TPAaZ8hc6b.burnFrom.call(addressYCipLng, uintRhlr8q8, {from: accounts[4]});

		assert.equal(boolKEGCf5Y, true)
		await expect(TPAaZ8hc6b.transfer.call(addressuvzzcbA, uintUuiA8fI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAKm2ORkK = await TPA.new({from: accounts[1]});
		const uintLeH4486 = BigInt("223")
		const addressYrzqa7a = accounts[1]
		const uintgmU9GH = BigInt("944")
		const addressTTCiFEx = accounts[2]
		const boolw1RO2lV = await TPAKm2ORkK.approve.call(addressYrzqa7a, uintLeH4486, {from: accounts[1]});
		const boolJfny0cw = await TPAKm2ORkK.decreaseAllowance.call(addressTTCiFEx, uintgmU9GH, {from: accounts[4]});

		assert.equal(boolw1RO2lV, true)
		await expect(TPAKm2ORkK.decreaseAllowance.call(addressTTCiFEx, uintgmU9GH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaZ8hc6b = await TPA.new({from: accounts[3]});
		const uintZxUuqf8 = BigInt("1817")
		const addressxfE9AQ4 = accounts[1]
		const addressDaj5V3 = accounts[6]
		const boolukv8BGW = await TPAaZ8hc6b.paused.call({from: accounts[0]});
		const booltbYJctX = await TPAaZ8hc6b.transferFrom.call(addressDaj5V3, addressxfE9AQ4, uintZxUuqf8, {from: accounts[4]});

		assert.equal(boolukv8BGW, false)
		await expect(TPAaZ8hc6b.transferFrom.call(addressDaj5V3, addressxfE9AQ4, uintZxUuqf8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaZ8hc6b = await TPA.new({from: accounts[3]});
		const addressIPkmDZW = "0x0000000000000000000000000000000000000001"
		const uintv9XRqh6 = BigInt("1491")
		const addresswrdEufM = accounts[1]
		const boolI3fzY07 = await TPAaZ8hc6b.unfreezeAccount.call(addressIPkmDZW, {from: accounts[3]});
		const boolzueTjFL = await TPAaZ8hc6b.transfer.call(addresswrdEufM, uintv9XRqh6, {from: accounts[2]});

		await expect(TPAaZ8hc6b.unfreezeAccount.call(addressIPkmDZW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAaZ8hc6b = await TPA.new({from: accounts[3]});
		const addressmh6YDHn = accounts[2]
		const addressoi8qUDF = accounts[5]
		const addresslU0rTmD = "0x0000000000000000000000000000000000000001"
		const uintwQZsv19 = BigInt("1503")
		const addressvKiVuVi = accounts[1]
		const boolFEuwnBA = await TPAaZ8hc6b.isOwner.call(addressmh6YDHn, {from: accounts[1]});
		const addressrKTwz38 = await TPAaZ8hc6b.transferOwnership.call(addressoi8qUDF, {from: accounts[3]});
		const boolp9Y52rh = await TPAaZ8hc6b.freezeAccount.call(addresslU0rTmD, {from: accounts[4]});
		const boolzueTjFL = await TPAaZ8hc6b.transfer.call(addressvKiVuVi, uintwQZsv19, {from: accounts[2]});

		assert.equal(boolFEuwnBA, false)
		await expect(TPAaZ8hc6b.freezeAccount.call(addresslU0rTmD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})