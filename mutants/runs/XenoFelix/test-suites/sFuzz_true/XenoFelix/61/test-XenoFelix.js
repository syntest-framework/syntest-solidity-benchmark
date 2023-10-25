const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringNMFBADd = "1jmqWtjnxCA2MCjmuG5xWD5GQKzsb"
		const stringjCqqcgh = "531GIwiXmw"
		const uintG0yS8ru = BigInt("59")
		const XenoFelixL2KzLL = await XenoFelix.new(stringNMFBADd, stringjCqqcgh, uintG0yS8ru, {from: "0x0000000000000000000000000000000000000001"});
		const uintILKb4C2 = BigInt("694")
		const addressJlf4cjO = accounts[2]
		const uintnxRV4fZ = BigInt("828")
		const addressC0q5f7d = accounts[2]
		const uintsLPu5tt = BigInt("1387")
		const addressCEPTtd6 = accounts[5]
		const uintfpA2hjk = BigInt("51")
		const addressgwNPK6i = accounts[3]
		const uint256GWxagMk = await XenoFelixL2KzLL.burn.call(uintILKb4C2, {from: accounts[2]});
		const addressujbfqEI = await XenoFelixL2KzLL.notFrozen.call(addressJlf4cjO, {from: accounts[4]});
		const boolOzkzba = await XenoFelixL2KzLL.transfer.call(addressC0q5f7d, uintnxRV4fZ, {from: accounts[1]});
		const boolkvNm3h8 = await XenoFelixL2KzLL.decreaseAllowance.call(addressCEPTtd6, uintsLPu5tt, {from: accounts[0]});
		const boolrZFhsEf = await XenoFelixL2KzLL.transfer.call(addressgwNPK6i, uintfpA2hjk, {from: accounts[3]});
		await XenoFelixL2KzLL.onlyPauser.call({from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixaEvVLeo = await XenoFelix.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZZowI0a = BigInt("385")
		const addressuTHqqKx = accounts[0]
		const addressZcXwT0F = accounts[4]
		const addressTodYzxw = "0x0000000000000000000000000000000000000001"
		const uinte6lasZB = BigInt("209")
		const addressnf352ZG = accounts[1]
		const uintchpHSD5 = BigInt("1419")
		const addressogRqZmI = accounts[4]
		const booltxxlAn = await XenoFelixaEvVLeo.burnOwner.call(addressuTHqqKx, uintZZowI0a, {from: accounts[2]});
		const boolI0pMc5g = await XenoFelixaEvVLeo.unfreezeAccount.call(addressZcXwT0F, {from: accounts[2]});
		const boolHzIKbI1 = await XenoFelixaEvVLeo.isPauser.call(addressTodYzxw, {from: accounts[4]});
		const uint8aFlyai = await XenoFelixaEvVLeo.decimals.call({from: accounts[0]});
		const boolVWDWXBL = await XenoFelixaEvVLeo.transfer.call(addressnf352ZG, uinte6lasZB, {from: accounts[4]});
		const boole1LtXkf = await XenoFelixaEvVLeo.unlock.call(addressogRqZmI, uintchpHSD5, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringaHpo4oC = "2yV7e2nCL3R5Uwk"
		const stringtRs6soC = "w5arNdxNopT9Cj3SH7gYyhhTUmGNBYimGuRnadQyyWEvy4yLfaLOhbsVmi9VMJGWRQIgNji"
		const uintlmCJF8e = BigInt("173")
		const XenoFelixT4zn5wn = await XenoFelix.new(stringaHpo4oC, stringtRs6soC, uintlmCJF8e, {from: accounts[2]});
		const addressje7wkXf = accounts[0]
		const addressB2FS6Yq = "0x0000000000000000000000000000000000000001"
		const addressC6MyjRg = accounts[3]
		const addressxKNMlPw = await XenoFelixT4zn5wn.transferOwnership.call(addressje7wkXf, {from: accounts[1]});
		const uint2564hIYCP = await XenoFelixT4zn5wn.totalSupply.call({from: accounts[1]});
		const uint256Xuukeos = await XenoFelixT4zn5wn.allowance.call(addressC6MyjRg, addressB2FS6Yq, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintfTLwIVK = BigInt("776")
		const uinttL0G3Cj = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintfTLwIVK, uinttL0G3Cj, {from: accounts[0]});
		const uintlk5Q5D2 = BigInt("250")
		const addressEQ0YpqI = accounts[4]
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});
		const boolNsSRME3 = await XenoFelixnAZ2rR1.burnOwner.call(addressEQ0YpqI, uintlk5Q5D2, {from: accounts[1]});

		assert.equal(stringaAWNp2n, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
		await expect(XenoFelixnAZ2rR1.burnOwner.call(addressEQ0YpqI, uintlk5Q5D2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringP64QKPn = "lqfLqIJv2UcKbM8EUHoW9zFrOE9JQQm6pta8IeAtejCUYLCdFWrUBve6NmW"
		const stringbCD29w = "HDrDdQNJMj8Qgv3yJST5ufIYPuowverqCXjBu9DKnL0fwQxXtan349UkXMN1PAWM5QGK9N3PwdhPmkN1LnUDPFwmeyhgMEaXYjM"
		const uintYBJaBo6 = BigInt("525")
		const uintrcEMfSp = BigInt("219")
		const XenoFelixSHI3j4B = await XenoFelix.new(stringP64QKPn, stringbCD29w, uintYBJaBo6, uintrcEMfSp, {from: accounts[5]});
		const uintSDUXNc = BigInt("308")
		const addressrv1dVVS = accounts[3]
		const uintkZdqr6j = BigInt("1694")
		const addressOUzxc7E = "0x0000000000000000000000000000000000000001"
		const boolMvKBXlK = await XenoFelixSHI3j4B.approve.call(addressrv1dVVS, uintSDUXNc, {from: accounts[0]});
		await XenoFelixSHI3j4B.onlyNewOwner.call({from: accounts[4]});
		const bool14511c = await XenoFelixSHI3j4B.approve.call(addressOUzxc7E, uintkZdqr6j, {from: accounts[2]});

		assert.equal(boolMvKBXlK, true)
		await expect(XenoFelixSHI3j4B.onlyNewOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintVDHNviU = BigInt("776")
		const uintRu68Nau = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintVDHNviU, uintRu68Nau, {from: accounts[0]});
		const uintm0H3XI = BigInt("1051")
		const addressYEX4Rdz = accounts[3]
		const addressuurr9RO = "0x0000000000000000000000000000000000000001"
		const uintFoLQhag = BigInt("1949")
		const addressIFb0cMB = accounts[4]
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});
		const boolCF6FZix = await XenoFelixnAZ2rR1.transferFrom.call(addressuurr9RO, addressYEX4Rdz, uintm0H3XI, {from: accounts[4]});
		const boolNsSRME3 = await XenoFelixnAZ2rR1.burnOwner.call(addressIFb0cMB, uintFoLQhag, {from: accounts[1]});

		assert.equal(stringaAWNp2n, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
		await expect(XenoFelixnAZ2rR1.transferFrom.call(addressuurr9RO, addressYEX4Rdz, uintm0H3XI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringBNuaFJa = "sDsW5EScFQmwwDugIIiOSnrIIdnbrdoSv8tC7ruGU6nJ3MhgPpDInJcpDvNeBNGroeWRA91a"
		const stringVLV1hwX = "2FVOOOJF4PT3P5G7iiItwy5Xqf6uVhgZ"
		const uintjGCeFe = BigInt("239")
		const XenoFelixR3t9In = await XenoFelix.new(stringBNuaFJa, stringVLV1hwX, uintjGCeFe, {from: accounts[3]});
		const addressu1zmkUh = accounts[1]
		const uintGguLAqp = BigInt("1581")
		const addressRfXMUdx = accounts[5]
		const addressGrQ84TP = accounts[2]
		const addressVMEyaFo = await XenoFelixR3t9In.notFrozen.call(addressu1zmkUh, {from: accounts[4]});
		const boolsOoDXMU = await XenoFelixR3t9In.approve.call(addressRfXMUdx, uintGguLAqp, {from: accounts[2]});
		const boolsC6FxyR = await XenoFelixR3t9In.unfreezeAccount.call(addressGrQ84TP, {from: accounts[4]});
		await XenoFelixR3t9In.whenNotPaused.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintwUbQbQ3 = BigInt("776")
		const uintYq27ot0 = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintwUbQbQ3, uintYq27ot0, {from: accounts[0]});
		const addressPgbTM8 = accounts[1]
		const uintY4Wvg9r = BigInt("1051")
		const addressHf9m206 = accounts[3]
		const addressqesBjzl = "0x0000000000000000000000000000000000000001"
		const uintwWk7cis = BigInt("1950")
		const addressFVuUM4 = accounts[4]
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});
		const boolaXoNaGC = await XenoFelixnAZ2rR1.isOwner.call(addressPgbTM8, {from: accounts[0]});
		const boolCF6FZix = await XenoFelixnAZ2rR1.transferFrom.call(addressqesBjzl, addressHf9m206, uintY4Wvg9r, {from: accounts[4]});
		await XenoFelixnAZ2rR1.unpause.call({from: accounts[1]});
		const boolNsSRME3 = await XenoFelixnAZ2rR1.burnOwner.call(addressFVuUM4, uintwWk7cis, {from: accounts[1]});

		assert.equal(boolaXoNaGC, false)
		assert.equal(stringaAWNp2n, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
		await expect(XenoFelixnAZ2rR1.transferFrom.call(addressqesBjzl, addressHf9m206, uintY4Wvg9r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintitmWX2G = BigInt("776")
		const uintRRM8j80 = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintitmWX2G, uintRRM8j80, {from: accounts[0]});
		const uintlRlnW1 = BigInt("491")
		const addressK4QeM4Y = accounts[2]
		const uint2cDSjV = BigInt("1943")
		const addresseWiOUKZ = accounts[4]
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});
		const booln3igaW2 = await XenoFelixnAZ2rR1.transfer.call(addressK4QeM4Y, uintlRlnW1, {from: accounts[2]});
		await XenoFelixnAZ2rR1.whenPaused.call({from: accounts[3]});
		const boolNsSRME3 = await XenoFelixnAZ2rR1.burnOwner.call(addresseWiOUKZ, uint2cDSjV, {from: accounts[1]});

		assert.equal(stringaAWNp2n, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
		await expect(XenoFelixnAZ2rR1.transfer.call(addressK4QeM4Y, uintlRlnW1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintmsHjuXr = BigInt("776")
		const uintjWGxSni = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintmsHjuXr, uintjWGxSni, {from: accounts[0]});
		const addresseklthhR = accounts[1]
		const stringcrKr23 = await XenoFelixnAZ2rR1.name.call({from: accounts[0]});
		const boolekK5QV6 = await XenoFelixnAZ2rR1.unfreezeAccount.call(addresseklthhR, {from: accounts[3]});
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});

		assert.equal(stringcrKr23, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
		await expect(XenoFelixnAZ2rR1.unfreezeAccount.call(addresseklthhR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintlK6ifkd = BigInt("776")
		const uintYnSZGW4 = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintlK6ifkd, uintYnSZGW4, {from: accounts[0]});
		const boola3eTDQp = await XenoFelixnAZ2rR1.paused.call({from: accounts[1]});
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});

		assert.equal(boola3eTDQp, false)
		assert.equal(stringaAWNp2n, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
	});

	it('test for XenoFelix', async () => {
		const stringCmVPlnQ = "A7yNynx0fq3ilCzDkABJJ2hNM9EmM70TyFM8G3SiaE"
		const stringpMHgqyQ = "yx5Tog3wnwFU2WGvLqlXj5"
		const uintPKVFebE = BigInt("249")
		const XenoFelixRwVQvzl = await XenoFelix.new(stringCmVPlnQ, stringpMHgqyQ, uintPKVFebE, {from: accounts[1]});
		const addressqQmyEN = accounts[3]
		const addressf0T3Bpj = accounts[3]
		const addressGVii7mv = accounts[2]
		const addressWNaDvod = await XenoFelixRwVQvzl.addPauser.call(addressqQmyEN, {from: accounts[2]});
		const addressxFNYBd8 = await XenoFelixRwVQvzl.transferOwnership.call(addressf0T3Bpj, {from: accounts[2]});
		const stringDdpPWAv = await XenoFelixRwVQvzl.name.call({from: accounts[0]});
		const boolB2fR3V7 = await XenoFelixRwVQvzl.isOwner.call(addressGVii7mv, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintM189AZl = BigInt("776")
		const uintdfVpk9F = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintM189AZl, uintdfVpk9F, {from: accounts[0]});
		const uintSXowDGt = BigInt("869")
		const uintw6v3pi = BigInt("649")
		const addressl9FAzs4 = accounts[1]
		const boolECXw1tV = await XenoFelixnAZ2rR1.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolHUiwvpk = await XenoFelixnAZ2rR1.paused.call({from: accounts[1]});
		const boole9kTHYb = await XenoFelixnAZ2rR1.lock.call(addressl9FAzs4, uintw6v3pi, uintSXowDGt, {from: accounts[0]});
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});

		assert.equal(boolECXw1tV, false)
		assert.equal(boolHUiwvpk, false)
		await expect(XenoFelixnAZ2rR1.lock.call(addressl9FAzs4, uintw6v3pi, uintSXowDGt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintr6XO1xZ = BigInt("776")
		const uintAwwqtxj = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintr6XO1xZ, uintAwwqtxj, {from: accounts[0]});
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});
		const uint8W1teje6 = await XenoFelixnAZ2rR1.decimals.call({from: accounts[5]});

		assert.equal(stringaAWNp2n, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
		assert.equal(uint8W1teje6, BigInt("142"))
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintrxagFo8 = BigInt("776")
		const uintzZR6YNw = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintrxagFo8, uintzZR6YNw, {from: accounts[0]});
		const uintBdphtm = BigInt("797")
		const addressfvS5lRN = accounts[0]
		const uintv4to9Jq = BigInt("1052")
		const address0PhYmM = accounts[3]
		const addressBetEDp8 = "0x0000000000000000000000000000000000000001"
		const uintEPvbq4z = BigInt("1949")
		const addressqXVtYph = accounts[4]
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});
		const boolFIFAzq2 = await XenoFelixnAZ2rR1.increaseAllowance.call(addressfvS5lRN, uintBdphtm, {from: accounts[4]});
		const boolCF6FZix = await XenoFelixnAZ2rR1.transferFrom.call(addressBetEDp8, address0PhYmM, uintv4to9Jq, {from: accounts[4]});
		const boolNsSRME3 = await XenoFelixnAZ2rR1.burnOwner.call(addressqXVtYph, uintEPvbq4z, {from: accounts[1]});

		assert.equal(boolFIFAzq2, true)
		assert.equal(stringaAWNp2n, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
		await expect(XenoFelixnAZ2rR1.transferFrom.call(addressBetEDp8, address0PhYmM, uintv4to9Jq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uinteX8CwTa = BigInt("776")
		const uint0bzOxa = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uinteX8CwTa, uint0bzOxa, {from: accounts[0]});
		const uintaWVgAS0 = BigInt("2024")
		const addressH7csFXX = accounts[4]
		const uintPOwmPlB = BigInt("1072")
		const addressDygJx7k = accounts[0]
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});
		const uint256V8bNI5 = await XenoFelixnAZ2rR1.burn.call(uintaWVgAS0, {from: accounts[0]});
		const addressGV8eQzo = await XenoFelixnAZ2rR1.addPauser.call(addressH7csFXX, {from: accounts[2]});
		const boolIpNtwtK = await XenoFelixnAZ2rR1.unlock.call(addressDygJx7k, uintPOwmPlB, {from: accounts[2]});

		assert.equal(stringaAWNp2n, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
		await expect(XenoFelixnAZ2rR1.addPauser.call(addressH7csFXX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringxdY3BQU = "Wce65VFj3JMMus4hkady6tH31x7CdGH8qTSYARlKj5rXjzl9n53n76TZsHwItPzgD347namyYwk7cuf8i3G4y3"
		const stringC9u6teZ = "LiV8mWaOxWqcCSkMqIBzdiUYYbPhB7Ob3KGBNV4o4TaSxMAbWmAYRUKb"
		const uintIdamDul = BigInt("204")
		const XenoFelixFMvVPi0 = await XenoFelix.new(stringxdY3BQU, stringC9u6teZ, uintIdamDul, {from: accounts[0]});
		const addressyMpVhrx = accounts[1]
		const stringXxmzCq6 = await XenoFelixFMvVPi0.symbol.call({from: accounts[1]});
		const addresscqhKikI = await XenoFelixFMvVPi0.addPauser.call(addressyMpVhrx, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintMdT7Oku = BigInt("776")
		const uintfKuyPr9 = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintMdT7Oku, uintfKuyPr9, {from: accounts[0]});
		const addressXhLCcxc = accounts[2]
		const addressut1Um2A = accounts[0]
		const addressGu44L3i = accounts[4]
		const uintW6cyU3F = BigInt("1403")
		const addressAUtOzW = "0x0000000000000000000000000000000000000001"
		const addressKZzw7QH = accounts[0]
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});
		const uint256RT7AfNN = await XenoFelixnAZ2rR1.balanceOf.call(addressXhLCcxc, {from: accounts[0]});
		const addressCYH7wHU = await XenoFelixnAZ2rR1.notFrozenAndTransaction.call(addressGu44L3i, addressut1Um2A, {from: "0x0000000000000000000000000000000000000001"});
		const bool21mX9k = await XenoFelixnAZ2rR1.transferFrom.call(addressKZzw7QH, addressAUtOzW, uintW6cyU3F, {from: accounts[3]});

		assert.equal(stringaAWNp2n, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
		assert.equal(uint256RT7AfNN, BigInt("0"))
		await expect(XenoFelixnAZ2rR1.notFrozenAndTransaction.call(addressGu44L3i, addressut1Um2A, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintmmYWiLK = BigInt("776")
		const uint4i6ZGe = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintmmYWiLK, uint4i6ZGe, {from: accounts[0]});
		const uintgzgnTI4 = BigInt("1756")
		const addressW9sAIoV = accounts[3]
		const stringifRpRJn = await XenoFelixnAZ2rR1.symbol.call({from: accounts[0]});
		const boolLgZf5iN = await XenoFelixnAZ2rR1.paused.call({from: accounts[0]});
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});
		const boolyS8I2Pi = await XenoFelixnAZ2rR1.decreaseAllowance.call(addressW9sAIoV, uintgzgnTI4, {from: accounts[1]});

		assert.equal(boolLgZf5iN, false)
		assert.equal(stringaAWNp2n, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
		assert.equal(stringifRpRJn, "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le")
		await expect(XenoFelixnAZ2rR1.decreaseAllowance.call(addressW9sAIoV, uintgzgnTI4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintkvAcgo0 = BigInt("776")
		const uintSLmmym8 = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintkvAcgo0, uintSLmmym8, {from: accounts[0]});
		const uintTcL6ydi = BigInt("1607")
		const addressA5kbljE = accounts[4]
		const addressXPYj5Wu = await XenoFelixnAZ2rR1.burnFrom.call(addressA5kbljE, uintTcL6ydi, {from: accounts[3]});
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});

		await expect(XenoFelixnAZ2rR1.burnFrom.call(addressA5kbljE, uintTcL6ydi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintROo2YWT = BigInt("776")
		const uintaanwxC3 = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintROo2YWT, uintaanwxC3, {from: accounts[0]});
		const uint3y4wgg = BigInt("1403")
		const addressrtqwCk = "0x0000000000000000000000000000000000000001"
		const addressS7YOPe1 = accounts[0]
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});
		const uint256VAXFzF = await XenoFelixnAZ2rR1.totalSupply.call({from: accounts[1]});
		const bool21mX9k = await XenoFelixnAZ2rR1.transferFrom.call(addressS7YOPe1, addressrtqwCk, uint3y4wgg, {from: accounts[3]});
		await XenoFelixnAZ2rR1.whenPaused.call({from: accounts[4]});

		assert.equal(stringaAWNp2n, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
		assert.equal(uint256VAXFzF, BigInt("31540901349509497882411888671666713864820965360316461439386663931676314304512"))
		await expect(XenoFelixnAZ2rR1.transferFrom.call(addressS7YOPe1, addressrtqwCk, uint3y4wgg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintv37iJDz = BigInt("776")
		const uintqWCdBlv = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintv37iJDz, uintqWCdBlv, {from: accounts[0]});
		const addressROjrgpo = accounts[0]
		const addresswF0HvlM = accounts[2]
		const boolhaqk9EN = await XenoFelixnAZ2rR1.paused.call({from: accounts[0]});
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});
		const uint256IQTdpv3 = await XenoFelixnAZ2rR1.allowance.call(addresswF0HvlM, addressROjrgpo, {from: accounts[0]});

		assert.equal(boolhaqk9EN, false)
		assert.equal(stringaAWNp2n, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
		assert.equal(uint256IQTdpv3, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintf4IFun3 = BigInt("776")
		const uintfYcPVgy = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintf4IFun3, uintfYcPVgy, {from: accounts[0]});
		const addressqN8AXNd = accounts[1]
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});
		await XenoFelixnAZ2rR1.renouncePauser.call({from: accounts[2]});
		const boolIaN4pEX = await XenoFelixnAZ2rR1.paused.call({from: accounts[2]});
		const boolKVyGHd8 = await XenoFelixnAZ2rR1.unfreezeAccount.call(addressqN8AXNd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringaAWNp2n, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
		await expect(XenoFelixnAZ2rR1.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintQad1sWo = BigInt("776")
		const uintCjaZ1so = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintQad1sWo, uintCjaZ1so, {from: accounts[0]});
		const addressPnSdwmU = accounts[3]
		const addressVKDD6S3 = await XenoFelixnAZ2rR1.addPauser.call(addressPnSdwmU, {from: accounts[0]});
		const stringaAWNp2n = await XenoFelixnAZ2rR1.name.call({from: accounts[4]});

		assert.equal(stringaAWNp2n, "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK")
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintYAFTrt8 = BigInt("776")
		const uintgSywo1R = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintYAFTrt8, uintgSywo1R, {from: accounts[0]});
		const uintaTntiS = BigInt("551")
		const addressxlwGHZY = accounts[0]
		const uintDW47Adz = BigInt("1403")
		const addressCB9Y25c = "0x0000000000000000000000000000000000000001"
		const address60drfb = accounts[0]
		const addressImF4Duh = accounts[5]
		await XenoFelixnAZ2rR1.renouncePauser.call({from: accounts[0]});
		const boolST4pR3H = await XenoFelixnAZ2rR1.transfer.call(addressxlwGHZY, uintaTntiS, {from: accounts[4]});
		const bool21mX9k = await XenoFelixnAZ2rR1.transferFrom.call(address60drfb, addressCB9Y25c, uintDW47Adz, {from: accounts[3]});
		const booldAE6WPW = await XenoFelixnAZ2rR1.freezeAccount.call(addressImF4Duh, {from: accounts[0]});

		await expect(XenoFelixnAZ2rR1.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintMAAKzGp = BigInt("776")
		const uintzUhCje5 = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintMAAKzGp, uintzUhCje5, {from: accounts[0]});
		const uintgfQ2quf = BigInt("1256")
		const addressYS6Dgf0 = accounts[2]
		const uintv5e2RAp = BigInt("1391")
		const addressoRZQCt = "0x0000000000000000000000000000000000000001"
		const addressQOuQN2 = accounts[0]
		const booli0F8zmG = await XenoFelixnAZ2rR1.burnOwner.call(addressYS6Dgf0, uintgfQ2quf, {from: accounts[0]});
		const bool21mX9k = await XenoFelixnAZ2rR1.transferFrom.call(addressQOuQN2, addressoRZQCt, uintv5e2RAp, {from: accounts[3]});

		await expect(XenoFelixnAZ2rR1.burnOwner.call(addressYS6Dgf0, uintgfQ2quf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringdrex1vw = "BAUy160Kbd7XYHQozZVWRhD4DqX2VjvxRdXRfeB0CBwcw8E0KwSVsjBVtgaA4"
		const stringwGViaOj = "CP3Sp7XjzC1aC3dV26oeQdhKcmHjrJVhHi03fxH5rVGPtYblaB461pwXbT80gdHIGDyv3RiaPahoAQ"
		const uintcTcokzm = BigInt("35")
		const XenoFelixkzrePU0 = await XenoFelix.new(stringdrex1vw, stringwGViaOj, uintcTcokzm, {from: accounts[5]});
		const uintiIh4XsK = BigInt("449")
		const addressuzadJiZ = accounts[1]
		const uintZgCCiPn = BigInt("749")
		const addressjdOZN7w = accounts[4]
		const address7KN22K = accounts[4]
		const boolRrfy7Ca = await XenoFelixkzrePU0.decreaseAllowance.call(addressuzadJiZ, uintiIh4XsK, {from: accounts[1]});
		await XenoFelixkzrePU0.whenPaused.call({from: accounts[2]});
		const boolO6rvOXF = await XenoFelixkzrePU0.transferFrom.call(address7KN22K, addressjdOZN7w, uintZgCCiPn, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintNoZPQMj = BigInt("776")
		const uintq58wb6e = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintNoZPQMj, uintq58wb6e, {from: accounts[0]});
		const addressPq4R9nm = accounts[6]
		const addressWvbIDE7 = accounts[0]
		const uint256YjmgcvB = await XenoFelixnAZ2rR1.balanceOf.call(addressPq4R9nm, {from: accounts[1]});
		const boolyVf13Yx = await XenoFelixnAZ2rR1.isOwner.call(addressWvbIDE7, {from: accounts[2]});

		assert.equal(boolyVf13Yx, true)
		assert.equal(uint256YjmgcvB, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uinthXl7WXh = BigInt("776")
		const uintZ9gzvz = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uinthXl7WXh, uintZ9gzvz, {from: accounts[0]});
		const addressM1IE5d = accounts[5]
		const uintu3VHTa = BigInt("1403")
		const addresssRfCSN1 = "0x0000000000000000000000000000000000000001"
		const addresssNuECC8 = accounts[1]
		const uintHneS59H = BigInt("17")
		const addresscLpnXdZ = accounts[3]
		const boolNtHSl05 = await XenoFelixnAZ2rR1.freezeAccount.call(addressM1IE5d, {from: accounts[0]});
		const bool21mX9k = await XenoFelixnAZ2rR1.transferFrom.call(addresssNuECC8, addresssRfCSN1, uintu3VHTa, {from: accounts[3]});
		const boolALZ1CZ = await XenoFelixnAZ2rR1.transfer.call(addresscLpnXdZ, uintHneS59H, {from: accounts[2]});

		assert.equal(boolNtHSl05, true)
		await expect(XenoFelixnAZ2rR1.transferFrom.call(addresssNuECC8, addresssRfCSN1, uintu3VHTa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringu5nr7yi = "re54Gmr7875tlqI3HoPgLBy4lxASNmR4L80J7PaNLcvvxrN9SA"
		const stringp2OmBUC = "PfIyy5qDqQ21JB3NeRuxqS2QrMFqFaOwyOJ1Xuvyvgn27iC4B1ugyPiQzMZ5Em7jHxjzcj3fFNXNz5yIlI7gp4VV"
		const uintItaiEgF = BigInt("53")
		const XenoFelixITt4xoL = await XenoFelix.new(stringu5nr7yi, stringp2OmBUC, uintItaiEgF, {from: accounts[4]});
		const uintSEuRbQM = BigInt("39")
		const address47xz6o = accounts[0]
		const addressEv60iEX = accounts[4]
		const addressQxvrMUA = accounts[4]
		const boolUTdq5Qe = await XenoFelixITt4xoL.approve.call(address47xz6o, uintSEuRbQM, {from: accounts[2]});
		const boolLwxMja1 = await XenoFelixITt4xoL.freezeAccount.call(addressEv60iEX, {from: accounts[5]});
		const boolUfeF0t = await XenoFelixITt4xoL.freezeAccount.call(addressQxvrMUA, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringLT2XQLT = "lzyTODCojfVmdHxLPU6eLzxZjxgHQgXvl8Z4iQ5"
		const stringt12Ez1n = "x9tPADwGpSKoSpc6974w2aCUUviLpxTXK838fXGsKpviyzUWbFdyfXWM64WkQFKMyHb9k0MJzkjMNnldvBhHgiw2MMsl1"
		const uintx62lala = BigInt("297")
		const uintjV6L9U = BigInt("216")
		const XenoFelixvgjZuaA = await XenoFelix.new(stringLT2XQLT, stringt12Ez1n, uintx62lala, uintjV6L9U, {from: "0x0000000000000000000000000000000000000001"});
		const addressMGD0dmC = accounts[5]
		const uintL5riguk = BigInt("1569")
		const addressxnY6cQZ = accounts[3]
		const uintuM45EQI = BigInt("601")
		const uintZBCKXTR = BigInt("484")
		const addresssIYb5Kl = accounts[2]
		const uint256ccG3IX = await XenoFelixvgjZuaA.balanceOf.call(addressMGD0dmC, {from: accounts[3]});
		const stringEL8edpc = await XenoFelixvgjZuaA.symbol.call({from: accounts[2]});
		const boolohPr0YL = await XenoFelixvgjZuaA.burnOwner.call(addressxnY6cQZ, uintL5riguk, {from: accounts[5]});
		const boolhFTaMkl = await XenoFelixvgjZuaA.transferWithLock.call(addresssIYb5Kl, uintZBCKXTR, uintuM45EQI, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintYv5eN9a = BigInt("776")
		const uint58zWc0 = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintYv5eN9a, uint58zWc0, {from: accounts[0]});
		const addressautTGaJ = accounts[3]
		const uintwMyn4Oq = BigInt("394")
		const addressPNVdVA7 = accounts[3]
		const boolxIq7QYU = await XenoFelixnAZ2rR1.unfreezeAccount.call(addressautTGaJ, {from: accounts[0]});
		await XenoFelixnAZ2rR1.renouncePauser.call({from: accounts[0]});
		const boolyLKR7pK = await XenoFelixnAZ2rR1.transfer.call(addressPNVdVA7, uintwMyn4Oq, {from: accounts[0]});

		await expect(XenoFelixnAZ2rR1.unfreezeAccount.call(addressautTGaJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcs8SgEY = "6vxuUU4jUksuvC4jk3H2xyWLHSuOBV6igzPFmeySHlcCiPK4iWm"
		const stringHtmpo4 = "r22LhwsPmrENfx6"
		const uintse1Awk5 = BigInt("1157")
		const uintTEectsZ = BigInt("176")
		const XenoFelixR8HZyAQ = await XenoFelix.new(stringcs8SgEY, stringHtmpo4, uintse1Awk5, uintTEectsZ, {from: accounts[4]});
		const addressGN2te0J = accounts[1]
		const addressdVUoThp = accounts[2]
		const uintVcIdlzh = BigInt("1986")
		const addressAlrQASz = accounts[4]
		const addressmog5cDc = accounts[1]
		const uintEVcCEdE = BigInt("124")
		const addressKErZi3V = accounts[4]
		const uintilyhQQL = BigInt("404")
		const addressUZG2eIZ = accounts[0]
		const addressMu0VXDP = await XenoFelixR8HZyAQ.transferOwnership.call(addressGN2te0J, {from: accounts[4]});
		const boolvSbEWwa = await XenoFelixR8HZyAQ.isPauser.call(addressdVUoThp, {from: accounts[3]});
		const boolBizzYrz = await XenoFelixR8HZyAQ.transfer.call(addressAlrQASz, uintVcIdlzh, {from: accounts[0]});
		const booltU49ACv = await XenoFelixR8HZyAQ.unfreezeAccount.call(addressmog5cDc, {from: accounts[5]});
		const bool4CgyeC = await XenoFelixR8HZyAQ.transfer.call(addressKErZi3V, uintEVcCEdE, {from: "0x0000000000000000000000000000000000000001"});
		const boolV930oRl = await XenoFelixR8HZyAQ.transfer.call(addressUZG2eIZ, uintilyhQQL, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolvSbEWwa, false)
		await expect(XenoFelixR8HZyAQ.transfer.call(addressAlrQASz, uintVcIdlzh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRJ5sVq = "cruIWbywDVX59AgtiopXRgfTx5RzcvYVPpk5ITdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK"
		const stringyGTECM = "r9TN6tfT5iv0ZhvHofL5svhW9HedeIQ91Qdx3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le"
		const uintfq65Uwt = BigInt("776")
		const uintR4xn83i = BigInt("142")
		const XenoFelixnAZ2rR1 = await XenoFelix.new(stringRJ5sVq, stringyGTECM, uintfq65Uwt, uintR4xn83i, {from: accounts[0]});
		const addressgOFACk4 = accounts[6]
		const addressnSjzxKl = accounts[2]
		const addresso2MzzgJ = accounts[1]
		const uint256YjmgcvB = await XenoFelixnAZ2rR1.balanceOf.call(addressgOFACk4, {from: accounts[1]});
		const uint256a1rbv0P = await XenoFelixnAZ2rR1.balanceOf.call(addressnSjzxKl, {from: accounts[5]});
		const addressAceWUwb = await XenoFelixnAZ2rR1.removePauser.call(addresso2MzzgJ, {from: accounts[0]});

		assert.equal(uint256YjmgcvB, BigInt("0"))
		assert.equal(uint256a1rbv0P, BigInt("0"))
		await expect(XenoFelixnAZ2rR1.removePauser.call(addresso2MzzgJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})