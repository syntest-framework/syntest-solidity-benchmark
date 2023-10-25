const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolxYl6pKI = await AntiBaseProtocol.new({from: accounts[3]});
		const addressl0N1uV = accounts[1]
		const addressQcx9YV = accounts[3]
		const uintXAoPjMN = BigInt("542")
		const addressmRXC8Ss = accounts[4]
		const addressandjzb8 = accounts[0]
		const uint8r8jc2hk = await AntiBaseProtocolxYl6pKI.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256HfwS9Qf = await AntiBaseProtocolxYl6pKI.allowance.call(addressQcx9YV, addressl0N1uV, {from: accounts[2]});
		const boolpnOFi3G = await AntiBaseProtocolxYl6pKI.increaseAllowance.call(addressmRXC8Ss, uintXAoPjMN, {from: "0x0000000000000000000000000000000000000001"});
//		const addressMzfhFmk = await AntiBaseProtocolxYl6pKI._transferOwnership.call(addressandjzb8, {from: accounts[1]});

		assert.equal(boolpnOFi3G, true)
		assert.equal(uint256HfwS9Qf, BigInt("0"))
		assert.equal(uint8r8jc2hk, BigInt("18"))
		await expect(AntiBaseProtocolxYl6pKI._transferOwnership.call(addressandjzb8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolIBJ07Y6 = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjyOJL1d = BigInt("1455")
		const addressIVaSJkl = accounts[1]
		await AntiBaseProtocolIBJ07Y6.renounceOwnership.call({from: accounts[4]});
		await AntiBaseProtocolIBJ07Y6.renounceOwnership.call({from: accounts[1]});
		const uint256YliO25d = await AntiBaseProtocolIBJ07Y6.totalSupply.call({from: accounts[3]});
		const addresswHT5dF9 = await AntiBaseProtocolIBJ07Y6._burn.call(addressIVaSJkl, uintjyOJL1d, {from: accounts[3]});
	});

	it('test for AntiBaseProtocol', async () => {
		const stringsleKDyN = "dLl6rRvj9NlB5KYGktuOZDNe8lO6t2ebloMUMW2laAamlsOukyhyob5D5zqdmnFGzjgVu50HBkQOV5"
		const stringO7TRNpz = "i2O0Cu26dNEU4jAMPH6aP3PbBwQ4JW4amk5iKAlya7oKQWE3pOppwZIVh6CPLAVzLOHUqk5XthNL"
		const uintxSpLUF = BigInt("89")
		const AntiBaseProtocolE6F9yau = await AntiBaseProtocol.new(stringsleKDyN, stringO7TRNpz, uintxSpLUF, {from: accounts[1]});
		const addressOpzhXSS = accounts[4]
		const addressq96N925 = accounts[1]
		const uintRBc1si = BigInt("72")
		const addressbis9f8M = accounts[0]
		const addressSqW1pk0 = accounts[1]
		const uint256t8niL9N = await AntiBaseProtocolE6F9yau.allowance.call(addressq96N925, addressOpzhXSS, {from: accounts[4]});
		const stringyFPPafI = await AntiBaseProtocolE6F9yau.symbol.call({from: accounts[1]});
		const addresstAeR6GV = await AntiBaseProtocolE6F9yau._approve.call(addressSqW1pk0, addressbis9f8M, uintRBc1si, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolLvOaAFR = await AntiBaseProtocol.new({from: accounts[1]});
		const addresscGC864P = accounts[4]
		const addressZwUvx9v = accounts[0]
		const uintUjlJDCq = BigInt("1522")
		const addresss8WHy41 = accounts[2]
		const addresso1HQowM = accounts[5]
		const uintGZXM31t = BigInt("1113")
		const addressgO81CxH = accounts[1]
		const addresseMiRW0E = accounts[1]
		const uintn10Esed = BigInt("1008")
		const addressoI1RY95 = accounts[0]
		const uint256OD8DnQt = await AntiBaseProtocolLvOaAFR.allowance.call(addressZwUvx9v, addresscGC864P, {from: accounts[4]});
//		const boolE9ZMZSR = await AntiBaseProtocolLvOaAFR.transferFrom.call(addresso1HQowM, addresss8WHy41, uintUjlJDCq, {from: accounts[0]});
//		const booloDqL0x = await AntiBaseProtocolLvOaAFR.transferFrom.call(addresseMiRW0E, addressgO81CxH, uintGZXM31t, {from: accounts[4]});
//		const addressKppR2Hq = await AntiBaseProtocolLvOaAFR._burnFrom.call(addressoI1RY95, uintn10Esed, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256OD8DnQt, BigInt("0"))
		await expect(AntiBaseProtocolLvOaAFR.transferFrom.call(addresso1HQowM, addresss8WHy41, uintUjlJDCq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolu62WuTX = await AntiBaseProtocol.new({from: accounts[5]});
		const uintGhfQjeH = BigInt("1074")
		const addressM94rccp = accounts[3]
		const addressZjtzRJc = accounts[3]
		const addressSv495xm = accounts[0]
		const uintry1CIjr = BigInt("1504")
		const addressCGNTgD = "0x0000000000000000000000000000000000000001"
		const boolUTQnYpn = await AntiBaseProtocolu62WuTX.approve.call(addressM94rccp, uintGhfQjeH, {from: accounts[3]});
		const uint256hAnXHCr = await AntiBaseProtocolu62WuTX.allowance.call(addressSv495xm, addressZjtzRJc, {from: accounts[4]});
//		const addresso1SAQzy = await AntiBaseProtocolu62WuTX.burnFrom.call(addressCGNTgD, uintry1CIjr, {from: accounts[2]});
//		const stringG64lsy = await AntiBaseProtocolu62WuTX.name.call({from: accounts[2]});
//		const addressMn1KhFh = await AntiBaseProtocolu62WuTX.owner.call({from: accounts[3]});

		assert.equal(boolUTQnYpn, true)
		assert.equal(uint256hAnXHCr, BigInt("0"))
		await expect(AntiBaseProtocolu62WuTX.burnFrom.call(addressCGNTgD, uintry1CIjr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoldNxjPdL = await AntiBaseProtocol.new({from: accounts[5]});
		const uintPm3xr3 = BigInt("260")
		const uintGFE08An = BigInt("845")
		const uintXWWBHOw = BigInt("1221")
		const addressxNkE6K = accounts[5]
		const addressYJr0NRn = accounts[4]
		const uintPttF4Jo = BigInt("891")
		const addressAZOr10p = accounts[2]
		const boolHP3Rjvy = await AntiBaseProtocoldNxjPdL.isOwner.call({from: accounts[3]});
//		const uint256qwsno9Q = await AntiBaseProtocoldNxjPdL.burn.call(uintPm3xr3, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256MLSl1dF = await AntiBaseProtocoldNxjPdL.findRewardFee.call(uintGFE08An, {from: accounts[4]});
//		const addressvQZWy0G = await AntiBaseProtocoldNxjPdL._approve.call(addressYJr0NRn, addressxNkE6K, uintXWWBHOw, {from: accounts[0]});
//		const addressGRtC6qs = await AntiBaseProtocoldNxjPdL._burn.call(addressAZOr10p, uintPttF4Jo, {from: accounts[0]});

		assert.equal(boolHP3Rjvy, false)
		await expect(AntiBaseProtocoldNxjPdL.burn.call(uintPm3xr3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoluBdG5f = await AntiBaseProtocol.new({from: accounts[4]});
		const addressN8T66Bj = accounts[5]
		const uint8wTMSJqz = await AntiBaseProtocoluBdG5f.decimals.call({from: accounts[4]});
		const stringEObwl0u = await AntiBaseProtocoluBdG5f.name.call({from: accounts[3]});
//		const addressh4C7gMW = await AntiBaseProtocoluBdG5f._transferOwnership.call(addressN8T66Bj, {from: accounts[5]});

		assert.equal(stringEObwl0u, "https://t.me/antibaseprotocol")
		assert.equal(uint8wTMSJqz, BigInt("18"))
		await expect(AntiBaseProtocoluBdG5f._transferOwnership.call(addressN8T66Bj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoltQzxmZ = await AntiBaseProtocol.new({from: accounts[2]});
		const addressr9FSM7Q = accounts[2]
		const addressmZN7H88 = accounts[3]
		const uintxrRJiEc = BigInt("1404")
//		await AntiBaseProtocoltQzxmZ.renounceOwnership.call({from: accounts[3]});
//		const uint256D7E5HhQ = await AntiBaseProtocoltQzxmZ.allowance.call(addressmZN7H88, addressr9FSM7Q, {from: accounts[1]});
//		const uint256JmX5Go = await AntiBaseProtocoltQzxmZ.findRewardFee.call(uintxrRJiEc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocoltQzxmZ.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoluBdG5f = await AntiBaseProtocol.new({from: accounts[4]});
		const addressTEO7g5z = accounts[5]
		const addressu1lP9xb = await AntiBaseProtocoluBdG5f.owner.call({from: accounts[3]});
		const uint8wTMSJqz = await AntiBaseProtocoluBdG5f.decimals.call({from: accounts[4]});
		const stringEObwl0u = await AntiBaseProtocoluBdG5f.name.call({from: accounts[3]});
//		const addressh4C7gMW = await AntiBaseProtocoluBdG5f._transferOwnership.call(addressTEO7g5z, {from: accounts[5]});

		assert.equal(addressu1lP9xb, 0x90CdaeA631EFe1D6c62d97Ae8f2c6EecB3fCFb6A)
		assert.equal(stringEObwl0u, "https://t.me/antibaseprotocol")
		assert.equal(uint8wTMSJqz, BigInt("18"))
		await expect(AntiBaseProtocoluBdG5f._transferOwnership.call(addressTEO7g5z, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoluBdG5f = await AntiBaseProtocol.new({from: accounts[4]});
		const uintK6j5tUj = BigInt("241")
		const addresscxWqDCw = accounts[3]
		const addressOmDhECt = accounts[5]
		const uint8wTMSJqz = await AntiBaseProtocoluBdG5f.decimals.call({from: accounts[4]});
		const stringEObwl0u = await AntiBaseProtocoluBdG5f.name.call({from: accounts[3]});
//		const boolX0CRaei = await AntiBaseProtocoluBdG5f.decreaseAllowance.call(addresscxWqDCw, uintK6j5tUj, {from: "0x0000000000000000000000000000000000000001"});
//		const addressh4C7gMW = await AntiBaseProtocoluBdG5f._transferOwnership.call(addressOmDhECt, {from: accounts[5]});

		assert.equal(stringEObwl0u, "https://t.me/antibaseprotocol")
		assert.equal(uint8wTMSJqz, BigInt("18"))
		await expect(AntiBaseProtocoluBdG5f.decreaseAllowance.call(addresscxWqDCw, uintK6j5tUj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolcdZPIDw = await AntiBaseProtocol.new({from: accounts[2]});
		const uintxfZFDSs = BigInt("983")
		const addressNNgIE4A = accounts[3]
		const uint256kBgjXm7 = await AntiBaseProtocolcdZPIDw.totalSupply.call({from: accounts[5]});
//		const addressQf1v9d = await AntiBaseProtocolcdZPIDw._burn.call(addressNNgIE4A, uintxfZFDSs, {from: accounts[3]});
//		await AntiBaseProtocolcdZPIDw.onlyOwner.call({from: accounts[0]});

		assert.equal(uint256kBgjXm7, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolcdZPIDw._burn.call(addressNNgIE4A, uintxfZFDSs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoluBdG5f = await AntiBaseProtocol.new({from: accounts[4]});
		const uintQvpWbsn = BigInt("1379")
		const addressidZ3zf = accounts[6]
		const stringEObwl0u = await AntiBaseProtocoluBdG5f.name.call({from: accounts[3]});
		const uint256Hc616sg = await AntiBaseProtocoluBdG5f.findRewardFee.call(uintQvpWbsn, {from: accounts[0]});
//		const addressh4C7gMW = await AntiBaseProtocoluBdG5f._transferOwnership.call(addressidZ3zf, {from: accounts[5]});

		assert.equal(stringEObwl0u, "https://t.me/antibaseprotocol")
		assert.equal(uint256Hc616sg, BigInt("70"))
		await expect(AntiBaseProtocoluBdG5f._transferOwnership.call(addressidZ3zf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoluBdG5f = await AntiBaseProtocol.new({from: accounts[4]});
		const uintSo4BbqE = BigInt("1258")
		const addresswWZaCO = accounts[3]
		const uintN81QG5s = BigInt("1379")
		const addresskQZbYhi = accounts[7]
		const stringEObwl0u = await AntiBaseProtocoluBdG5f.name.call({from: accounts[3]});
//		const boolczeffWl = await AntiBaseProtocoluBdG5f.transfer.call(addresswWZaCO, uintSo4BbqE, {from: accounts[2]});
//		const uint256Hc616sg = await AntiBaseProtocoluBdG5f.findRewardFee.call(uintN81QG5s, {from: accounts[0]});
//		const addressh4C7gMW = await AntiBaseProtocoluBdG5f._transferOwnership.call(addresskQZbYhi, {from: accounts[5]});

		assert.equal(stringEObwl0u, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocoluBdG5f.transfer.call(addresswWZaCO, uintSo4BbqE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoluBdG5f = await AntiBaseProtocol.new({from: accounts[4]});
		const uintzBnQMnP = BigInt("1781")
		const stringyBJpDWy = await AntiBaseProtocoluBdG5f.symbol.call({from: accounts[2]});
		const uint256YTllBf1 = await AntiBaseProtocoluBdG5f.findBurnFee.call(uintzBnQMnP, {from: accounts[0]});
		const stringEObwl0u = await AntiBaseProtocoluBdG5f.name.call({from: accounts[3]});

		assert.equal(stringEObwl0u, "https://t.me/antibaseprotocol")
		assert.equal(stringyBJpDWy, "ABASE")
		assert.equal(uint256YTllBf1, BigInt("270"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolrVEq4qa = await AntiBaseProtocol.new({from: accounts[4]});
		const uintM1ZdXSj = BigInt("1366")
		const addressJiSUcQS = accounts[5]
		const addresskm98say = accounts[2]
		const booliFm5JfF = await AntiBaseProtocolrVEq4qa.increaseAllowance.call(addressJiSUcQS, uintM1ZdXSj, {from: accounts[2]});
		const uint256bQb7nkV = await AntiBaseProtocolrVEq4qa.balanceOf.call(addresskm98say, {from: accounts[4]});

		assert.equal(booliFm5JfF, true)
		assert.equal(uint256bQb7nkV, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoluBdG5f = await AntiBaseProtocol.new({from: accounts[4]});
//		await AntiBaseProtocoluBdG5f.renounceOwnership.call({from: accounts[4]});
//		const stringEObwl0u = await AntiBaseProtocoluBdG5f.name.call({from: accounts[3]});

		await expect(AntiBaseProtocoluBdG5f.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoluBdG5f = await AntiBaseProtocol.new({from: accounts[4]});
		const uintbNfCgVK = BigInt("2032")
		const addressLbDLa4 = accounts[0]
		const uintNiXQ4Tt = BigInt("763")
		const boolKa3ECcV = await AntiBaseProtocoluBdG5f.transfer.call(addressLbDLa4, uintbNfCgVK, {from: accounts[4]});
		const uint256SZ2UH1Y = await AntiBaseProtocoluBdG5f.findRewardFee.call(uintNiXQ4Tt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKa3ECcV, true)
		assert.equal(uint256SZ2UH1Y, BigInt("40"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolE87j4g3 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintyc6TEbK = BigInt("323")
		const uintw4qcjfs = BigInt("1441")
		const addressas9q5Hx = accounts[4]
		const uint256JNNmG7P = await AntiBaseProtocolE87j4g3.findBurnFee.call(uintyc6TEbK, {from: "0x0000000000000000000000000000000000000001"});
//		const addressRhuiHyA = await AntiBaseProtocolE87j4g3.burnFrom.call(addressas9q5Hx, uintw4qcjfs, {from: accounts[3]});
//		const uint8dNGNeSf = await AntiBaseProtocolE87j4g3.decimals.call({from: accounts[4]});

		assert.equal(uint256JNNmG7P, BigInt("60"))
		await expect(AntiBaseProtocolE87j4g3.burnFrom.call(addressas9q5Hx, uintw4qcjfs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoluBdG5f = await AntiBaseProtocol.new({from: accounts[4]});
		const uintndbv2LE = BigInt("0")
		const uint256dEboOm1 = await AntiBaseProtocoluBdG5f.findRewardFee.call(uintndbv2LE, {from: accounts[2]});

		assert.equal(uint256dEboOm1, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoluBdG5f = await AntiBaseProtocol.new({from: accounts[4]});
		const addressYbMWSRv = accounts[0]
		const uintG2QjSWA = BigInt("635")
		const addressENmlWfB = accounts[2]
		const addressXTVOCrR = accounts[4]
		const addressGmUFBcv = accounts[2]
		const addressNZfR6z = accounts[4]
		const uint256SWHu9Ow = await AntiBaseProtocoluBdG5f.balanceOf.call(addressYbMWSRv, {from: accounts[3]});
//		const boolO78MvTm = await AntiBaseProtocoluBdG5f.transferFrom.call(addressXTVOCrR, addressENmlWfB, uintG2QjSWA, {from: accounts[1]});
//		const uint256lKPz1T = await AntiBaseProtocoluBdG5f.allowance.call(addressNZfR6z, addressGmUFBcv, {from: accounts[1]});
//		const stringEObwl0u = await AntiBaseProtocoluBdG5f.name.call({from: accounts[3]});

		assert.equal(uint256SWHu9Ow, BigInt("0"))
		await expect(AntiBaseProtocoluBdG5f.transferFrom.call(addressXTVOCrR, addressENmlWfB, uintG2QjSWA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoluBdG5f = await AntiBaseProtocol.new({from: accounts[4]});
		const addressgj68qad = accounts[3]
		const stringEObwl0u = await AntiBaseProtocoluBdG5f.name.call({from: accounts[3]});
		const addressiJUOcoZ = await AntiBaseProtocoluBdG5f.transferOwnership.call(addressgj68qad, {from: accounts[4]});

		assert.equal(stringEObwl0u, "https://t.me/antibaseprotocol")
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoluBdG5f = await AntiBaseProtocol.new({from: accounts[4]});
		const uintNFxETU = BigInt("6")
		const addresssQT8nEF = accounts[0]
		const addressJdJ2vZn = accounts[4]
		const uinttI4QuE = BigInt("955")
		const addressY5S5BeF = accounts[5]
		const addresseme2wi = accounts[4]
		const stringEObwl0u = await AntiBaseProtocoluBdG5f.name.call({from: accounts[3]});
//		const boolyfaNk90 = await AntiBaseProtocoluBdG5f.transferFrom.call(addressJdJ2vZn, addresssQT8nEF, uintNFxETU, {from: accounts[0]});
//		const boolzprXVmg = await AntiBaseProtocoluBdG5f.transferFrom.call(addresseme2wi, addressY5S5BeF, uinttI4QuE, {from: accounts[1]});

		assert.equal(stringEObwl0u, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocoluBdG5f.transferFrom.call(addressJdJ2vZn, addresssQT8nEF, uintNFxETU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})