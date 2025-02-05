FROM alpine:latest

RUN apk update && apk add openssh libstdc++

RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed -i 's/AllowTcpForwarding no/AllowTcpForwarding yes/' /etc/ssh/sshd_config

# Remove wget!
RUN rm -f /usr/bin/wget

RUN ssh-keygen -A

RUN echo "root:foobar" | chpasswd

EXPOSE 5673
CMD ["/usr/sbin/sshd", "-D", "-p", "5673"]