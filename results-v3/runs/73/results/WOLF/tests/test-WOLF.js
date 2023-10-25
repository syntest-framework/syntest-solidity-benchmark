const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringEceau7p = "HMxjDe8JMVWpFNvUNeQ4UevUuY6iWyaKT8J8b7RFE"
		const stringiSPIES = "8obifhzusdys4mQCuJUGIYhmWY3pBWRRSGMWifun7kfWqXALdVGAWKYuJQfcxQKw"
		const uintMAhtAxd = BigInt("44")
		const WOLFcWB4iHA = await WOLF.new(stringEceau7p, stringiSPIES, uintMAhtAxd, {from: accounts[0]});
		const uintGUks7L = BigInt("1074")
		const addressr6ZENnJ = accounts[4]
		const addressZXYn7Xn = accounts[4]
		const uintxwTsMXN = BigInt("112")
		const addressb0jlwuH = accounts[3]
		const uinteddtVOG = BigInt("234")
		const addressGgBs49 = accounts[3]
		const uintewhEL2C = BigInt("446")
		const addressu6WqnF = "0x0000000000000000000000000000000000000001"
		const addressa0gE9dc = accounts[1]
		const addressnrZY5zD = "0x0000000000000000000000000000000000000001"
		const boolyFXHxdY = await WOLFcWB4iHA.transferFrom.call(addressZXYn7Xn, addressr6ZENnJ, uintGUks7L, {from: "0x0000000000000000000000000000000000000001"});
		const boolTJKE9s = await WOLFcWB4iHA.approveAndCall.call(addressb0jlwuH, uintxwTsMXN, {from: accounts[2]});
		const bool8SXByb = await WOLFcWB4iHA.transfer.call(addressGgBs49, uinteddtVOG, {from: accounts[4]});
		const boolcwRlMKa = await WOLFcWB4iHA.transferFrom.call(addressa0gE9dc, addressu6WqnF, uintewhEL2C, {from: "0x0000000000000000000000000000000000000001"});
		const boolFFDopDj = await WOLFcWB4iHA.transferownership.call(addressnrZY5zD, {from: accounts[1]});

		await expect(WOLFcWB4iHA.transferFrom.call(addressZXYn7Xn, addressr6ZENnJ, uintGUks7L, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringJHmBiqY = "r2a74H4JiAnzoQkdpvrNEOVWleMrEHK37MGM6i8bU4"
		const stringbt8WZ9Y = "Ed632oge"
		const uintiERV72L = BigInt("1580")
		const WOLFqSd6CE8 = await WOLF.new(stringJHmBiqY, stringbt8WZ9Y, uintiERV72L, {from: accounts[0]});
		const uintPwtUK3z = BigInt("800")
		const addressx5pcgKX = accounts[3]
		const uintJUuvk0a = BigInt("1772")
		const addressJozHv7z = accounts[3]
		const uintNa0xdt = BigInt("814")
		const addressIXrSFXO = accounts[4]
		const uintNYmCPwk = BigInt("2043")
		const addressltldzn = accounts[1]
		const uintaXFhRU = BigInt("797")
		const addressPg4japp = accounts[0]
		const boolzAfFNwl = await WOLFqSd6CE8.approve.call(addressx5pcgKX, uintPwtUK3z, {from: accounts[0]});
		const boolW8QeH9e = await WOLFqSd6CE8.approve.call(addressJozHv7z, uintJUuvk0a, {from: accounts[1]});
		const boolARCmwFP = await WOLFqSd6CE8.approveAndCall.call(addressIXrSFXO, uintNa0xdt, {from: accounts[0]});
		const boolVOoWeGe = await WOLFqSd6CE8.approveAndCall.call(addressltldzn, uintNYmCPwk, {from: accounts[2]});
		const boolHz6aG8u = await WOLFqSd6CE8.approveAndCall.call(addressPg4japp, uintaXFhRU, {from: accounts[5]});

		assert.equal(boolARCmwFP, true)
		assert.equal(boolW8QeH9e, true)
		assert.equal(boolzAfFNwl, true)
		await expect(WOLFqSd6CE8.approveAndCall.call(addressltldzn, uintNYmCPwk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringgdX8dfT = "kWZZM742o6EHoN6Zt1TdnSJt6puZ8ggwcuw8i8lXX71jqZ5ctsdBZHu7Rc17t9I5rt3r1uudUloHHzFBus6zH7yGLVZ"
		const stringSVSvS9V = "I2OPwFgk2y8aWYnfDRhihzgScLfb"
		const uintA2saZyS = BigInt("1783")
		const WOLFIxOWzYd = await WOLF.new(stringgdX8dfT, stringSVSvS9V, uintA2saZyS, {from: accounts[0]});
		const addresspzr9ZnO = accounts[5]
		const addressRP0gVKl = accounts[0]
		const uintizPwLLe = BigInt("1665")
		const address1Q3Sgp = accounts[0]
		const addresshgNByo2 = accounts[0]
		const boolg2lbZuu = await WOLFIxOWzYd.transferownership.call(addresspzr9ZnO, {from: accounts[2]});
		const boolyz5SG23 = await WOLFIxOWzYd.transferownership.call(addressRP0gVKl, {from: accounts[0]});
		const boolAoHi6V9 = await WOLFIxOWzYd.transferFrom.call(addresshgNByo2, address1Q3Sgp, uintizPwLLe, {from: accounts[1]});

		await expect(WOLFIxOWzYd.transferownership.call(addresspzr9ZnO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringXovNWKz = "4zM0t73oNyMXWdc3iC7awnIY3cIQRhUXZB2e6Ng5vXTBzIN4Prx2ckq4QjLe2T2pzRbTzXrix1GphOkpT6W"
		const stringUm1BQ9s = "8enZVXgONSRvdN2gkUH0IDmNp6EuMBcmtxYea5cJA8WBFEx"
		const uinti2EsX3 = BigInt("671")
		const WOLFhhvPFu4 = await WOLF.new(stringXovNWKz, stringUm1BQ9s, uinti2EsX3, {from: accounts[2]});
		const uintDgMe3jo = BigInt("109")
		const addressu2vHG6q = accounts[3]
		const uintwaBSGZp = BigInt("1197")
		const addressCx7LulG = accounts[4]
		const boolK5Z2Ecd = await WOLFhhvPFu4.transfer.call(addressu2vHG6q, uintDgMe3jo, {from: accounts[0]});
		const boolN5ZkQlS = await WOLFhhvPFu4.approve.call(addressCx7LulG, uintwaBSGZp, {from: accounts[2]});

		await expect(WOLFhhvPFu4.transfer.call(addressu2vHG6q, uintDgMe3jo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringXBU49tG = "J6YdOo1"
		const stringe08El6U = "biN7cdJqX1LwDSTRUyBoAeHdMXVh7pvUvRGntRqq6wAYBPXFYnbuNwOnmbtU3"
		const uintosvSE9C = BigInt("1366")
		const WOLFKOwR5Nh = await WOLF.new(stringXBU49tG, stringe08El6U, uintosvSE9C, {from: accounts[4]});
		const uintvwFFUrK = BigInt("2002")
		const addressCpgMOpZ = accounts[2]
		const addressphdDic = accounts[4]
		const uintNeWgWAs = BigInt("1189")
		const addressAKbLhMs = accounts[0]
		const uintN6tyYRy = BigInt("390")
		const addressgrEt7up = accounts[2]
		const addressK4uTsIA = accounts[1]
		const uintC1Qse7G = BigInt("1861")
		const addressC7xGNVI = accounts[1]
		const boolxPwnFFv = await WOLFKOwR5Nh.transferFrom.call(addressphdDic, addressCpgMOpZ, uintvwFFUrK, {from: accounts[4]});
		const boolK6Afxhz = await WOLFKOwR5Nh.approve.call(addressAKbLhMs, uintNeWgWAs, {from: accounts[3]});
		const boolusEMy27 = await WOLFKOwR5Nh.transferFrom.call(addressK4uTsIA, addressgrEt7up, uintN6tyYRy, {from: accounts[3]});
		const boolPuvgWHh = await WOLFKOwR5Nh.approve.call(addressC7xGNVI, uintC1Qse7G, {from: accounts[1]});

		assert.equal(boolK6Afxhz, true)
		assert.equal(boolxPwnFFv, true)
		await expect(WOLFKOwR5Nh.transferFrom.call(addressK4uTsIA, addressgrEt7up, uintN6tyYRy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringXovNWKz = "4zM0t73oNyMXWdc3iC7awnIY3cIQRhUXZB2e6Ng5vXTBzIN4Prx2ckq4QjLe2T2pzRbTzXrix1GphOkpT6W"
		const stringUm1BQ9s = "8enZVXgONSRvdN2gkUH0IDmNp6EuMBcmtxYea5cJA8WBFEx"
		const uintig5s3E = BigInt("671")
		const WOLFhhvPFu4 = await WOLF.new(stringXovNWKz, stringUm1BQ9s, uintig5s3E, {from: accounts[2]});
		const uintMZKzvTy = BigInt("275")
		const address3UMHqO = accounts[4]
		const addressSQguZxV = accounts[1]
		const booljxnsy8v = await WOLFhhvPFu4.approveAndCall.call(address3UMHqO, uintMZKzvTy, {from: accounts[2]});
		const boolZ9llzQ = await WOLFhhvPFu4.transferownership.call(addressSQguZxV, {from: accounts[2]});

		assert.equal(boolZ9llzQ, true)
		assert.equal(booljxnsy8v, true)
	});

	it('test for WOLF', async () => {
		const stringPtnXUBY = "mY6kRfOcKXI9XcXuqixKzjPn9hzjqtwTxZLbWygMPmwsGRamnVAKzDSai8U1OFp3DF"
		const stringZKsxu9n = "5IS2UGLQJ4qbAN"
		const uintU2ESOJv = BigInt("1389")
		const WOLFhsx9NDK = await WOLF.new(stringPtnXUBY, stringZKsxu9n, uintU2ESOJv, {from: "0x0000000000000000000000000000000000000001"});
		const addressC4hLksj = accounts[0]
		const uintIJSk5M0 = BigInt("1845")
		const addressGeeT8P = accounts[1]
		const uintBfDsAgj = BigInt("58")
		const addressItFww1U = accounts[0]
		const boolsRww0cb = await WOLFhsx9NDK.transferownership.call(addressC4hLksj, {from: accounts[2]});
		const boolSW4gRU1 = await WOLFhsx9NDK.approve.call(addressGeeT8P, uintIJSk5M0, {from: accounts[4]});
		const boolSUOwMVZ = await WOLFhsx9NDK.transfer.call(addressItFww1U, uintBfDsAgj, {from: accounts[3]});
	});

	it('test for WOLF', async () => {
		const stringK4ZKBWS = "72IRBah2NsTeCBv7OyLgvGfpxiCXVxz2xKWqzLg9zAseBHqhmINtJN93mEdYiDrCtQvSSuMeOEoWty1"
		const stringNz6GTY = "fZgjDez2LPhzzxzQI91JAWigBq25akCYkf1wXdXTdou2KEfe5HS2psPUKe6CcFND3jWsEgi"
		const uintSTRczsX = BigInt("1431")
		const WOLFKXI4MQx = await WOLF.new(stringK4ZKBWS, stringNz6GTY, uintSTRczsX, {from: accounts[2]});
		const uinttqgTmhk = BigInt("0")
		const addressEyc29N = accounts[3]
		const uintJsHNtt = BigInt("1522")
		const addressuW2yuH7 = accounts[1]
		const uintacmCmUx = BigInt("1688")
		const addresss5J4KSb = accounts[1]
		const boolZZVlWm4 = await WOLFKXI4MQx.transfer.call(addressEyc29N, uinttqgTmhk, {from: "0x0000000000000000000000000000000000000001"});
		const boolO3ZUHTI = await WOLFKXI4MQx.approve.call(addressuW2yuH7, uintJsHNtt, {from: accounts[4]});
		const boolQzvvRjL = await WOLFKXI4MQx.approve.call(addresss5J4KSb, uintacmCmUx, {from: accounts[2]});

		assert.equal(boolO3ZUHTI, true)
		assert.equal(boolQzvvRjL, true)
		assert.equal(boolZZVlWm4, true)
	});

	it('test for WOLF', async () => {
		const stringXovNWKz = "4zM0t73oNyMXWdc3iC7awnIY3cIQRhUXZB2e6Ng5vXTBzIN4Prx2ckq4QjLe2T2pzRbTzXrix1GphOkpT6W"
		const stringUm1BQ9s = "8enZVXgONSRvdN2gkUH0IDmNp6EuMBcmtxYea5cJA8WBFEx"
		const uintu1Zzt71 = BigInt("671")
		const WOLFhhvPFu4 = await WOLF.new(stringXovNWKz, stringUm1BQ9s, uintu1Zzt71, {from: accounts[2]});
		const uintiYzJrDb = BigInt("2")
		const addressDagLHuI = accounts[4]
		const addressZLONoCs = "0x00000000000000000000000000000000000000-1"
		const booljxnsy8v = await WOLFhhvPFu4.approveAndCall.call(addressDagLHuI, uintiYzJrDb, {from: accounts[2]});
		const boolpvtIiBz = await WOLFhhvPFu4.transferownership.call(addressZLONoCs, {from: accounts[0]});

		assert.equal(booljxnsy8v, true)
		await expect(WOLFhhvPFu4.transferownership.call(addressZLONoCs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringXovNWKz = "4zM0t73oNyMXWdc3iC7awnIY3cIQRhUXZB2e6Ng5vXTBzIN4Prx2ckq4QjLe2T2pzRbTzXrix1GphOkpT6W"
		const stringUm1BQ9s = "8enZVXgONSRvdN2gkUH0IDmNp6EuMBcmtxYea5cJA8WBFEx"
		const uintSr6syJz = BigInt("671")
		const WOLFhhvPFu4 = await WOLF.new(stringXovNWKz, stringUm1BQ9s, uintSr6syJz, {from: accounts[2]});
		const uintHBhsRR2 = BigInt("0")
		const addressTAWURYU = accounts[4]
		const booljxnsy8v = await WOLFhhvPFu4.approveAndCall.call(addressTAWURYU, uintHBhsRR2, {from: accounts[2]});

		assert.equal(booljxnsy8v, true)
	});
})